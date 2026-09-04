document.querySelectorAll('.stores__list a').forEach((link) => {
  link.addEventListener('click', () => {
    window.setTimeout(() => {
      const stores = link.closest('details');
      if (stores) stores.open = false;
    }, 250);
  });
});
