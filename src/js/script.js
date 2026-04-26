let deferredPrompt;

if ("serviceWorker" in navigator) {
  // with set serviceWorker scope
  //  navigator.serviceWorker.register("../sw.js", { scope: "" }).then(() => {
  //    console.log("serviceWorker Registered...!");
  //  });

  // without serviceWorker scope
  navigator.serviceWorker.register("../sw.js").then(() => {
    console.log("serviceWorker Registered...!");
  });
}

window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();
  deferredPrompt = e;
  return false;
});
