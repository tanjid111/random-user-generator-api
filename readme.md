- GET /user/random A random user
https://random-user-generator-api.onrender.com/api/v1/user/random
Get a random user from the .json file


- GET /user/all A list of random users
https://random-user-generator-api.onrender.com/api/v1/user/all
Get all the users from the .json file
Number of users can be limit the using query parameter(s)


- POST /user/save Save a random user
https://random-user-generator-api.onrender.com/api/v1/user/save
Save a user in the .json file
Validation of the body can be done to check if all the required properties are present in the body.


- PATCH /user/update Update a random user
https://random-user-generator-api.onrender.com/api/v1/user/update/1
Update a user's information in the .json file using its id
User id validation is done


- PATCH /user/bulk-update update multiple users
https://random-user-generator-api.onrender.com/api/v1/user/bulk-update
Make sure to send the data in JSON format
example:
[
    {
        "id": 1,
        "gender": "test",
        "name": "test",
        "contact": "test",
        "address": "test",
        "photo_url": "test"
    },
    {
        "id": 2,
        "gender": "test",
        "name": "test",
        "contact": "test",
        "address": "test",
        "photo_url": "test"
    }
]
Update multiple users' information in the .json file
Take an array of user ids and assign it to the body.
Validation of the body can be done to check if all the required properties are present in the body.

- DELETE /user/ delete
https://random-user-generator-api.onrender.com/api/v1/user/delete/1
Delete a user from the .json file using its id
User id validation is done