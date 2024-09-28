/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
console.log("hola");

const button = document.querySelector("#btn-sm");
const messageContainer = document.querySelector("#message-container");

button.addEventListener("click", function() {
    const teamMembers = ["LavaTuAuto", "CitaSalud", "Mecánico a Domicilio"];
    const welcomeMessage = `Sistemas para realizar: ${teamMembers.join(', ')}`;
    
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = welcomeMessage;
    
    messageContainer.innerHTML = "";
    
    messageContainer.appendChild(messageParagraph);
    
    messageParagraph.style.fontSize = "1.5em";
    messageParagraph.style.color = "#333";
    messageParagraph.style.marginTop = "20px";
});
