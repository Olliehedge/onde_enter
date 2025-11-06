console.log("loaded..." );

// udbredelse

document.querySelector("#udbredelse").addEventListener("click", udbredelseF);

function udbredelseF()  {
  console.log("udbredelse loaded...");

  

  document.querySelectorAll("#_1, #_3, #_10").forEach(el => {el.style.fill = "#FFFD38";});
  document.querySelectorAll("#_2").forEach(el => {el.style.fill = "#FEDE32";});
  document.querySelectorAll("#_6, #_8").forEach(el => {el.style.fill = "#FEBE2D";});
  document.querySelectorAll("#_9, #_12").forEach(el => {el.style.fill = "#FD9F28";});
  document.querySelectorAll("#_7, #_11").forEach(el => {el.style.fill = "#FD8024";});
  document.querySelectorAll("#_4").forEach(el => {el.style.fill = "#FD6120";});
  document.querySelectorAll("#_3, #_5").forEach(el => {el.style.fill = "#FB261C";});

  document.querySelectorAll("#_1, #_2, #_3, #_4, #_5, #_6, #_7, #_8, #_9, #_10, #_11, #_12").forEach(el => {el.style.transition = "fill 1.2s";});
}





// træsort

document.querySelector("#træsort").addEventListener("click", træsortF);

function træsortF()  {
  console.log("træsort loaded...");

  

  document.querySelectorAll("#_1, #_3, #_10").forEach(el => {el.style.fill = "#FFFD38";});

}

