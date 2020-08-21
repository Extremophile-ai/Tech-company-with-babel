This is an API for top Nigerian based Tech companies.


<<<<<<< HEAD
Babel is used to transpile es6+ syntax to es5 so that the browser could recognise and render the web page


Link to Heroku https://agile-stream-78586.herokuapp.com/


To get all Tech companies,
GET https://agile-stream-78586.herokuapp.com/company
=======
An  'esm' package was used to enable the use of the es6 import syntax.

To start, run  'nodemon -r esm server.js'


Link to Heroku https://stark-reef-17608.herokuapp.com/


To get all Tech companies,
GET https://stark-reef-17608.herokuapp.com/company
>>>>>>> 1544b181d8c553a62616cfcf5a2919279f2a7f41



To get a single Tech company,
<<<<<<< HEAD
GET https://agile-stream-78586.herokuapp.com/company/:id
=======
GET https://stark-reef-17608.herokuapp.com/company/:id
>>>>>>> 1544b181d8c553a62616cfcf5a2919279f2a7f41



To create a Nigerian Tech company,
<<<<<<< HEAD
POST https://agile-stream-78586.herokuapp.com/company/create
=======
POST https://stark-reef-17608.herokuapp.com/company/create
>>>>>>> 1544b181d8c553a62616cfcf5a2919279f2a7f41

{
    "name": "name",
    "location": "address of company",
    "name_of_ceo": "name of company's ceo",
    "year_founded": year founded,
    "website": "company's website",
    "email": "company's email address"
}

<<<<<<< HEAD
        

To Edit a company's info, 
PUT https://agile-stream-78586.herokuapp.com/company/:id
=======


To Edit a company's info, 
PUT https://stark-reef-17608.herokuapp.com/company/:id
>>>>>>> 1544b181d8c553a62616cfcf5a2919279f2a7f41

{
    "name": "new name",
    "location": "Updated location",
    "name_of_ceo": "new ceo",
    "year_founded": year founded,
    "website": "new website",
    "email": "current working email"
}



To delete a company,
<<<<<<< HEAD
DELETE https://agile-stream-78586.herokuapp.com/company/:id
=======
DELETE https://stark-reef-17608.herokuapp.com/company/:id
>>>>>>> 1544b181d8c553a62616cfcf5a2919279f2a7f41



 