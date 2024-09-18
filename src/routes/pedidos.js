const express = require("express");
const pedidoController = require("../controllers/pedidoController");
const router = express.Router();

router.get("/", pedidoController.getAllPedidos);

router.post("/", pedidoController.createPedido);

router.post("/:id/excluir", pedidoController.deletePedido);

module.exports = router;