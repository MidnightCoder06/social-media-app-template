-- psql
-- or
-- psql -U postgres
CREATE DATABASE social_media_app_template_dev;

-- \l is all of your databases
-- \c databaseName to connect to it

-- ctl + c to pop out of anything

-- postgres-# \c social_media_app_template_dev 
-- You are now connected to database "social_media_app_template_dev" as user "jeanemileleconteii".
-- social_media_app_template_dev-# 
 
 -- \dt to check for tables (lists all tables)
 -- Did not find any relations.  (if there aren't any)

CREATE TABLE todo(
  -- incremnent primary key every time to ensure it is unique
  todo_id SERIAL PRIMARY KEY,
  -- max of 255 characters
  description VARCHAR(255)
);

-- \dt to see the tables in the database

-- SELECT * FROM todo;
INSERT INTO todo(description) VALUES ('hello');
-- SELECT * FROM todo;



CREATE TABLE users(user_id SERIAL PRIMARY KEY, first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), phone_number BIGINT, password VARCHAR(255));