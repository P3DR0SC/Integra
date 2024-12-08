const pgp = require('pg-promise')();

const db = pgp({
  host: 'aws-0-sa-east-1.pooler.supabase.com', 
  database: 'postgres',
  user: 'postgres.bplpnnenezerpsrouzil',
  password: '5314679',
});

module.exports = db;
