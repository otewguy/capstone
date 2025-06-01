CREATE OR REPLACE VIEW user_view AS
SELECT 
id, 
email, 
raw_user_meta_data->>'name' AS name,
raw_user_meta_data->>'role' AS role
FROM auth.users;

CREATE OR REPLACE VIEW user_view AS
SELECT 
id, 
email
FROM auth.users;