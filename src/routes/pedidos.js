const express = require("express");
const pedidoController = require("../controllers/pedidoController");
const router = express.Router();

router.get("/", pedidoController.getAllPedidos);

router.post("/", pedidoController.createPedido);

router.post("/:id/excluir", pedidoController.deletePedido);

router.post("/:id/concluir", pedidoController.concluirPedido);

router.post("/:id/editar", pedidoController.editPedido);

module.exports = router;