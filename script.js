const notesContainer = document.querySelector(".notes-container");
const creatBtn = document.querySelector(".btn");
let note = document.querySelectorAll(".input-box");

function showNotes(){
 	// body...
 	notesContainer.innerHTML = localStorage.getItem("notes");
 }
showNotes();

function updateStroge() {
	// body...
	localStorage.setItem("notes", notesContainer.innerHTML)
}

creatBtn.addEventListener("click", () =>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "image/close.jpg";
  notesContainer.appendChild(inputBox).appendChild(img)
})

notesContainer.addEventListener("click", (e) =>{
  if(e.target.tagName === "IMG"){
  	e.target.parentElement.remove();
  	updateStroge();
  }
  else if (e.target.tagName === "P") {
  	notes = document.querySelectorAll(".input-box");
  	notes.forEach(nt =>{
  		nt.onkeyup = function(){
  				updateStroge();
  		}
  	} )
  }
	})

document.addEventListener("keydown", event =>{
   if(event.key === "Enter"){
   	document.execCommand("insertLineBreak");
   	event.preventDefault();
   }
})