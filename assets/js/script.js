// Custom JavaScript can be added here.
// For now, it primarily includes basic smooth scrolling.

$(document).ready(function() {
  // Add smooth scrolling to all links with a hash
  $('a[href*="#"]:not([href="#"])').on('click', function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - $('.fixed-top').outerHeight() // Adjust for fixed header height
        }, 1000); // Smooth scroll duration
      }
    }
  });
});
