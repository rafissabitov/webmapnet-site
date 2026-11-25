document.querySelectorAll('a[href^="mailto:"],a[href^="tel:"],a[href^="https://wa.me/"]').forEach(function (a) {
  a.addEventListener('click', function () {
    if (typeof gtag !== 'function') return;
    var h = a.getAttribute('href');
    var place = a.closest('header') ? 'header' : a.closest('.mbar') ? 'mobile_bar' : a.closest('#check') ? 'free_site_check'
      : a.closest('.phero') ? 'page_top' : 'contact';
    gtag('event', 'generate_lead', {
      lead_source: place,
      page: location.pathname,
      method: h.indexOf('tel:') === 0 ? 'call' : (h.indexOf('wa.me') > -1 ? 'whatsapp' : 'email')
    });
  });
});
