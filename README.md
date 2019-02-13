# simpleREST

clone the project

Installations
    npm install

Run
    npm run start

Usage
  Use POSTMAN:
  GET    http://localhost:3000/Contacts      ## Get all contacts
  POST   http://localhost:3000/Contacts      ## Adds new contact (see sample body below)
  GET    http://localhost:3000/Contacts/<ID> ## Get single contact (by id found in Mongo db)
  PATCH  http://localhost:3000/Contacts/<ID> ## Updates single contact (see sample body below)
  DELETE http://localhost:3000/Contacts/<ID> ## Deletes single contact by id
  
  
Sample Body

x-www-form-urlencoded body
employee_number: 20885
first_name: Debbie
last_name: Golden
user_name: goldend
phone: +1 (925) 565-3572
address1: 79702 Vanderbilt Street
address2:
city: Gilgo
state: Northern Mariana Islands
zipcode: 67137-4365
country: US
contact:Debbie
