const express = require('express');
const router = express.Router();

//@Route GET api/posts/test
//@desc Test posts route
//@access public
router.get('/test', (req, res) => {
  res.json({
    msg: 'Posts works'
  })
});

module.exports = router;