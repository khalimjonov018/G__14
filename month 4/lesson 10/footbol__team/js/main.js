function enterUsers() {
	const inputEl = document.querySelector("#input__username");
	const cardEl = document.querySelector("#cards__box");

	const getName = inputEl.value;
	fetch("https://crudcrud.com/api/7ddeaf362bbc421086d3e66e544a58ac/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({name: getName}),
	});
}
enterUsers();
