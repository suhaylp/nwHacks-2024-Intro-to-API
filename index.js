import { getModels, createChat } from "./api.js";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('showModelsButton').addEventListener('click', () => {
        console.log("should show models");
        getModels();
    });

	document.getElementById('generateImageButton').addEventListener('click', () => {
        console.log("should generate and show image");
        // createImage();
    });

    document.getElementById('generateResponseButton').addEventListener('click', () => {
        const inputText = document.getElementById('text-prompt').value;
        console.log("Input text:", inputText);
        createChat(inputText);
    });

    // Add similar event listeners for other buttons
});

let showModels = () => {
	console.log("should show models");
	getModels();
};

let generateImage = () => {
	console.log("should generate and show image");
};

let generateResponse = () => {
	console.log("should generate and show response");
};
