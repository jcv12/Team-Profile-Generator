const generateHTML = function (teamstr) {

    console.log("Inside gen html");
    return `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Page Generator</title>

<style>
    html {
        height: 100%;
    }
   body {
       margin: 0%;
   }

   .bg {
  animation:slide 10s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #f3d2c1 50%, #FEF6E4 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:17s;
}

.bg3 {
  animation-duration:18s;
}

@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}

   .header { 
     color: #111;
     font-family: 'Helvetica Neue', sans-serif;
     font-size: 35px;
     font-weight: bold;
     letter-spacing: -1px;
     line-height: 1;
     text-align: center;
     color: #001858;
     background-color: #8bd3dd;
    border: solid black; }

   .container-body {
       display: flex;
       justify-content: space-evenly;
   }
   .card {
       background-color:#FEF6E4;
       margin-top: 1%;
       border: solid #001858;
       font-size: x-large;
       text-align: center;
   }
   .card-header{
       margin: 1%;
   }
   .card-body{
       margin: 10%;
   }
   ul {
       color: #001858;
       list-style-type: none;
   }
   h2 {
       color: #001858;
   }
</style>

</head>

<body>
<div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
<div class=header>
   <h1>My Team</h1>
</div>
<div class="container-body">
     ${teamstr} 
     </div>         
</body>

</html>`

}

//arr is the employee object and looking for the properties in that class
const generateCard = function (arr) {
    //if else statement
    let roleInfo;

    if (arr.title === "Manager") {
        roleInfo = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        roleInfo = `Github Username: ${arr.github}`
    } else if (arr.title === "Intern") {
        roleInfo = `School: ${arr.school}`
    }

    return `<div class="card">
<div class="card-header">
<h2>${arr.name}</h2>  
<h2><i class="far fa-user"></i> ${arr.title}</h2>
<hr>
</div>
<div class="card-body">
<ul>
    <li>ID: ${arr.id}</li>
    <li>Email: ${arr.email}</li>
    <li>${roleInfo} </li>
</ul>
</div>
</div>`
}

exports.generateHTML = generateHTML
exports.generateCard = generateCard;