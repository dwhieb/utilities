const CDP            = require('chrome-remote-interface');
const chalk          = require('chalk');
const chromeLauncher = require('chrome-launcher');
const startServer    = require('../../utilities/node/server.js');

(async () => {

  const port       = 3000;
  const server     = startServer({ port });
  const url        = `http://localhost:${port}/`;
  const chromeOpts = { startingUrl: url };
  const chrome     = await chromeLauncher.launch(chromeOpts);
  const CDPOpts    = { port: chrome.port };
  const cdp        = await CDP(CDPOpts);

  const {
    CacheStorage,
    Network,
    Page,
    ServiceWorker,
  } = cdp;

  await Network.enable();
  Network.setCacheDisabled({ cacheDisabled: false });
  Network.setBypassServiceWorker({ bypass: false });
  await ServiceWorker.enable();
  await ServiceWorker.startWorker({ scopeURL: url });
  await Page.enable();

  Page.loadEventFired(async () => {

    const { caches } = await CacheStorage.requestCacheNames({ securityOrigin: url });

    if (caches.length) {

      console.log(chalk.green(`Cache created.`));

      await Network.emulateNetworkConditions({
        offline: true,
        latency: 0,
        downloadThroughput: 96000,
        uploadThroughput: 32000,
      });

    } else {

      console.warn(chalk.yellow(`Cache not found. Retrying.`));

      setTimeout(() => Page.reload({ ignoreCache: false }), 2500);

    }

  });

  // await chrome.kill();
  // server.close();

})();
