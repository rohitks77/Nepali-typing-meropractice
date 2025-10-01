// Lightweight UX + analytics hooks
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function track(eventName, data) {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...data });
    } catch (_) {}
  }

  function handleClick(selector, name) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.addEventListener('click', function () {
        track('cta_click', { name: name });
      });
    });
  }

  handleClick('.cta-start', 'start_typing');
  handleClick('.cta-secondary', 'open_app');
})();


