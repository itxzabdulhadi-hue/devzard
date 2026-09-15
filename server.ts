import { createApp } from './server/app.ts';
import { bootstrapAdmin } from './server/bootstrap.ts';
import { assertProductionConfig } from './server/env.ts';
import { sessionSecret } from './server/secret.ts';
import { getStorage } from './server/storage/index.ts';

assertProductionConfig();

await getStorage().init();
await bootstrapAdmin();
await sessionSecret();

const app = createApp({ serveStatic: true });

export default app;