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


CREATE TABLE users(user_id SERIAL PRIMARY KEY, first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), phone_number VARCHAR(255), password VARCHAR(255));

INSERT INTO users(first_name, last_name, email, phone_number, password) VALUES ('jean', 'leconte', 'jleconte36@gmail.com', '262-455-8783', 'blahblah');

-- DROP TABLE "todo";

CREATE TABLE tasks(task_id VARCHAR(255), title VARCHAR(255), is_completed boolean, PRIMARY KEY(task_id));

INSERT INTO tasks(task_id, title, is_completed) VALUES ('1', 'task 1', TRUE);
INSERT INTO tasks(task_id, title, is_completed) VALUES ('2', 'task 2', FALSE);

/*
A foreign key is a column or a group of columns in a table that reference the primary key of another table.

The table that contains the foreign key is called the referencing table or child table. And the table referenced by the foreign key is called the referenced table or parent table.

A table can have multiple foreign keys depending on its relationships with other tables.

In PostgreSQL, you define a foreign key using the foreign key constraint. The foreign key constraint helps maintain the referential integrity of data between the child and parent tables.

A foreign key constraint indicates that values in a column or a group of columns in the child table equal the values in a column or a group of columns of the parent table.
*/
CREATE TABLE subtasks(subtask_id VARCHAR(255), task_id VARCHAR(255), title VARCHAR(255), is_completed boolean, PRIMARY KEY(subtask_id), FOREIGN KEY(task_id) REFERENCES tasks(task_id) ON DELETE SET NULL);

INSERT INTO subtasks(subtask_id, task_id, title, is_completed) VALUES ('11', '1', 'subtask 1', TRUE);
INSERT INTO subtasks(subtask_id, task_id, title, is_completed) VALUES ('12', '1', 'subtask 2', TRUE);
INSERT INTO subtasks(subtask_id, task_id, title, is_completed) VALUES ('13', '1', 'subtask 3', FALSE);

INSERT INTO subtasks(subtask_id, task_id, title, is_completed) VALUES ('14', '2', 'subtask 4', FALSE);
INSERT INTO subtasks(subtask_id, task_id, title, is_completed) VALUES ('15', '2', 'subtask 5', TRUE);
INSERT INTO subtasks(subtask_id, task_id, title, is_completed) VALUES ('16', '2', 'subtask 6', FALSE);