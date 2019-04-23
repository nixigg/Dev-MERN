const express = require('express');
const router = express.Router();

//@Route GET api/users/test
//@desc Test users route
//@access public
router.get('/test', (req, res) => {
  res.json({
    msg: 'Users works'
  })
});

module.exports = router;