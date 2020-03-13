import express, { Request, Response, NextFunction } from 'express';
import { validate } from "class-validator";
import getConnection from "../db";
import DriverModel from '../entity/Driver';

var router = express.Router();

router.get('/', async function (req: Request, res: Response) {
    const connection = getConnection();
    const all = await connection.manager.find(DriverModel);
    res.json(all);
});

router.post('/', async function (req: Request, res: Response, next: NextFunction) {
    const connection = getConnection();
    try {
        var driver = new DriverModel();
        var data: DriverModel = req.body;

        driver.identificacion = data.identificacion;
        driver.placa = data.placa;
        driver.nombres = data.nombres;
        driver.apellidos = data.apellidos;
        driver.email = data.email;
        driver.telefono = data.telefono;

        driver.ocupado = 0;
        driver.aprobado = 1;
        driver.score = 30;

        const errors = await validate(driver);
        if (errors.length) {
            throw new Error(errors[0].toString())
        }

        const user = await connection.manager.save(driver);

        res.header(202).json(user);
    } catch (error) {
        if (/isPhoneNumber/.test(error.message)) {
            return res.status(406).json({
                message: "El telefono no es valido"
            })
        }
        if (/isEmail/.test(error.message)) {
            return res.status(406).json({
                message: "El email no es valido"
            })
        }
        if (/drivers\.placa/.test(error.message)) {
            return res.status(406).json({
                message: "La placa no es valida"
            });
        }
        if(/drivers\.identificacion/.test(error.message)) {
            return res.status(406).json({
                message: "La identificación no es valida"
            });
        }
        if (/drivers\.email/.test(error.message)) {
            return res.status(406).json({
                message: "El email ya existe"
            })
        }
        console.trace(error);
    }
});

router.put('/', function (req: Request, res: Response) {

});

module.exports = router;
