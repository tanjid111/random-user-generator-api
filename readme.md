-- GET /user/random A random user

Get a random user from the .json file


-- GET /user/all A list of random users

Get all the users from the .json file
Number of users can be limit the using query parameter(s)


-- POST /user/save Save a random user

Save a user in the .json file
Validation of the body can be done to check if all the required properties are present in the body.


-- PATCH /user/update Update a random user

Update a user's information in the .json file using its id
User id validation is done


-- PATCH /user/bulk-update update multiple users

Update multiple users' information in the .json file
Take an array of user ids and assign it to the body.
Validation of the body can be done to check if all the required properties are present in the body.

-- DELETE /user/ delete

Delete a user from the .json file using its id
User id validation is done