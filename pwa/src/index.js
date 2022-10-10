if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
      alert('SW Registered');
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
      alert('Fail to register SW');
    });
  });
}