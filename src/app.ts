import { PostgresDatabase } from './data/postgresDatabase';
import { Server } from './presentation/server';
import { envs } from './config';

(() => {
  main();
})();

async function main() {
  await PostgresDatabase.connect({
    postgresUrl: envs.POSTGRES_URL,
  });
  new Server().start();
}
