//Setting DOM elements into variables to further manipulation
const items = document.querySelectorAll('.list-item');
const addItemsButton = document.getElementById('add-items');
const selectItemsButton = document.getElementById('select-items');
const makeShopButton = document.getElementById('make-shop');
const saveButton = document.getElementById('save-button');
const clearButton = document.getElementById('clear-button');

//------------------------------------------------------------
//ADD NEW ITEMS MODE
//------------------------------------------------------------

addItemsButton.addEventListener('click', () => {
  document.querySelector('.list-add-item').classList.remove('invisible');
  document.querySelector('.settings').classList.add('invisible');
});

//------------------------------------------------------------

//------------------------------------------------------------
//SELECT ITEMS MODE
//------------------------------------------------------------

selectItemsButton.addEventListener('click', () => {
  document.querySelector('.list-add-item').classList.add('invisible');
});

//------------------------------------------------------------

//------------------------------------------------------------
//MAKE SHOP MODE
//------------------------------------------------------------

makeShopButton.addEventListener('click', () => {
  document.querySelector('.list-add-item').classList.add('invisible');
});

//------------------------------------------------------------

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
