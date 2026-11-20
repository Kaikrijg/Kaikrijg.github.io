function submitForm() {
    const voornaam = document.getElementById("fname").value;
    const achternaam = document.getElementById("lname").value;
    const telefoon = document.getElementById("tel").value;
    const bericht = document.getElementById("info").value;

    console.log("Voornaam:", voornaam);
    console.log("Achternaam:", achternaam);
    console.log("Telefoonnummer:", telefoon);
    console.log("Bericht:", bericht);

    alert("Bedankt voor het invullen");
    document.getElementById("form1").reset();
}

const gitIcoon = document.getElementById("git");

gitIcoon.onmouseenter = function() {
    console.log("Je hovert over het GitHub-icoon");
};

function klik(){
    console.log("je bent weg gegaan")
}