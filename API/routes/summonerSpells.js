var express = require("express");
var router = express.Router();
var Summoner = require("../controllers/summonerSpells");

/* GET home page. */
router.get("/", function (req, res, next) { //Make this present some information...
    Summoner.getSummoners()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/:id", function (req, res) {
    Summoner.getSummoner(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/:id/image", function (req, res) {
    Summoner.getSummonerImage(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});


module.exports = router;
