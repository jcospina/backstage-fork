/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { getVoidLogger } from '../logging/voidLogger';
import { ConfigReader } from '@backstage/config';
import { ServerTokenManager } from './ServerTokenManager';
import { Logger } from 'winston';
import { JWK } from 'jose';

const emptyConfig = new ConfigReader({});
const configWithSecret = new ConfigReader({
  backend: { auth: { keys: [{ secret: 'a-secret-key' }] } },
});
const env = process.env;
let logger: Logger;

describe('ServerTokenManager', () => {
  beforeEach(() => {
    process.env = { ...env };
    logger = getVoidLogger();
  });

  afterEach(() => {
    process.env = env;
  });

  describe('getToken', () => {
    it('should return a token', async () => {
      const tokenManager = ServerTokenManager.default({
        config: configWithSecret,
        logger,
      });
      expect((await tokenManager.getToken()).token).toBeDefined();
    });
  });

  describe('authenticate', () => {
    it('should not throw if token is valid', async () => {
      const tokenManager = ServerTokenManager.default({
        config: configWithSecret,
        logger,
      });
      const { token } = await tokenManager.getToken();
      await expect(tokenManager.authenticate(token)).resolves.not.toThrow();
    });

    it('should throw if token is invalid', async () => {
      const tokenManager = ServerTokenManager.default({
        config: configWithSecret,
        logger,
      });
      await expect(
        tokenManager.authenticate('random-string'),
      ).rejects.toThrowError(/invalid server token/i);
    });

    it('should validate server tokens created by a different instance using the same secret', async () => {
      const tokenManager1 = ServerTokenManager.default({
        config: configWithSecret,
        logger,
      });
      const tokenManager2 = ServerTokenManager.default({
        config: configWithSecret,
        logger,
      });

      const { token } = await tokenManager1.getToken();

      await expect(tokenManager2.authenticate(token)).resolves.not.toThrow();
    });

    it('should validate server tokens created using any of the secrets', async () => {
      const tokenManager1 = ServerTokenManager.default({
        config: new ConfigReader({
          backend: { auth: { keys: [{ secret: 'a1b2c3' }] } },
        }),
        logger,
      });
      const tokenManager2 = ServerTokenManager.default({
        config: new ConfigReader({
          backend: { auth: { keys: [{ secret: 'd4e5f6' }] } },
        }),
        logger,
      });
      const tokenManager3 = ServerTokenManager.default({
        config: new ConfigReader({
          backend: {
            auth: { keys: [{ secret: 'a1b2c3' }, { secret: 'd4e5f6' }] },
          },
        }),
        logger,
      });

      const { token: token1 } = await tokenManager1.getToken();
      await expect(tokenManager3.authenticate(token1)).resolves.not.toThrow();

      const { token: token2 } = await tokenManager2.getToken();
      await expect(tokenManager3.authenticate(token2)).resolves.not.toThrow();
    });

    it('should throw for server tokens created using a different secret', async () => {
      const tokenManager1 = ServerTokenManager.default({
        config: new ConfigReader({
          backend: { auth: { keys: [{ secret: 'a1b2c3' }] } },
        }),
        logger,
      });
      const tokenManager2 = ServerTokenManager.default({
        config: new ConfigReader({
          backend: { auth: { keys: [{ secret: 'd4e5f6' }] } },
        }),
        logger,
      });

      const { token } = await tokenManager1.getToken();

      await expect(tokenManager2.authenticate(token)).rejects.toThrowError(
        /invalid server token/i,
      );
    });

    it('should throw for server tokens created by a different generated secret', async () => {
      (process.env as any).NODE_ENV = 'development';
      const tokenManager1 = ServerTokenManager.default({
        config: new ConfigReader({
          backend: { auth: { keys: [{ secret: 'a1b2c3' }] } },
        }),
        logger,
      });
      const tokenManager2 = ServerTokenManager.default({
        config: emptyConfig,
        logger,
      });

      const { token } = await tokenManager2.getToken();

      await expect(tokenManager1.authenticate(token)).rejects.toThrowError(
        /invalid server token/i,
      );
    });
  });

  describe('default', () => {
    describe('NODE_ENV === production', () => {
      it('should throw if backend auth configuration is missing', () => {
        expect(() =>
          ServerTokenManager.default({ config: emptyConfig, logger }),
        ).toThrow();
      });

      it('should throw if no keys are included in the configuration', () => {
        expect(() =>
          ServerTokenManager.default({
            config: new ConfigReader({
              backend: { auth: { keys: [] } },
            }),
            logger,
          }),
        ).toThrow();
      });

      it('should throw if any key is missing a secret property', () => {
        expect(() =>
          ServerTokenManager.default({
            config: new ConfigReader({
              backend: {
                auth: {
                  keys: [{ secret: '123' }, {}, { secret: '789' }],
                },
              },
            }),
            logger,
          }),
        ).toThrow();
      });
    });

    describe('NODE_ENV === development', () => {
      const generateSyncSpy = jest.spyOn(JWK, 'generateSync');

      beforeEach(() => {
        (process.env as any).NODE_ENV = 'development';
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should generate a key if no config is provided', () => {
        ServerTokenManager.default({
          config: emptyConfig,
          logger,
        });

        expect(generateSyncSpy).toHaveBeenCalledWith('oct', 192);
      });

      it('should generate a key if no keys are provided in the configuration', () => {
        ServerTokenManager.default({
          config: new ConfigReader({
            backend: { auth: { keys: [] } },
          }),
          logger,
        });

        expect(generateSyncSpy).toHaveBeenCalledWith('oct', 192);
      });

      it('should use provided secrets if config is provided', () => {
        ServerTokenManager.default({ config: configWithSecret, logger });
        expect(generateSyncSpy).not.toHaveBeenCalled();
      });
    });
  });
});
