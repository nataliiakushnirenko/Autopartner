CREATE DATABASE AUTOPARTNER_DB;
CREATE USER AUTOPARTNER_USER WITH password 'test';
GRANT ALL privileges ON DATABASE AUTOPARTNER_DB TO AUTOPARTNER_USER;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO AUTOPARTNER_USER;