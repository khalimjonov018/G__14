const form = document.querySelector("#Singinform");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const emailInput = event.target[0];
	const passwordInput = event.target[1];

	fetch("https://reqres.in/api/login"),
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: emailInput.value,
				password: passwordInput.value,
			}),
		}
			.then()
			.catch();
});
