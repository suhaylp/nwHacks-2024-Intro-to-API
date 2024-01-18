async function loadSecrets() {
	const response = await fetch("./secrets.json");
	return await response.json();
}

// Endpoint 1 (GET MODELS)
export async function getModels() {
	const secrets = await loadSecrets();
	const apiKey = await secrets.apiKey;

	// Fill this in yourself!
	// TODO: Fill in the fetch call

	// TODO: Fill in the rest of the function
}

function updateModelList(models) {
	const modelList = document.getElementById("modelList"); // Assuming you have an element with this ID
	modelList.innerHTML = ""; // Clear existing list

	// Add each model to the list
	models.forEach((model) => {
		const listItem = document.createElement("li");
		listItem.textContent = model.id; // Assuming each model has a 'name' property
		modelList.appendChild(listItem);
	});
}

// Endpoint 2 (POST CHAT)

export async function createChat(inputText) {
	const secrets = await loadSecrets();
	const apiKey = await secrets.apiKey;

	// Fill this in yourself!
	// TODO: Fill in the fetch call

	// TODO: Fill in the rest of the function
}

function updateAnswerBox(responseText) {
	const answerBox = document.getElementById("generated-answer");
	answerBox.textContent = responseText;
}

// Endpoint 3 (POST MODERATION)

export async function create_FILL_THIS_IN() {
	const secrets = await loadSecrets();
	const apiKey = await secrets.apiKey;

	// Fill this in yourself!
}
