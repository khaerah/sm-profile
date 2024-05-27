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
let followers = document.getElementById('follow')
// let num = document.getElementsById('follow')
let jobElement = document.getElementById('main-image');



async function profile() {
let url = 'https://randomuser.me/api/';

    let response = await fetch(url);
    let personalInfo = await response.json();
    person.setAttribute('src', personalInfo.results[0].picture.large)
    bio.innerHTML += personalInfo.results[0].name.title + " ";
    bio.innerHTML += personalInfo.results[0].name.first + " ";
    bio.innerHTML += personalInfo.results[0].name.last;
    street.innerHTML = personalInfo.results[0].location.street.number + " ";
    street.innerHTML += personalInfo.results[0].location.street.name;
    // email.innerHTML += personalInfo.results[0].email;
    // username.innerHTML += personalInfo.results[0].login.username;
    // gender.innerHTML += personalInfo.results[0].gender;
    // password.innerHTML += personalInfo.results[0].login.password;
    // DateOfBirth.innerHTML += personalInfo.results[0].dob.date;
    // age.innerHTML += personalInfo.results[0].dob.age;
    // phoneNumber.innerHTML += personalInfo.results[0].phone;
    
    // info.innerHTML += personalInfo.results[0].info.results;
    // let randNum;
    // document.getElementsById('follow').onClick = function(){
    //     Math.floor(Math.random() * 100) + 1

    //     document.getElementsById('label').innerHTML = randNum;

    // }
    // 
    // console.log(Math.floor(Math.random () * 5000) + 1);

  let jobRole = ['Doctor', 'Teacher', 'Lawyer', 'Pilot', 'Business man', 'Banker']
  let jobSelector = Math.floor(Math.random() * 5) + 1;
  jobElement.children[1].children[1].innerHTML = jobRole[jobSelector]
  console.log()
//   let job = Doctor;

    let  = Math.floor(Math.random() * 5000);

    let randomFollowerCount = Math.floor(Math.random() * 5000);
    followers.innerHTML = "<b>" + randomFollowerCount + "</b>" + "<br>followers";

    let randomFollowingCount = Math.floor(Math.random() * 1000);
    following.innerHTML = "<b>" + randomFollowingCount + "</b>" + "<br>following";

    let randomExperience = Math.floor(Math.random() * 10);
    experience.innerHTML = randomExperience + ' ' + 'years' + ' ' + 'experience';

    // function randNum(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    //   }

};
profile();





