//Setting DOM elements into variables to further manipulation
const items = document.querySelectorAll('.list-item');
const addItems = document.getElementById('add-items');
const selectItems = document.getElementById('select-items');
const makeShop = document.getElementById('make-shop');

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar-bottom').style.bottom = '0';
  } else {
    document.getElementById('navbar-bottom').style.bottom = '-200px';
  }
  prevScrollpos = currentScrollPos;
};

//Swipe items for execute actions
items.forEach((item) => {
  item.addEventListener('touchstart', (e) => {
    e.target.dataset.x =
      Number(e.touches[0].pageX) + Number(e.target.dataset.move) || 0;
  });

  item.addEventListener('touchmove', (e) => {
    let moveX = Number(e.target.dataset.x) - e.touches[0].pageX;

    moveX > 130 ? (moveX = 130) : null;
    moveX < -130 ? (moveX = -130) : null;

    e.target.dataset.move = moveX;

    anime({
      targets: e.target,
      translateX: -Number(e.target.dataset.move),
      duration: 300,
    });
  });

  item.addEventListener('touchend', (e) => {
    let elementMove = e.target.dataset.move;

    if (elementMove > 100) elementMove = 100;
    else if (elementMove < -100) elementMove = -100;
    else elementMove = 0;

    items.forEach((item) => {
      let content = item.querySelector('.list-content');

      if (content === e.target) {
        return null;
      }

      content.dataset.x = 0;
      content.dataset.move = 0;

      anime({
        targets: content,
        translateX: 0,
      });
    });

    setTimeout(() => {
      anime({
        targets: e.target,
        translateX: -Number(elementMove),
      });
    }, 1);
  });
});
