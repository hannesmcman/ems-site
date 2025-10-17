document.addEventListener('DOMContentLoaded', function() {
  const banner = document.getElementById('dismissible-banner');
  const dismissButton = document.getElementById('dismiss-button');

  if (banner && dismissButton) {
    dismissButton.addEventListener('click', function() {
      banner.style.display = 'none'; // Hides the banner
      // Optionally, set a cookie or local storage item to keep it hidden
      // for future visits or the current session
      // localStorage.setItem('bannerDismissed', 'true');
    });

    // Optionally, check if the banner should be hidden on load
    // if (localStorage.getItem('bannerDismissed') === 'true') {
    //   banner.style.display = 'none';
    // }
  }
});