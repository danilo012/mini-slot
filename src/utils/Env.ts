import { ENV } from '/src/game/enums';

export class Env {
  constructor(readonly mode: string) {}

  isDev() {
    return this.mode === ENV.DEV;
  }

  isProd() {
    return this.mode === ENV.PROD;
  }

  isTest() {
    return this.mode === ENV.TEST;
  }
}

export default new Env(import.meta.env.MODE);
