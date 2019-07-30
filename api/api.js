const Router = require('koa-router');
const apiRouter = new Router({ prefix: '/api' });

const productRoutes = require('./routes/productRoutes');
apiRouter.use(productRoutes.routes(), productRoutes.allowedMethods());

module.exports = apiRouter;
