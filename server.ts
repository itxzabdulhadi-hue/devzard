import express from 'express';
import { createApp } from './server/app';
import { bootstrapAdmin } from './server/bootstrap';
import { assertProductionConfig } from './server/env';
import { sessionSecret } from './server/secret';
import { getStorage } from './server/storage/index';

assertProductionConfig();

await getStorage().init();
await bootstrapAdmin();
await sessionSecret();

const app = createApp({ serveStatic: true });

export default app;
