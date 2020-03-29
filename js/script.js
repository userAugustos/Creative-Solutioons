
let buttonIdea = document.querySelector(".button-idea");

	function hide() {
		document.querySelector("footer").classList.toggle("hide");
	}

	buttonIdea.addEventListener("click", hide, false);
