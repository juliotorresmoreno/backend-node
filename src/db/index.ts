
import { createConnection, Connection } from 'typeorm'

var connection: Connection;
createConnection().then((c) => connection = c);

export default () => connection;