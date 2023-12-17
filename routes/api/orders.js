const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// All routes start with '/api/orders'

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);

// GET /api/orders
router.get('/', ordersCtrl.orderHistory);

module.exports = router;