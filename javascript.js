function alternarFilmes() {
    var filmeElement = document.getElementById("filme");
    var filme1Element = document.getElementById("filme1");
  
    if (filmeElement.style.display === "none" && filme1Element.style.display === "none") {
      filmeElement.style.display = "flex";
      filme1Element.style.display = "none";
    } else if (filmeElement.style.display === "flex") {
      filmeElement.style.display = "none";
      filme1Element.style.display = "flex";
    } else {
      filmeElement.style.display = "none";
      filme1Element.style.display = "none";
    }
  }
  
  
/*
function encontrarFilme() {
    document.getElementById("filme").value;
    filme.style.display ="flex";

}*/ 