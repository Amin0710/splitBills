let friends = friendArray.filter((e) => e.value !== "").length;

// Get all input fields with the class name "onlyNumbers"
const inputs = document.querySelectorAll(".onlyNumbers");

// Add an event listener to each input field
inputs.forEach((input) => {
	input.addEventListener("keyup", () => {
		for (let i = 1; i <= 8; i++) {
			for (let j = 1; j <= numOfRow; j++) {
				document
					.getElementById(`friend_${i}_input_row_${j}`)
					.setAttribute(
						"value",
						document.getElementById(`amount_row_${j}`).value / friends
					);
			}
		}
	});
});
