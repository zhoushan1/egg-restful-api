/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    news: {
      pageSize: 5,
      serverUrl: 'https://hacker-news.firebaseio.com/v0',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590716709779_1978';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];
  // 只对 /api 前缀的 url 路径生效
  // config.errorHandler = {
  //   match: '/api',
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
