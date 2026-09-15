import 'express';
import { createApp } from './server/app.js';
import { bootstrapAdmin } from './server/bootstrap.js';
import { assertProductionConfig } from './server/env.js';
import { sessionSecret } from './server/secret.js';
import { getStorage } from './server/storage/index.js';

assertProductionConfig();

await getStorage().init();
await bootstrapAdmin();
await sessionSecret();

const app = createApp({ serveStatic: true });

export default app;
