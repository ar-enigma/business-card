// Check if the page is cross-origin isolated. If not, register the service worker.
if (window.crossOriginIsolated) {
    // If we're already isolated, we don't need the service worker.
    console.log("Page is already cross-origin isolated.");
} else if (window.isSecureContext) {
    // If we are secure (HTTPS), register the service worker
    const workerUrl = './coep-sw.js';
    
    // Attempt to register the service worker
    if (navigator.serviceWorker.controller) {
        // Service worker is already active, reload to ensure headers are applied
        navigator.serviceWorker.controller.postMessage('reload-request');
        if (performance.getEntriesByType('navigation')[0].type !== 'reload') {
            window.location.reload();
        }
    } else {
        // First time load, register the service worker
        navigator.serviceWorker.register(workerUrl).then(
            (registration) => {
                console.log('Service Worker registration successful:', registration);
                // After registration, reload the page to apply the headers
                window.location.reload(); 
            },
            (error) => {
                console.error('Service Worker registration failed:', error);
            }
        );
    }
} else {
    // Cannot register service worker without HTTPS
    console.error("Service workers require a secure context (HTTPS) to register.");
}
