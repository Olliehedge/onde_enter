console.log("loaded..."); // init-log for at sikre at scriptet kører

// (1) fælles konstanter og selektorer til begge tilstande
const fillTransition = "fill 1s";
const opacityTransition = "opacity 1s";
const regionSelector = "#_1, #_2, #_3, #_4, #_5, #_6, #_7, #_8, #_9, #_10, #_11, #_12";
const træsortSelector = ".cls-2, .cls-3, .cls-4, .cls-5, .cls-6";
const emblemSelector = "#region1Emblem, #region2Emblem, #region3Emblem, #region4Emblem, #region5Emblem, #region6Emblem, #region7Emblem, #region8Emblem, #region9Emblem, #region10Emblem, #region11Emblem, #region12Emblem";
const responseSelector ="#community, #community-2, #community-3, #community-4, #community-5, #community-6, #community-7, #brist, #brist-2, #brist-3, #undervisning, #undervisning-2, #undervisning-3, #undervisning-4, #undervisning-5, #overvaagning, #overvaagning-2, #overvaagning-3, #overvaagning-4, #overvaagning-5, #overvaagning-6";
const neutralRegionFill = "#bfbfbf";
const regions = document.querySelectorAll(regionSelector);
const træsortLayers = document.querySelectorAll(træsortSelector);
const emblems = document.querySelectorAll(emblemSelector);
const responses = document.querySelectorAll(responseSelector);
const traesortSpecial = document.querySelector("#traesort-special");


const infoBoxes = document.querySelectorAll(".info-text > .info-box, .info-text > details.info-box");
const infoMap = {
  udbredelse: ["#heatmap-explainer"],
  træsort: ["#oaktree", "#oaktree-explainer", "#pinetree", "#pinetree-explainer", "#birchtree", "#birchtree-explainer"],
  response: ["#response-education", "#response-surveillance", "#response-neglect", "#response-community"]
};


// (2) starttilstand: regions synlige, træsort/emblemer skjult men klar med transitions
regions.forEach(el => {
  el.style.transition = `${fillTransition}, ${opacityTransition}`;
  el.style.opacity = "1";
});

træsortLayers.forEach(el => {
  el.style.transition = opacityTransition;
  el.style.opacity = "0";
});

emblems.forEach(el => {
  el.style.transition = opacityTransition;
  el.style.opacity = "0";
});

if (traesortSpecial) {
  traesortSpecial.style.transition = opacityTransition;
  traesortSpecial.style.opacity = "0";
}

responses.forEach(el =>{
  el.style.transition = opacityTransition;
  el.style.opacity = "0";
})

showInfoBoxes();



// (3) udbredelse-knap aktiverer farvelagt visning
document.querySelector("#udbredelse").addEventListener("click", udbredelseF);

function udbredelseF()  {
  // (3a) skift farver pr. region efter udbredelsesdata
  console.log("udbredelse loaded...");

  document.querySelectorAll("#_1, #_3, #_10").forEach(el => {el.style.fill = "#FFFD38";});
  document.querySelectorAll("#_2").forEach(el => {el.style.fill = "#FEDE32";});
  document.querySelectorAll("#_6, #_8").forEach(el => {el.style.fill = "#FEBE2D";});
  document.querySelectorAll("#_9, #_12").forEach(el => {el.style.fill = "#FD9F28";});
  document.querySelectorAll("#_7, #_11").forEach(el => {el.style.fill = "#FD8024";});
  document.querySelectorAll("#_4").forEach(el => {el.style.fill = "#FD6120";});
  document.querySelectorAll("#_3, #_5").forEach(el => {el.style.fill = "#FB261C";});

  // (3b) vis udbredelseslag, skjul træsortlag og emblemer
  regions.forEach(el => {
    el.style.opacity = "1";
  });

  træsortLayers.forEach(el => {
    el.style.opacity = "0";
  });

  emblems.forEach(el => {
    el.style.opacity = "0";
  });

  if (traesortSpecial) {
    traesortSpecial.style.opacity = "0";
  }

  responses.forEach(el =>{
  el.style.transition = opacityTransition;
  el.style.opacity = "0";
})

  showInfoBoxes("udbredelse");
}

// (4) træsort-knap viser teksturer/emblemer og nulstiller kortfarver
document.querySelector("#træsort").addEventListener("click", træsortF);

function træsortF()  {
  console.log("træsort loaded...");

  // (4a) hold regioner synlige men nulstil farven til neutral grå
  regions.forEach(el => {
    el.style.opacity = "1";
    el.style.fill = neutralRegionFill;
  });

  // (4b) fade træsortlag og emblemer ind
  træsortLayers.forEach(el => {
    el.style.opacity = "1";
  });

  emblems.forEach(el => {
    el.style.opacity = "1";
  });

  if (traesortSpecial) {
    traesortSpecial.style.opacity = "1";
  }

  responses.forEach(el =>{
  el.style.transition = opacityTransition;
  el.style.opacity = "0";  })



  showInfoBoxes("træsort");

}

// (4)response-knap viser teksturer/emblemer og nulstiller kortfarver

document.querySelector("#response").addEventListener("click", responseF);

function responseF()  {
  console.log("response loaded...");

  // (4a) hold regioner synlige men nulstil farven til neutral grå
  regions.forEach(el => {
    el.style.opacity = "1";
    el.style.fill = neutralRegionFill;
  });

  træsortLayers.forEach(el => {
    el.style.opacity = "0";
  });

  emblems.forEach(el => {
    el.style.opacity = "0";
  });

  // (4b) fade reponses ind
  responses.forEach(el =>{
  el.style.transition = opacityTransition;
  el.style.opacity = "1";
})

  showInfoBoxes("response");
}

function showInfoBoxes(groupKey) {
  infoBoxes.forEach(box => {
    box.classList.add("is-hidden");
    if (box.tagName === "DETAILS") {
      box.open = false;
    }
  });

  (infoMap[groupKey] || []).forEach(selector => {
    const el = document.querySelector(selector);
    if (el) {
      el.classList.remove("is-hidden");
      if (el.tagName === "DETAILS" && el.matches("#heatmap-explainer")) {
        el.open = true;
      }
    }
  });
}
