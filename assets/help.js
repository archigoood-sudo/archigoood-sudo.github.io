(() => {
  const input = document.querySelector('[data-help-search], #help-search');
  if (!input) return;
  const cards = [...document.querySelectorAll('[data-search-item], .searchable')];
  const status = document.querySelector('[data-search-status], #search-status');
  const empty = document.querySelector('[data-search-empty]');
  const normalize = value => value.toLocaleLowerCase('ru-RU').trim();
  const update = () => {
    const query = normalize(input.value);
    let visible = 0;
    cards.forEach(card => {
      const haystack = card.dataset.searchItem ?? card.dataset.search ?? card.textContent ?? '';
      const match = !query || normalize(haystack).includes(query);
      card.hidden = !match;
      if (match) visible += 1;
    });
    if (status) status.textContent = query ? `Найдено: ${visible}` : 'Ищите по названию или теме';
    if (empty) empty.style.display = query && !visible ? 'block' : 'none';
  };
  input.addEventListener('input', update);
  update();
})();
