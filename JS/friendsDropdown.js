const inputFields = document.querySelectorAll(".friends");

// number of row
const numOfRow = document.getElementsByClassName("amountRow").length;

const friendsArray = [];

// Add event listener to input field to update the dropdown options
inputFields.forEach((input) => {
	friendsArray.push(input);

	input.addEventListener("keyup", () => {
		friendsArray.forEach((input, index) => {
			friendsArray[index] = input;
		});

		for (let friendId = 1; friendId <= friends; friendId++) {
			for (let rowId = 1; rowId <= numOfRow; rowId++) {
				// get reference
				const inputField = document.getElementById(`friend_${friendId}`);
				const dropdownOption = document.getElementById(
					`dropdown_friend_${friendId}_row_${rowId}`
				);
				const tableHead = document.getElementById(
					`tableHead_friend_${friendId}_row_${rowId}`
				);
				const tableBody = document.getElementById(
					`tableBody_friend_${friendId}_row_${rowId}`
				);

				dropdownOption.innerText = inputField.value;
				tableHead.innerText = inputField.value;
			}
		}
	});
});
