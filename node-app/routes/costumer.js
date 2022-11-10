
const express = require("express");
const router = express.Router();
const wiki_contrl=require("../controllers/costumer-controller")


// Home page route.
router.get("/customers",wiki_contrl.list_customers)
router.post('/add',wiki_contrl.customer_add)
router.get("/bla",wiki_contrl.index)

module.exports = router;