var express = require("express");
var router = express.Router();
var Runes = require("../controllers/runes");

/* GET home page. */
router.get("/", function (req, res, next) { //Make this present some information...
  Runes.getRunes()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});


router.get("/runeAndTree", function (req, res, next) { //Make this present some information...
  Runes.getRuneWithTree()
    .then((dados) => {{res.json(dados);}} )
    .catch((e) => res.status(500).send(`Error listing runes and trees: ${e}`));
});

router.get("/trees", function (req, res) {
  Runes.getTrees()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing trees: ${e}`));
});


router.get("/:id", function (req, res) {
  Runes.getRuneCore(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});


router.get("/:id/isFromTree", function (req, res) {
  Runes.getRuneTreeFrom(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/:id/image", function (req, res) {
  Runes.getRuneImage(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/fromTree/:id", function (req, res) {
    Runes.getRuneTree(req.params.id)
      .then((dados) => res.jsonp(dados))
      .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
  });


module.exports = router;
