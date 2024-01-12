const userPromise = (url, firstname) => {
	const users = ["ibrohim", "bobur", "e'zoza", "gulchapchap"];
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			if (url === "/users" && firstname) {
				resolve(users.find((user) => user === firstname));
			} else {
				reject("Eror: Cannot find");
			}
		}, 2000);
	});
};
const data = userPromise("/users", "bobur")
	.then((user) => {
		console.log(user);
	})
	.catch((err) => console.log(err));

console.log(data);
