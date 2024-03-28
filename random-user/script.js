let person = document.getElementById('person')
let bio = document.getElementById('bio');
let gender = document.getElementById('gen');
let street = document.getElementById('str');
let email = document.getElementById('mail');
let username = document.getElementById('user');
let password = document.getElementById('pass');
let DateOfBirth = document.getElementById('dob');
let age = document.getElementById('age');
let phoneNumber = document.getElementById('phone');
let info = document.getElementById('information');


async function profile() {
let url = 'https://randomuser.me/api/';

    let response = await fetch(url);
    let personalInfo = await response.json();
    person.setAttribute('src', personalInfo.results[0].picture.large)
    bio.innerHTML += personalInfo.results[0].name.title + " ";
    bio.innerHTML += personalInfo.results[0].name.first + " ";
    bio.innerHTML += personalInfo.results[0].name.last;
    // gender.innerHTML += personalInfo.results[0].gender;
    // street.innerHTML += personalInfo.results[0].location.street.number + " ";
    // street.innerHTML += personalInfo.results[0].location.street.name;
    email.innerHTML += personalInfo.results[0].email;
    username.innerHTML += personalInfo.results[0].login.username;
    // password.innerHTML += personalInfo.results[0].login.password;
    // DateOfBirth.innerHTML += personalInfo.results[0].dob.date;
    // age.innerHTML += personalInfo.results[0].dob.age;
    // phoneNumber.innerHTML += personalInfo.results[0].phone;
    
    // info.innerHTML += personalInfo.results[0].info.results;


};
profile();



