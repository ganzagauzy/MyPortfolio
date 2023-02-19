// Open the first tab by default
document.getElementById("Tab1").style.display = "block";

function openTab(evt, tabName) {
  // Hide all tab content
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Deactivate all tab buttons
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Show the selected tab content and activate its button
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

document.getElementById("year").innerHTML = new Date().getFullYear();
