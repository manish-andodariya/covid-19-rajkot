"use strict"; let deferredInstallPrompt = null; const installButton = document.getElementById("butInstall"); function saveBeforeInstallPromptEvent(t) { deferredInstallPrompt = t, installButton.style.display = "block"; } function installPWA(t) { installButton.style.display = "none", deferredInstallPrompt.prompt(), deferredInstallPrompt.userChoice.then(t => { "accepted" === t.outcome ? console.log("User accepted the A2HS prompt", t) : console.log("User dismissed the A2HS prompt", t), deferredInstallPrompt = null; }); } function logAppInstalled(t) { console.log("Weather App was installed.", t); } installButton.addEventListener("click", installPWA), window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent), window.addEventListener("appinstalled", logAppInstalled);