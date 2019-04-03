var year = new Date().getFullYear();

var date = `&copy; Lexi Feng ${year}. All Rights Reserved.`;

document.getElementsByTagName('footer')[0].innerHTML += date ;
//[0] the first tag of footer in the page
//the varibale date wich will set to update annually 

// var link = "http://google.com";
// var element = document.createElement("a");
// element.setAttribute("href", link);
// element.innerHTML = "your text";

// // and append it to where you'd like it to go:
// document.body.appendChild(element);