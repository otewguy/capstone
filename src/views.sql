-----------This is the SQL snippet that is supposed to be run as an SQL Query in Supabase SQL Editor
-----------This will create a VIEW of the auth.users table that is managed by Supabase
-----------The view will then be used in prisma as view User 

CREATE OR REPLACE VIEW user_view AS
SELECT 
id, 
email
FROM auth.users;