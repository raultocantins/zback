const expressServer = require("./src/config/express");
const cluster = require("cluster");
const OS = require("os");
const PORT = process.env.PORT || 8080;

class App {
  constructor(workers, autoScale = true) {
    this.buildCluster(workers, autoScale);
  }
  buildCluster = (workers, autoScale) => {
    if (autoScale) {
      workers = this.autoScale(workers);
    }

    if (cluster.isMaster) {
      console.log("Cluster Master Online");

      for (let i = 0; i < workers; i += 1) {
        console.log(`Creating instances ${workers}`);
        cluster.fork();
      }

      cluster.on("exit", (worker) => {
        console.error(`Worker ${worker.id} Offline`);
        cluster.fork();
      });
    } else {
      expressServer.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    }
  };

  autoScale = (workersByCpu) => {
    const cpus = OS.cpus().length;
    const workers = cpus / workersByCpu;
    return workers;
  };
}

/**
 * Application Start
 *
 * @param number number of workers
 * @param boolean auto scale will use the number of workers by each CPU
 */

new App(1, false);
