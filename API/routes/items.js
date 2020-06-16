var express = require("express");
var router = express.Router();
var Items = require("../controllers/items");

/* GET home page. */
router.get("/", function (req, res, next) { //Make this present some information...
  Items.getItems()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/components", function (req, res) {
  Items.getItemComponents()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/fullItems", function (req, res) {
  Items.getFullItems()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/:id", function (req, res) {
  Items.getItem(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/:id/core", function (req, res) {
  Items.getItemCore(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/:id/buildsInto", function (req, res) {
  Items.getItemBuildsInto(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/:id/buildsFrom", function (req, res) {
  Items.getItemBuildsFrom(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/:id", function (req, res) {
    Items.getItemFull(req.params.id)
      .then((dados) => res.jsonp(dados))
      .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
  });

router.get("/:id/image", function (req, res) {
  Items.getItemImage()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/:id/tag", function (req, res) {
  Items.getItemTag(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/:id/type", function (req, res) {
    Items.getItemType(req.params.id)
      .then((dados) => res.jsonp(dados))
      .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
  });

router.get("/types", function (req, res) {
  Items.getDistinctItemTypes(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/tags", function (req, res) {
  Items.getDistinctItemTags(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});
  
router.get("/itemType/:id", function (req, res) {
  Items.getItemsByType(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/itemTag/:id", function (req, res) {
  Items.getItemsByTag(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

module.exports = router;
