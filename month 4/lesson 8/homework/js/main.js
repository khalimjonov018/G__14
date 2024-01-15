const firstBtn = document.querySelector(".first__btn");
const secondBtn = document.querySelector(".second__btn");
const content = document.querySelector(".content");
const postModalBody = document.querySelector('#post_modal-body');

firstBtn.addEventListener("click", () => {
	const userProise = fetch("https://jsonplaceholder.typicode.com/users")
		.then((data) => {
			return data.json();
		})
		.then((user) => {
			console.log(user);
			content.innerHTML = "";
			user.forEach((user) => {
				const template = `
					<div>
						<p>id: ${user.id}</p>
						<p>name: ${user.name}</p>
						<p>username: ${user.username}</p>
						<p>email: ${user.email}</p>
						<button onclick="renderPosts(${user.id})" type="button" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>
					</div>
					`;
				content.innerHTML += template;
			});
		});
});

function renderPosts(id) {
	const userProise = fetch("https://jsonplaceholder.typicode.com/posts")
		.then((data) => {
			return data.json();
		})
		.then((posts) => {
			console.log(posts);
			postModalBody.innerHTML = "";
			posts.forEach((post) => {
				const template = `
					<div>
					<p>userId: ${post.userId}</p>
					<p>id: ${post.id}</p>
					<p>title: ${post.title}</p>
					<p>body: ${post.body}</p>
					<button onclick="rendercomments()" type="button" class="btn btn-second"  data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>
					</div>
				`;

				if (post.userId === id) {
					postModalBody.innerHTML += template;
				}
			});
		});
}

