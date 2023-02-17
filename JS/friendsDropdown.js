//Friends array
const inputFields = Array.from(document.querySelectorAll(".friends"));

const friendsArray = inputFields.map((input) => {
	return {
		id: input.getAttribute("id"),
		value: input.value,
	};
});

// number of row
const numOfRow = document.getElementsByClassName("amountRow").length;

function updateDropdown() {
	for (let rowId = 1; rowId <= numOfRow; rowId++) {
		// Dropdown menu taking data form array
		const dropdown = document.getElementById(`dropdown_row_${rowId}`);

		const options = friendsArray
			.filter((friend) => friend.value !== "")
			.map((friend) => {
				return `<option value="${friend.value}" id="${friend.id}">${friend.value}</option>`;
			})
			.join("");

		dropdown.innerHTML = options;
	}
}

// Update the table head with the values from the friends array
function updateTableHeads() {
	for (let rowId = 1; rowId <= numOfRow; rowId++) {
		// Get the table head and body element
		const ppTableHead = document.getElementById(`table_head_row_${rowId}`);
		const ppTableBody = document.getElementById(`table_body_row_${rowId}`);

		const thElements = ppTableHead.querySelectorAll("th");
		const tdElements = ppTableBody.querySelectorAll("td");

		for (let i = 0; i < thElements.length; i++) {
			const friend = friendsArray[i];
			thElements[i].textContent = friend.value;
			if (friend.value === "") {
				thElements[i].style.display = "none";
				tdElements[i].style.display = "none";
			} else {
				thElements[i].style.display = "table-cell";
				tdElements[i].style.display = "table-cell";
			}
		}
	}
}

// Add event listener to input field to update the dropdown options
inputFields.forEach((input) => {
	input.addEventListener("keyup", () => {
		friendsArray.forEach((friend) => {
			friend.value = document.getElementById(friend.id).value;
		});
		updateDropdown();
		updateTableHeads();

		// for (let rowId = 1; rowId <= numOfRow; rowId++) {}
	});
});
