const router = require('express').Router();
const User = require('../models/User');

// Find All
router.get('/', (req, res) => {
  User.findAll()
    .then((users) => {
      if (!users.length) return res.status(404).send({ err: 'User not found' });
      res.send(`find successfully: ${users}`);
    })
    .catch(err => res.status(500).send(err));
});

// Find One by userid
router.get('/userid/:userid', (req, res) => {
  User.findOneByUserid(req.params.userid)
    .then((user) => {
      if (!user) return res.status(404).send({ err: 'User not found' });
      res.send(`findOne successfully: ${user}`);
    })
    .catch(err => res.status(500).send(err));
});

// Create new user document
router.post('/', (req, res) => {
  User.create(req.body)
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err));
});

// Update by userid
router.put('/userid/:userid', (req, res) => {
  User.updateByUserid(req.params.userid, req.body)
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err));
});

// Delete by userid
router.delete('/userid/:userid', (req, res) => {
  User.deleteByUserid(req.params.userid)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;