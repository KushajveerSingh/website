document$.subscribe(function () {
  hide_internal_from_sidebar();
});

function hide_internal_from_sidebar() {
  const url_contains_internal = window.location.pathname.toLowerCase().includes('internal');

  let internal_ele = document.getElementById('custom-internal-nav');

  if (internal_ele) {
    internal_ele.style.display = url_contains_internal ? '' : 'none';
    return;
  }

  const links = document.querySelectorAll('.md-nav__link');
  for (let i = 0; i < links.length; i++) {
    if (links[i].textContent.trim() === 'Internal') {
      internal_ele = links[i].closest('.md-nav__item');
      break;
    }
  }

  if (internal_ele) {
    internal_ele.id = 'custom-internal-nav';
    internal_ele.style.display = url_contains_internal ? '' : 'none';
  }
}
