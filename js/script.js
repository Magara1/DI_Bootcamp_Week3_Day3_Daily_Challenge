/*
 @author : Magara Etychien N'gouan
 * 
 *Daily Challenge : Show Only The Letters

 *      
 * 
 * Date : 05 Janvier 2023
*/

/* Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

Hint: use one of the following events to remove any character that is not a letter

keyup event
or keypress event
or keydown event
or input event
Hint : Check out keycodes in Javascript or Regular Expressions*/

let userInput = document.getElementById("saisiTexte");

 let regex = /[a-zA-Z]/

userInput.addEventListener("input", function(event){

    let saisie = event.target.value;

    let lastletter =""+ saisie.charAt(saisie.length - 1)

    if(lastletter.search(regex) == -1){

       event.target.value = saisie.replace(lastletter, "")

    } 
})





