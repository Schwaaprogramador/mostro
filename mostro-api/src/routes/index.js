const { Router } = require('express');
const productRouter = require('./ProductsRouter.js')




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/product', productRouter);

module.exports = router;
