
// --- OPEN the whole popup via click by the popup-btn --- ///
document.getElementById("open-popup-btn").addEventListener("click", function(){
  document.getElementsByClassName("popup")
  [0].classList.add("active"); // This will add the active class as a first condition = 0 to the List
});


// --- CLOSE the whole popup via click by the popup-btn --- ///
document.getElementById("dismiss-popup-btn").addEventListener("click", function(){
  document.getElementsByClassName("popup")
  [0].classList.remove("active"); // This will remove the active class in return
});