const firstBtn = document.querySelector(".first__btn");
const secondBtn = document.querySelector(".second__btn");
const content = document.querySelector(".content");
const postModalBody = document.querySelector("#post_modal-body");
const modalComment = document.querySelector("#modalComment");

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

						<button onclick="renderPosts(${user.id})" type="button" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">post</button>


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

					<button type="button" onclick="renderComment(${post.id})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
					Comment
     </button>
					</div>

				`;

				if (post.userId === id) {
					postModalBody.innerHTML += template;
				}
			});
		});
}

function renderComment(id) {
	const userProise = fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
		.then((com) => {
			return com.json();
		})
		.then((comment) => {
			console.log(comment);
			modalComment.innerHTML = "";
			// console.log(modalComment);
			comment.forEach((comment) => {
				const templatele = `
					<div>
					<p>userId: ${comment.postId}</p>
					<p>id: ${comment.id}</p>
					<p>title: ${comment.name}</p>
					<p>body: ${comment.email}</p>
					</div>
				`;

				modalComment.innerHTML += templatele;
			});
		});
}
