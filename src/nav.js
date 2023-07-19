
export function registerNav(apps, container) {
  const path = location.pathname;
  if (container && Array.isArray(apps)) {
    container.innerHTML = '';
    apps.forEach(v => {
      const { activeRule, name, path: pathName } = v;
      const isActive = activeRule === path;
      const div = document.createElement('div')
      div.innerText = name;
      div.onclick = !isActive && (() => {
        history.pushState(undefined, '', pathName);
      })
      if (isActive) {
        div.style = 'color: #f6ff00;';
      }
      container.appendChild(div);
    });
  } else {
    console.warn('warning: no nav');
  }
}

export function registerHomeClick(className) {
  const el = document.querySelector(className);
  el.addEventListener('click', () => {
    history.pushState(undefined, '', '/');
  })
}