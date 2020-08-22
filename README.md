
This is an API for top Nigerian based Tech companies.



Babel is used to transpile es6+ syntax to es5 so that the browser could recognise and render the web page




Link to Heroku https://stark-reef-17608.herokuapp.com/


To get all Tech companies,
GET https://stark-reef-17608.herokuapp.com/company


To get a single Tech company,

GET https://stark-reef-17608.herokuapp.com/company/:id



To create a Nigerian Tech company,

POST https://stark-reef-17608.herokuapp.com/company/create

{
    "name": "name",
    "location": "address of company",
    "name_of_ceo": "name of company's ceo",
    "year_founded": year founded,
    "website": "company's website",
    "email": "company's email address"
}



To Edit a company's info, 
PUT https://stark-reef-17608.herokuapp.com/company/:id

{
    "name": "new name",
    "location": "Updated location",
    "name_of_ceo": "new ceo",
    "year_founded": year founded,
    "website": "new website",
    "email": "current working email"
}



To delete a company,

DELETE https://stark-reef-17608.herokuapp.com/company/:id



 