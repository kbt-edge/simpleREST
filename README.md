# simpleREST

clone the project

Installations<br/>
npm install
<p>
Run<br/>
    npm run start
<p>
Usage<br/>
  Use POSTMAN:<br/>
  GET    http://localhost:3000/Contacts      ## Get all contacts<br/>
  POST   http://localhost:3000/Contacts      ## Adds new contact (see sample body below)<br/>
  GET    http://localhost:3000/Contacts/<ID> ## Get single contact (by id found in Mongo db)<br/>
  PATCH  http://localhost:3000/Contacts/<ID> ## Updates single contact (see sample body below)<br/>
  DELETE http://localhost:3000/Contacts/<ID> ## Deletes single contact by id<br/>
<p>  
Sample Body<br/>
<br/>
x-www-form-urlencoded body<br/><br/>
employee_number: 20885<br/>
first_name: Debbie<br/>
last_name: Golden<br/>
user_name: goldend<br/>
phone: +1 (925) 565-3572<br/>
address1: 79702 Vanderbilt Street<br/>
address2:<br/>
city: Gilgo<br/>
state: Northern Mariana Islands<br/>
zipcode: 67137-4365<br/>
country: US<br/>
contact:Debbie<br/>
