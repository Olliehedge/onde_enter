// CANCEL POP UP VED INVALID FORM SUBMISSION:

//  Definer constant for formen

const form = document.querySelector("form");

// definer funktion der annullerer standard invalid pop up

function cancelPopup(event) {

  // Tilføj console log for at tjekke at funktionen kører

  console.log("invalid deafault removed");

  // annuller standard pop up

  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

// tilføj event listener til formen

form.addEventListener('invalid', cancelPopup, true);


// BEHANDLING AF DATA

// Submit er eventet der sker når formen sendes. Det er det event der er står i funktionen handleSubmit.

form.addEventListener("submit", handleSubmit);


// definer funktion til at håndtere form submission. Her er det eventet der sendes med, og ikke formen selv. 
// HandleSubmit er navnet på funktionen.

function handleSubmit(event) {
  
  // undgå refresh
  event.preventDefault();

  // SAMLE DATA OP

  // definer constant for formens data:

  const formData = new FormData(form);

  // definer constant for hver enkelt værdi:

  const fornavn = formData.get("fornavn");
  const efternavn = formData.get("efternavn");
  const email = formData.get("email");
  const checkbox = formData.get("email-checkbox");
  const adresse = formData.get("adresse");
  const by = formData.get("by");
  const postnummer = formData.get("postnummer");
  const dato = formData.get("dato");
  const hvad = formData.getAll("hvad").join(", ");
  const beskriv = formData.get("beskriv");
  const upload = formData.get("upload");

  // definer constant for output felter: 
  
  const firstOutput = document.querySelector(".firstOutput");
  const lastOutput = document.querySelector(".lastOutput");
  const emailOutput = document.querySelector(".emailOutput");
  const checkboxOutput = document.querySelector(".checkboxOutput");
  const adresseOutput = document.querySelector(".adresseOutput");
  const byOutput = document.querySelector(".byOutput");
  const postnummerOutput = document.querySelector(".postnummerOutput");
  const datoOutput = document.querySelector(".datoOutput");
  const hvadOutput = document.querySelector(".hvadOutput");
  const beskrivOutput = document.querySelector(".beskrivOutput");
  const uploadOutput = document.querySelector(".uploadOutput");
  

  // VISE DATA
  // indsæt data i output felter:
  firstOutput.textContent = fornavn;
  lastOutput.textContent = efternavn;
  emailOutput.textContent = email;
  checkboxOutput.textContent = checkbox ? "Ja" : "Nej";
  adresseOutput.textContent = adresse;
  byOutput.textContent = by;
  postnummerOutput.textContent = postnummer;
  datoOutput.textContent = dato;
  hvadOutput.textContent = hvad;
  beskrivOutput.textContent = beskriv;
  uploadOutput.textContent = upload;

  // nulstil formular
  form.reset();
  
}



