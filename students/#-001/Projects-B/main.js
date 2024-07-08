/** @format */

let search = document.getElementById("search");
let insert = document.querySelectorAll(".button");
let check = document.querySelector(".checkbox");

// Add event listeners to each "ADD" button
insert.forEach((button) => {
	button.addEventListener("click", () => {
		let input = search.value;

		// createing div
		let div = document.createElement("div");

		// Create label element
		let label = document.createElement("label");
		label.textContent = input;
		label.className = "label";

		// Create checkbox element
		let checkbox = document.createElement("input");
		checkbox.type = "checkbox";
        checkbox.className= "checkbox";
        checkbox.style.width='20px';
        checkbox.style.height='20px';

		// Create delete button element
		let del = document.createElement("button");
		del.textContent = "DELETE";
		del.className = "button2";

		// Append elements to the div container
		div.appendChild(label);
		div.appendChild(checkbox);
		div.appendChild(del);

		// Append the div to the checkbox container
		check.appendChild(div);

		
		checkbox.addEventListener("change", () => {
			if (checkbox.checked) {
				label.classList.add("underlined");
			} else {
				label.classList.remove("underlined");
			}
		});

		
		del.addEventListener("click", () => {
			check.removeChild(div);
		});
	});
});
