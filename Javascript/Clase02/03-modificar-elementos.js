const body = document.getElementsByTagName("body")[0]
/*const body = document.querySelector("body")
const body = document.querySelectorAll("body")[0]
const body = document.body*/

body.style.backgroundColor = "red"
body.style.background = "-webkit-linear-gradient(red, orange)"
body.style.background = "-moz-linear-gradient(red, orange)"
body.style.background = "-ms-linear-gradient(red, orange)"
body.style.background = "-o-linear-gradient(red, orange)"
body.style.background = "linear-gradient(red, orange)"
// body.style.width = "600px"

const div = document.getElementsByTagName("div")[0]
div.classList.add("sol")
div.classList.remove("luna")
div.style.height = "300px"
