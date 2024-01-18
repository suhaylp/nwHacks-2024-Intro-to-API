import { getModels, createChat, moderateChat } from "./api.js";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('showModelsButton').addEventListener('click', () => {
        console.log("should show models");
        getModels();
    });

    document.getElementById('generateResponseButton').addEventListener('click', () => {
        const inputText = document.getElementById('text-prompt').value;
        console.log("Input text:", inputText);
        createChat(inputText);
    });

    document.getElementById('checkModerationButton').addEventListener('click', () => {
        const inputText = document.getElementById('moderation-text-prompt').value;
        console.log("Input text:", inputText);
        moderateChat(inputText);
    });

    // Add similar event listeners for other buttons
});
