const c9m = require('c9m');

class ServerMonitor extends c9m.Instrument {

  constructor () {
    super();

    this.name = 'process-monitor';

    this.sensors = [
      'c9m-sensor-process-memory',
    ];
  }
}

module.exports = ServerMonitor;