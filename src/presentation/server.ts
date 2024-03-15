import express from 'express';
import { envs } from '../config';

interface Options {
  port?: number;
}

export class Server {
  public readonly app = express();

  constructor() {}

  async start() {
    this.app.listen(envs.PORT, () => {
      console.log(`Server is running on port ${envs.PORT}`);
    });
  }
}
