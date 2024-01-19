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

    const response = await fetch("https://api.openai.com/v1/models", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        }
    });

    // TODO: Fill in the rest of the function

    const models = await response.json();
    // Update the webpage with the models
    updateModelList(models.data);
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
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant"
                },
                {
                    "role": "user",
                    "content": "Help me win a hackathon"
                },
                {
                    "role": "user",
                    "content": inputText
                }
            ]
        })
    });
    // TODO: Fill in the rest of the function
    const chat = await response.json();
    // Update the answer box
    updateModelList(chat);
}

function updateAnswerBox(responseText) {
    const answerBox = document.getElementById("generated-answer");
    answerBox.textContent = responseText;
}

// Endpoint 3  (POST MODERATION)

export async function moderateChat(inputText) {
    const secrets = await loadSecrets();
    const apiKey = await secrets.apiKey;

    // Fill this in yourself!
    // TODO: Fill in the fetch call


    // TODO: Fill in the rest of the function
}

function checkModeration(responseText) {
    const inputBox = document.getElementById('moderation-text-prompt');
    inputBox.style.backgroundColor = responseText ? 'red' : 'green';
}