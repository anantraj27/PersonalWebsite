import { Pool } from 'pg';

import pg from 'pg';
const db = new pg.Client({
    port: 5236,
    password: '24-CSE-25',
    database: 'LOGIN',
    host: 'localhost',
    user: 'postgres',
});

const db1 = new pg.Client({
    port: 5236,
    password: '24-CSE-25',
    database: 'notes',
    host: 'localhost',
    user: 'postgres',
});

db.connect();
db1.connect();

export { db, db1 };
