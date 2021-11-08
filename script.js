var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function inputlength() {
	return input.value.length;
}

function addToList() {
	var li = document.createElement("li");
	var div = document.createElement('div');
	div.appendChild(document.createTextNode(input.value));
	li.appendChild(div);
	ul.appendChild(li);
	input.value = "";

	var div = document.createElement('div');
	var button = document.createElement('button');
	button.appendChild(document.createTextNode("Done!"));
	div.appendChild(button);
	button.onclick=underlineParent;
	
	var button = document.createElement("button"); 
	button.appendChild(document.createTextNode("Delete"));
	div.appendChild(button);
	button.onclick=removeParent;
	li.appendChild(div);
}

function addListAfterClick() {
	if (inputlength() > 0) {
		addToList();
	}
}
function addListAfterKeypress(event) {
	if(inputlength() > 0 && event.keyCode === 13){
		addToList(); 
	}
}

function underlineParent(event){
	event.target.parentNode.parentNode.children[0].classList.toggle("done");
}
function removeParent(evt){
	evt.target.parentNode.parentNode.remove();
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
} 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

scrollToTopBtn.addEventListener("click", scrollToTop);