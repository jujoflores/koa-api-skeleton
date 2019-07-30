const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const logger = require('koa-logger');
const config = require('./config/config');
const db = require('./api/libs/db');
const errorHandler = require('./api/middleware/errorHandler');
const Koa = require('koa');

const { mongoUrl, serverPort } = config;
db.connect(mongoUrl);

const app = new Koa();
app.use(errorHandler);
app.use(logger());
app.use(bodyParser());
app.use(cors());

const apiRoutes = require('./api/api');
app.use(apiRoutes.routes(), apiRoutes.allowedMethods());

app.listen(serverPort);
