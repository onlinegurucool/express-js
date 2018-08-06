const 
    express = require('express'),
    router = express.Router()

router.get('/',
    function(req,res,next){
        res.send('next function called')
    }
)

module.exports = router;