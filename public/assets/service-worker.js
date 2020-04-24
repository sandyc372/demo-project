
self.addEventListener('fetch', function(event) {
  console.log(event);
  event.respondWith(
    new Response('Hello from your friendly neighbourhood service worker!')
  );
});
console.log("service worker inside")