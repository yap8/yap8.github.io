document.querySelector('.header__toggle').addEventListener('click', e => {
  const nav = document.querySelector('.header__nav')
  
  if (nav.classList.contains('header__nav--active')) {
    nav.classList.remove('header__nav--active')
  } else {
    nav.classList.add('header__nav--active')
  }
})
