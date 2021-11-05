const router = require('./index');
router
  .get('/', () => {
    return 'hello word';
  })
  .post(() => {
    return 'hello post';
  });
module.exports = router;
