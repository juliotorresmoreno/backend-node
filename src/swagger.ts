
export default {
    "swagger": "2.0",
    "info": {
        "title": "Backend node",
        "description": "",
        "version": "1.0"
    },
    "produces": ["application/json"],
    "paths": {
        "/api/v1/usuarios": {
            "post": {
                "tags": ["/api/v1/usuarios"],
                "description": "Crea usuarios",
                "parameters": [
                    { "name": "nombres", "in": "formData", "required": true, "type": "string" },
                    { "name": "apellidos", "in": "formData", "required": true, "type": "string" },
                    { "name": "email", "in": "formData", "required": true, "type": "string" },
                    { "name": "telefono", "in": "formData", "required": true, "type": "string" }
                ],
                "responses": {}
            },
            "get": {
                "tags": ["/api/v1/usuarios"],
                "description": "Obtiene la lista de usuarios",
                "parameters": [],
                "responses": {}
            }
        },
        "/api/v1/drivers": {
            "post": {
                "tags": ["/api/v1/drivers"],
                "description": "Crea los drivers",
                "parameters": [
                    { "name": "placa", "in": "formData", "required": true, "type": "string" },
                    { "name": "nombres", "in": "formData", "required": true, "type": "string" },
                    { "name": "apellidos", "in": "formData", "required": true, "type": "string" },
                    { "name": "email", "in": "formData", "required": true, "type": "string" },
                    { "name": "telefono", "in": "formData", "required": true, "type": "string" },
                    { "name": "identificacion", "in": "formData", "required": true, "type": "string" }
                ],
                "responses": {}
            },
            "get": {
                "tags": ["/api/v1/drivers"],
                "description": "Obtiene la lista de drivers",
                "parameters": [],
                "responses": {}
            }
        },
        "/api/v1/pedidos": {
            "post": {
                "tags": ["/api/v1/pedidos"],
                "description": "Crea los pedidos",
                "parameters": [
                    { "name": "usuario_id", "in": "formData", "required": true, "type": "integer" },
                    { "name": "direccion", "in": "formData", "required": true, "type": "string" },
                    { "name": "fecha_entrega", "in": "formData", "required": true, "type": "string" },
                    { "name": "franja_horaria_inicio", "in": "formData", "required": true, "type": "string" },
                    { "name": "franja_horaria_fin", "in": "formData", "required": true, "type": "string" }
                ],
                "responses": {}
            },
            "get": {
                "tags": ["/api/v1/pedidos"],
                "description": "Obtiene la lista de pedidos",
                "parameters": [],
                "responses": {}
            }
        },
    }
}