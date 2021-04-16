import Agenda from 'agenda';
import config from '../config';

export default ({ mysqlConnection }) => {
  return new Agenda({
    mongo: mysqlConnection,
    db: { collection: config.agenda.dbCollection },
    processEvery: config.agenda.pooltime,
    maxConcurrency: config.agenda.concurrency,
  });
  /**
   * This voodoo magic is proper from agenda.js so I'm not gonna explain too much here.
   * https://github.com/agenda/agenda#mongomongoclientinstance
   */
};
