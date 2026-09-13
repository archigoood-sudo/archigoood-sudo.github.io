(() => {
  const input = document.querySelector('[data-help-search]');
  if (!input) return;
  const cards = [...document.querySelectorAll('[data-search-item]')];
  const status = document.querySelector('[data-search-status]');
  const empty = document.querySelector('[data-search-empty]');
  const normalize = value => value.toLocaleLowerCase('ru-RU').trim();
  const update = () => {
    const query = normalize(input.value);
    let visible = 0;
    cards.forEach(card => {
      const match = !query || normalize(card.dataset.searchItem).includes(query);
      card.hidden = !match;
      if (match) visible += 1;
    });
    if (status) status.textContent = query ? `Найдено: ${visible}` : 'Ищите по названию или теме';
    if (empty) empty.style.display = query && !visible ? 'block' : 'none';
  };
  input.addEventListener('input', update);
  update();
})();
