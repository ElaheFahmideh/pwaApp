if ("serviceWorker" in navigator) {
  // with set serviceWorker scopre
  //  navigator.serviceWorker.register("./sw.js", { scope: "" }).then(() => {
  //    console.log("serviceWorker Registered...!");
  //  });

  // without serviceWorker scope
  navigator.serviceWorker.register("./sw.js").then(() => {
    console.log("serviceWorker Registered...!");
  });
}
