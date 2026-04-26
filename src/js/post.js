const addButton = document.querySelector(".add-post-btn");
addButton.addEventListener("click", (e) => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "dismissed") {
      console.log("app install cancelled");
    } else {
      console.log("app installd");
    }
    deferredPrompt = null;
  });
});
