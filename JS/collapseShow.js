const allPP = Array.from(document.getElementsByClassName("collapse"));
const plusAllPP = document.getElementById("buttonPPPlus");
const minusAllPP = document.getElementById("buttonPPMinus");

plusAllPP.addEventListener("click", () => {
	allPP.forEach((element) => {
		element.classList.add("show");
	});
});
minusAllPP.addEventListener("click", () => {
	allPP.forEach((element) => {
		element.classList.remove("show");
	});
});
