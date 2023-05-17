fetch("https://meme-api.com/gimme/50")
	.then((res) => res.json())
	.then((data) => showMeme(data.memes))
	.catch((error) => console.log(error));

const showMeme = (memes) => {
	for (const meme of memes) {
		const allMemes = document.getElementById("allMemes");

		const newMeme = document.createElement("div");
		newMeme.classList.add("col");

		const imgURL = meme.url ? meme.url : "../images/alt.png";

		newMeme.innerHTML = `
        <div class="card text-bg-info mb-3" ">
        <img src="${imgURL}" class="card-img-top" />
            <div class="card-body">
            <h5 class="card-title">Author: ${meme.author}</h5>
            </div>
        </div>`;

		allMemes.appendChild(newMeme);
	}

	return;
};
