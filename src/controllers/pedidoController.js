const Pedido = require('../models/pedido')

class PedidoController {
    async getAllPedidos(req, res) {
        try {
            const pedidos = await Pedido.findAll()
            res.render('pedidos/index', {
                title: 'Pedidos', pedidos
            })
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }

    async createPedido(req, res) {
        const { cliente, itens, total } = req.body
        try {
            await Pedido.create({ cliente, itens, total })
            res.redirect('/pedidos')
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }

    async deletePedido(req, res) {
        const id = req.params.id
        try {
            const pedido = await Pedido.findByPk(id)
            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' })
            }
            await pedido.destroy()
            res.redirect('/pedidos')

        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async concluirPedido(req, res) {
        const id = req.params.id;

        try {
            const pedido = await Pedido.findByPk(id);
            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' });
            }

            await pedido.update({ status: 'Concluído' });

            res.redirect('/pedidos');
        } catch (error) {
            console.error('Erro ao concluir pedido:', error);
        }
    }

    async editPedido(req, res) {
        const id = req.params.id
        const { cliente, itens, total } = req.body

        try {
            const pedido = await Pedido.findByPk(id)
            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' })
            }
            await pedido.update({ cliente, itens, total })
            res.redirect('/pedidos')
        
        } catch (error) {
            res.status(500).json({ error: error.message })

        }
    }

    async renderEditForm(req, res) {
        const id = req.params.id;
        try {
            const pedido = await Pedido.findByPk(id);
            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado' });
            }
            res.render('pedidos/edit', { title: 'Editar Pedido', pedido });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}
module.exports = new PedidoController()