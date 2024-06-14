window.addEventListener('storage', function (event) {
   if (event.key == 'logout-event') {
      setTimeout(() => {
         window.location.reload();
      }, 1200);
   }
});
