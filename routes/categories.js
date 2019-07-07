var express = require('express');
var router = express.Router();
// NOTE: we need to validate entry data
var category = require('../db/categories');
///////////////////////// Categories//////////////////////////
// GET All categories
router.get('/category', function(req, res, next) {
 place.readAll().then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// GET One category
router.get('/category/:id', function(req, res, next) {
 place.readOne(req.params.id).then((doc) => {
    console.log(doc);
    return res.send(doc);
  }).catch((err) => {
    return res.send(err);
  });
});
// PUT category
router.put('/category', function(req, res, next) {
 place.create(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  });
});
// PATCH category
router.patch('/category', function(req, res, next) {
     place.update(req.body, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});
// DELETE category
router.delete('/category', function(req, res, next) {
 place.destroy(req.body._rev, function(err, data) {
    if (err)
      return res.send(err);
    else
      return res.send(data);
  }, req.params.id);
});

module.exports = router;
