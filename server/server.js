const express = require("express");
const axios = require("axios");
const cors = require("cors");
const faker = require("faker")
const port = 8000;

const app = express();
app.use( cors () );
var randomName = faker.name.findName();

class Person{
    constructor() {
        this.fname = faker.name.firstName();
        this.lname = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company{
    constructor(){
        this.name = faker.company.companyName();
        this.street = faker.address.streetAddress(); 
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode =faker.address.zipCode();
        this.country =faker.address.country();
    }
}

app.get("/api/companies/new", (req, res) => {
    company = new Company();
    res.json({company});
});
app.get("/api/users/new", (req, res) => {
    newPerson = new Person();
    res.json({newPerson});
});

app.get("/api/user/company", (req, res) => {
    company = new Company();
    newPerson = new Person();
    res.json({newPerson, company});
});

app.listen(port, () => console.log(`listening on port ${port}`));