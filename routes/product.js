const 
    express = require('express'),
    router = express.Router()

router.get('/',function(req,res,next){
    res.render('index', { title: 'Product' });
})

router.get('/category',function(req,res,next){
    res.render('index', { title: 'Product category' });
})

module.exports = router;