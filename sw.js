self.addEventListener("install", (event) => {
  console.log("SW installing...", event);
});

self.addEventListener("activate", (event) => {
  console.log("SW activating...", event);
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  console.log("fetching some data...", event);
  event.respondWith(fetch(event.request));
  //   event.respondWith(new Response("آفلاین هستید!", { status: 503 }));
  //   event.respondWith(fetch(event.request));
  //   event.respondWith(null);
});
