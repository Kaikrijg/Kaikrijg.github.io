

function checkCookie() {
  document.cookie = "username=; max-age=0; path=/";

  if (document.cookie.includes("cookieToestemming=")) {
    return;
  }

  let toestemming = confirm("Deze website gebruikt cookies. Wil je cookies toestaan? Kies OK voor ja of Annuleren voor nee.");

  if (toestemming) {
    document.cookie = "cookieToestemming=ja; max-age=31536000; path=/";
    console.log("toesteming ja")
  } else {
    document.cookie = "cookieToestemming=nee; max-age=31536000; path=/";
    console.log("toesteming nee")
  }
}

const uur = new Date().getHours();

if (uur >= 6 && uur < 12) {
  alert("Goedemorgen");
} else if (uur >= 12 && uur < 18) {
  alert("Goedemiddag");
} else if (uur >= 18 && uur < 23) {
  alert("Goedenavond");
} else {
  alert("Goedenacht");
}

