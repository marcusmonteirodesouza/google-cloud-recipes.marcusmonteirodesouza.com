import {app} from './app';
import {logger} from './logger';
import {config} from './config';

app.listen(config.port, () => {
  logger.info(
    `Google Cloud Demos - Cloud Run Service - Hello World! server listening on port ${config.port}...`
  );
});
