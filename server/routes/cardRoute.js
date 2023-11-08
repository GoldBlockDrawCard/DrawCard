const router = require("express").Router();
const Card = require("../models/Card");

// Find All
router.get("/", (req, res) => {
  Card.findAll()
    .then((cards) => {
      if (!cards.length) return res.status(404).send({ err: "Card not found" });
      res.send(cards);
    })
    .catch((err) => res.status(500).send(err));
});

// Find One by cardid
router.get("/cardid/:cardid", (req, res) => {
  Card.findOneByCardid(req.params._id)
    .then((card) => {
      if (!card) return res.status(404).send({ err: "Card not found" });
      res.send(`findOne successfully: ${card}`);
    })
    .catch((err) => res.status(500).send(err));
});

// Create new card document
router.post("/", (req, res) => {
  Card.create(req.body)
    .then((card) => res.send(card))
    .catch((err) => res.status(500).send(err));
});

// Update by cardid
router.put("/cardid/:cardid", (req, res) => {
  Card.updateByCardid(req.params._id, req.body)
    .then((card) => res.send(card))
    .catch((err) => res.status(500).send(err));
});

// Delete by cardid
router.delete("/cardid/:cardid", (req, res) => {
  Card.deleteByCardid(req.params._id)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
