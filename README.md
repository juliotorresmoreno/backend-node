# Backend-node

Imaginemos que un cliente solicita el envío de un pedido mediante una llamada a una API REST para
almacenarlo en la base de datos. El pedido debe contener: Nombre y apellidos del cliente, Email (Único por
cliente), Teléfono, Dirección de entrega (sólo puede existir una por pedido y muchas por usuario, Fecha de
entrega y Franja de hora seleccionada para la entrega (variable, pueden ser desde franjas de 1h hasta de 8h)
Una vez tenemos guardada la información del pedido, debe asignarse a un driver que tengamos dado de alta en
el sistema de forma aleatoria. Por otro lado, nuestros drivers mediante su aplicación, necesitan obtener el listado
de tareas para completar en el día. Es necesario contar con un endpoint que reciba como parámetro el ID del
driver y la fecha de los pedidos que queremos obtener y nos devuelve un JSON con el listado.

**Instalación**
```bash
yarn
```

**Compilación**
```bash
yarn build
```


**Migraciones**
```bash
yarn migrate
```


**Ejecución**
```bash
yarn start
```

**Documentación de api**
Acceder a http://localhost:3000/api-docs/
