var btn = document.querySelector("#bt_1");
var box = document.querySelectorAll("td");

function clearBox(){
	for (var i=0; i<box.length; i++){
		box[i].textContent = "";
	}
}

btn.addEventListener("click", clearBox);

function changeValue(){
	if (this.textContent === ""){
		this.textContent = "X";
	}else if (this.textContent === "X"){
		this.textContent = "O"
	}else{
		this.textContent = "";
	}
}

for (var j=0; j<box.length; j++){
	box[j].addEventListener("click", changeValue);
}