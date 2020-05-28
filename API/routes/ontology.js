var express = require("express");
var router = express.Router();
var Ontology = require("../controllers/ontology");

/* GET home page. */
router.get("/", function (req, res, next) {
  Ontology.getClasses()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/ontology", function (req, res) {
  Ontology.getClasses()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/ontology/classes", function (req, res) {
  Ontology.getClasses()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

module.exports = router;
