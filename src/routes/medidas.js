var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.get("/buscarResultadoGraficoBar/:idJogador", function (req, res) {
    medidaController.buscarResultadoGraficoBar(req, res);
});
router.get("/buscarResultadoGraficoLine/:idJogador", function (req, res) {
    medidaController.buscarResultadoGraficoLine(req, res);
});


router.get("/tempo-real", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})
router.get("/ranking", function (req, res) {
    medidaController.ranking(req, res);
});
module.exports = router;