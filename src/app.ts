import createError, { HttpError } from 'http-errors';
import express, { Request, Response, NextFunction, Router } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import fs from 'fs';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger';

const indexRouter: Router = require('./routes/index');
const pedidosRouter: Router = require('./routes/pedidos');
const usuariosRouter: Router = require('./routes/usuarios');
const driversRouter: Router = require('./routes/drivers');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

const apiV1 = express.Router();
apiV1.use('/pedidos', pedidosRouter);
apiV1.use('/usuarios', usuariosRouter);
apiV1.use('/drivers', driversRouter);

app.use('/', indexRouter);
app.use('/api/v1', apiV1);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err: HttpError, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.end(err.message);
});

export default app;
