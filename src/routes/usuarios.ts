import express, { Request, Response, NextFunction } from 'express';
import { validate } from "class-validator";
import getConnection from "../db";
import UsuarioModel from '../entity/Usuario';

var router = express.Router();

router.get('/', async function (req: Request, res: Response) {
    const connection = getConnection();
    const allUsers = await connection.manager.find(UsuarioModel);
    res.json(allUsers);
});

router.post('/', async function (req: Request, res: Response, next: NextFunction) {
    const connection = getConnection();
    try {
        var usuario = new UsuarioModel();
        var data: UsuarioModel = req.body;
        usuario.nombres = data.nombres;
        usuario.apellidos = data.apellidos;
        usuario.email = data.email;
        usuario.telefono = data.telefono;

        const errors = await validate(usuario);
        if (errors.length) {
            throw new Error(errors[0].toString())
        }

        const user = await connection.manager.save(usuario);

        res.header(202).json(user);
    } catch (error) {
        if (error.message.indexOf('isPhoneNumber')) {
            return res.status(406).json({
                message: "El telefono no es valido"
            })
        }
        if (error.message.indexOf('isEmail')) {
            return res.status(406).json({
                message: "El email no es valido"
            })
        }
        if (error.message.indexOf('usuarios.email')) {
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
