import express, { Request, Response } from 'express';
import { validate } from "class-validator";
import PedidoModel from '../entity/Pedido';
import DriverModel from '../entity/Driver';
import getConnection from '../db';
import { Equal, getRepository, Raw } from 'typeorm';

var router = express.Router();

router.get('/', async function (req: Request, res: Response) {
    const driver_id = req.query.driver_id;
    const fecha_entrega = req.query.fecha_entrega;
    const all = await getRepository(PedidoModel).find({
        where: {
            driver_id: Equal(driver_id),
            fecha_entrega: Raw(alias =>`${alias} = '${fecha_entrega} 00:00:00.000'`)
        }
    })
    res.json(all);
});

async function get_driver_ramdom() {
    const connection = getConnection();
    const max = (await connection.manager.query("select max(id) max from drivers"))[0].max;
    var driver_id = 0;
    while (driver_id == 0) {
        let _id = parseInt((1 + Math.random() * max).toString());
        let driver = await connection.getRepository(DriverModel).findOne({
            id: _id,
            ocupado: 0
        });
        if (driver && driver.ocupado === 0) {
            driver_id = driver.id;
        }
    }
    return driver_id;
}

router.post('/', async function (req: Request, res: Response) {
    const connection = getConnection();
    try {
        var pedido = new PedidoModel();
        var data: PedidoModel = req.body;
        pedido.usuario_id = data.usuario_id;
        pedido.direccion = data.direccion;
        pedido.fecha_entrega = data.fecha_entrega;
        pedido.franja_horaria_inicio = data.franja_horaria_inicio;
        pedido.franja_horaria_fin = data.franja_horaria_fin;

        const errors = await validate(pedido);
        if (errors.length) {
            return res.status(406).json({
                message: "La franja horaria es invalida"
            })
        }
        if (pedido.franja_horaria_inicio > pedido.franja_horaria_fin) {
            return res.status(406).json({
                message: "La franja horaria es invalida"
            })
        }
        const driver_id = await get_driver_ramdom();
        pedido.driver_id = driver_id;

        res.header(202)
            .json(await connection.manager.save(pedido));
    } catch (error) {
        console.trace(error);
        res.status(406).json({ message: error.message });
    }
});

router.put('/', function (req: Request, res: Response) {

});

module.exports = router;
