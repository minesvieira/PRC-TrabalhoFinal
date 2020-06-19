var express = require("express");
var router = express.Router();
var Champion = require("../controllers/champions");


router.get("/", function (req, res) { //Make this present some information...
  Champion.getChampions()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing champions: ${e}`));
});

router.get("/main", function (req, res) { //Make this present some information...
  Champion.getChampionsAndTile()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing champions: ${e}`));
});

router.get("/:id", function (req, res) {
  Champion.getChampion(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing champion: ${e}`));
});

router.get("/:id/full", function (req, res) {
  Champion.getChampionFull(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing full details: ${e}`));
});

router.get("/:id/abilities", function (req, res) {
  Champion.getChampionAbilities(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing abilities: ${e}`));
});

router.get("/:id/abilitiesFull", function (req, res) {
  Champion.getChampionAbilitiesFull(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing abilities: ${e}`));
});

router.get("/:id/skins", function (req, res) {
    Champion.getChampionSkins(req.params.id)
      .then((dados) => res.jsonp(dados))
      .catch((e) => res.status(500).send(`Error listing skins: ${e}`));
});

router.get("/:id/skinsFull", function (req, res) {
  Champion.getChampionSkinsFull(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing skins: ${e}`));
});

router.get("/:id/stats", function (req, res) {
  Champion.getChampionStats(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing stats: ${e}`));
});

router.get("/:id/info", function (req, res) {
    Champion.getChampionInfo(req.params.id)
      .then((dados) => res.jsonp(dados))
      .catch((e) => res.status(500).send(`Error listing info: ${e}`));
});

router.get("/:id/allytips", function (req, res) {
  Champion.getChampionAllyTips(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing ally tips: ${e}`));
});

router.get("/:id/enemytips", function (req, res) {
    Champion.getChampionEnemyTips(req.params.id)
      .then((dados) => res.jsonp(dados))
      .catch((e) => res.status(500).send(`Error listing enemy tips: ${e}`));
});

router.get("/:id/tags", function (req, res) {
    Champion.getChampionTags(req.params.id)
      .then((dados) => res.jsonp(dados))
      .catch((e) => res.status(500).send(`Error listing tags: ${e}`));
});

router.get("/:id/recommended", function (req, res) {
    Champion.getChampionRecommended(req.params.id)
      .then((dados) => res.jsonp(dados))
      .catch((e) => res.status(500).send(`Error listing recommended item set: ${e}`));
});

router.get("/:id/recommendedFull", function (req, res) {
  Champion.getChampionRecommendedFull(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing recommended item set: ${e}`));
});


router.get("/:id/core", function (req, res) {
    Champion.getChampionCore(req.params.id)
      .then((dados) => res.jsonp(dados))
      .catch((e) => res.status(500).send(`Error listing core information: ${e}`));
});

router.get("/abilities/:id", function (req, res) {
  Champion.getAbility(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing core information: ${e}`));
});

router.get("/skins/:id", function (req, res) {
  Champion.getSkin(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing core information: ${e}`));
});

module.exports = router;
