"use strict";
exports.__esModule = true;
var http_errors_1 = require("http-errors");
var express_1 = require("express");
var cookie_parser_1 = require("cookie-parser");
var morgan_1 = require("morgan");
var swagger_ui_express_1 = require("swagger-ui-express");
var swagger_1 = require("./swagger");
var indexRouter = require('./routes/index');
var pedidosRouter = require('./routes/pedidos');
var usuariosRouter = require('./routes/usuarios');
var driversRouter = require('./routes/drivers');
var app = express_1["default"]();
app.use(morgan_1["default"]('dev'));
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: false }));
app.use(cookie_parser_1["default"]());
app.use('/api-docs', swagger_ui_express_1["default"].serve);
app.get('/api-docs', swagger_ui_express_1["default"].setup(swagger_1["default"]));
var apiV1 = express_1["default"].Router();
apiV1.use('/pedidos', pedidosRouter);
apiV1.use('/usuarios', usuariosRouter);
apiV1.use('/drivers', driversRouter);
app.use('/', indexRouter);
app.use('/api/v1', apiV1);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(http_errors_1["default"](404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.end(err.message);
});
exports["default"] = app;
