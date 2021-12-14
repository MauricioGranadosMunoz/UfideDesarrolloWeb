const staticCacheName='site-static';
const assets=[
	'/',
    '/public/src/components/auth/login.css',
    '/public/src/components/auth/LoginScreen.js',
    '/public/src/components/productos/productos.css',
    '/public/src/components/productos/productos.js',
    '/public/src/components/productos/ListaProductos.js',
    '/public/src/components/productos/ListaProductosItem.js',
    '/public/src/components/productos/ProductosModal.js',

];
self.addEventListenner('install', evt=>{
    evt.waitUntil(
        caches.open(staticCacheName).then(cache=> {
            cache.addAll(assets);

        })
    );
});
self.addEventListener('fetch', evt =>{
	evt.respondWith(	
		caches.math(evt.request).then(cachesRes => {
			return cacheRes || fetch(evt.request);
		})
	);
});