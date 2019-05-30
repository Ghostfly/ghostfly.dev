importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

function registerWorkbox(){
    workbox.routing.registerRoute(
        new RegExp(/.*\.js/),
        new workbox.strategies.CacheFirst()
    );

    workbox.routing.registerRoute(
        new RegExp(/(main).*\.js/),
        new workbox.strategies.CacheFirst()
    );

    workbox.routing.registerRoute(
       '/',
        new workbox.strategies.CacheFirst()
    );

    workbox.routing.registerRoute(
        /.*\.woff2?/,
        new workbox.strategies.CacheFirst({
          cacheName: 'elara-fonts-styles',
        })
    );    
    
    workbox.routing.registerRoute(
        /.*\.png/,
        new workbox.strategies.CacheFirst({
          cacheName: 'elara-png-cache',
        })
    ); 

    workbox.routing.registerRoute(
        /.*\.jpe?g/,
        new workbox.strategies.CacheFirst({
          cacheName: 'elara-jpeg-cache',
        })
    );

    workbox.routing.registerRoute(
        /.*\.svg/,
        new workbox.strategies.CacheFirst({
          cacheName: 'elara-svg-cache',
        })
    );

    workbox.routing.registerRoute(
        new RegExp(/.*\#!/),
        new workbox.strategies.CacheFirst()
    );

    workbox.routing.registerRoute(
        // Cache image files.
        /\.(?:png|jpg|jpeg|svg|gif)$/,
        // Use the cache if it's available.
        new workbox.strategies.CacheFirst({
          // Use a custom cache name.
          cacheName: 'image-cache',
          plugins: [
            new workbox.expiration.Plugin({
              // Cache only 20 images.
              maxEntries: 20,
              // Cache for a maximum of a week.
              maxAgeSeconds: 7 * 24 * 60 * 60,
            })
          ],
        })
    );
}
if (workbox) {
    console.log(`Elara ::: Workbox is loaded 🎉`);
    if(location.host.indexOf('localhost') !== -1) {
        console.warn('Elara ::: disabling worker caching, we are in dev');
    } else {
        registerWorkbox();
    }
} else {
    console.log(`Elara ::: Workbox didn't load 😬`);
}