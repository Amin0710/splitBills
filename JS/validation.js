// Get all input fields with the class name "onlyNumbers"
const onlyNumbersInputs = document.querySelectorAll(".onlyNumbers");

// Add an event listener to each input field
onlyNumbersInputs.forEach((input) => {
	input.addEventListener("keyup", () => {
		// Get the input value
		const inputValue = input.value;

		// Check if the input value is not a number
		if (isNaN(inputValue)) {
			// Throw an error
			alert("Error: Only numbers are allowed in this field.");
		}
	});
});

function ppDisable(rowId) {
	const checkbox1 = document.getElementById(`checkbox1_row_${rowId}`);
	const checkbox2 = document.getElementById(`checkbox2_row_${rowId}`);
	const button = document.getElementById(`button_row_${rowId}`);
	const ppTable = document.getElementById(`ppTable_row_${rowId}`);
	const ppHead = document.getElementById(`pp_heading_row_${rowId}`);

	// Define a function to handle the "change" event
	function handleCheckboxChange() {
		const isBillEveryone = checkbox1.checked;
		const isBillEqually = checkbox2.checked;
		button.disabled = isBillEveryone && isBillEqually;
		if (button.disabled) {
			ppTable.classList.remove("show");
		}

		ppHead.innerText =
			isBillEveryone === false && isBillEqually === true
				? "Enter '0' under Unbilled Name"
				: "Put individual share amount";
	}

	// Add the event listener to both checkboxes
	checkbox1.addEventListener("change", handleCheckboxChange);
	checkbox2.addEventListener("change", handleCheckboxChange);
}
for (let i = 1; i <= inputFields.length; i++) {
	ppDisable(i);
}
