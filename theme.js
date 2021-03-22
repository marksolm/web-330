/**
Title: theme.js
Author: Soliman Abdelmalak
Date: 03/20/2021
Description: switching the page theme depends on the user selects  from “Dark Mode” or “Light Mode” 
*/
setDefaultTheme();
// Create a setDefaultTheme function.  
function setDefaultTheme() {
        // declaring variables that getting value form localStorage .
        const theme = localStorage.getItem("colorTheme") || "light-theme";
        const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
        const iconText = localStorage.getItem("iconText") || "Light Mode";
        // store theme preferences using the Local Storage.
        document.body.classList.value = theme;
        document.getElementById("icon-mode").classList.add(iconMode);
        document.getElementById("icon-text").innerHTML = iconText;
}
//This is the onclick function 
function toggleMode(x) {  
    let colorTheme = document.body.classList.value;
    let iconMode = document.getElementById("icon-mode").classList.value;
    
    // if else statements that toggle the theme from dark to light.
    if (document.body.classList.value === "dark-theme") {

        // This is the set up the theme to dark 
        document.body.classList.value = "light-theme";
        document.getElementById("icon-mode").classList.remove("fa-toggle-on");
        document.getElementById("icon-mode").classList.add("fa-toggle-off");
        document.getElementById("icon-text").innerHTML = "Light Mode"
        
    } else {

        // change the theme from light to dark  
        document.body.classList.value = "dark-theme";

        // This is the set up of the icon and icon text to be stored in to the localStorage.
        document.getElementById("icon-mode").classList.remove("fa-toggle-off");
        document.getElementById("icon-mode").classList.add("fa-toggle-on");
        document.getElementById("icon-text").innerHTML = "Dark Mode"
    }
}

