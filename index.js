/*
I got it to work somewhat, I just couldn't get it to work on another page so it flashes
*/

let output = " "


function myFunction() {
    const age = document.getElementById("age").value;
    let formDistance = document.getElementById("journey");



    if (formDistance = "16.3") {
        distance = 16.3
    }

    else if (formDistance = "24") {
        distance = 24
    }

    else if (formDistance = "3.6") {
        distance = 3.6
    };


    let fare = distance * 0.21;

    if (age < 18) {
        output = fare * 0.8
    }

    else if (age > 65) {
        output = fare * 0.6
    }

    else {
        output = fare
    };

    let fareFixed = output.toFixed(2);

    console.log(fareFixed);

    document.getElementById("trainFare").innerHTML = `
    <h1>Your fare is £${fareFixed}</h1>
    `;
}




