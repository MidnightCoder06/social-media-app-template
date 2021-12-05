1. open postgres application 
2. double postgres database icon 

If you get the message: `There is already a PostgreSQL server running in this data directory`

Then run: `ps ux | grep Postgres`
Running kill on the pid (second column, kill 13268 here) should stop it.

3. CREATE DATABASE tumblr_clone_dev;
    # check for tables -> \dt
    # check for databases (this command shows all of your databases) -> \l
4. CREATE TABLE users ( id SERIAL PRIMARY KEY, username VARCHAR(255) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL );
    # take a peek at the table you defined -> \d
5. INSERT INTO users (username, password) VALUES ('albert', 'cool_guy91'), ('sandra', 'funny_girl89'), ('george', 'skinny_guy12');
6. SELECT * FROM users;
7. SELECT id, username FROM users WHERE username='albert' AND password='cool_guy91';
8. SELECT id, username FROM users WHERE username='sandra' AND password='hot_girl_summer';


===



