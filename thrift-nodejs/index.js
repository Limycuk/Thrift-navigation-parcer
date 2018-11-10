const thrift = require('thrift'); // библиотека из npm

const Parsing = require('./Parsing'); // сгенерированный код через thrift nodejs генератор
const parce = require('./parce'); // бизнес логика

const ParsingService = {
  // обработчик наших событий
  parse: async (url, result) => {
    // предоставляемый метод, последним параметром получает callback
    const data = await parce(url);
    result(null, data);
  }
};

const ParsingOpt = {
  // настройки сервиса
  transport: thrift.TBufferedTransport,
  protocol: thrift.TJSONProtocol,
  processor: Parsing,
  handler: ParsingService
};

const serverOpt = {
  // настройки сервера
  staticFilePath: '.',
  services: {
    '/api': ParsingOpt
  }
};

const server = thrift.createWebServer(serverOpt); // создание сервера
const port = 9090;

server.listen(port); // запуск сервера
