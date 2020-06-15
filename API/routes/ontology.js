var express = require("express");
var router = express.Router();
var Ontology = require("../controllers/ontology");

/* GET home page. */
router.get("/", function (req, res, next) { //Make this present some information...
  Ontology.getClasses()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/ontology", function (req, res) { //Make this present some information...
  Ontology.getClasses()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/ontology/classes", function (req, res) {
  Ontology.getClasses()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/ontology/individuals", function (req, res) {
  Ontology.getIndividuals()
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

router.get("/ontology/individuals/:id", function (req, res) {
  Ontology.getIndividual(req.params.id)
    .then((dados) => res.jsonp(dados))
    .catch((e) => res.status(500).send(`Error listing classes: ${e}`));
});

module.exports = router;
