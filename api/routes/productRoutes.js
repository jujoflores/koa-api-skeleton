const Router = require('koa-router');

const productController = require('../controllers/productController');
const router = new Router({ prefix: '/products' });

router.post('/', productController.create);
router.get('/', productController.findAll);
router.get('/:id', productController.findOne);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

module.exports = router;
