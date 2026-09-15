import { createApp } from './app.js';
import { bootstrapAdmin } from './bootstrap.js';
import { assertProductionConfig } from './env.js';
import { sessionSecret } from './secret.js';
import { getStorage } from './storage/index.js';

const port = Number(process.env.PORT || 4173);

assertProductionConfig();
await getStorage().init();
await bootstrapAdmin();
await sessionSecret();

const app = createApp({ serveStatic: true });
app.listen(port, () => {
  console.log(`Devzard listening on http://localhost:${port}`);
});
