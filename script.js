var gameRegime = false;
const card = document.querySelector('.cards-content');

//generation menu
const navbar = document.querySelector('.navbar'),
  menuLinks = document.querySelectorAll('.menuLink'),
  ham = document.querySelector('.ham');

ham.addEventListener('click', toggleHamburger);

//show-hiding menu
function toggleHamburger() {
  navbar.classList.toggle('showNav');
  ham.classList.toggle('change');
}

//closing menu by click anywhere but the menu
document.addEventListener('click', (e) => {
  const target = e.target,
    menuNav = target == navbar || target.closest('.navbar'),
    btnNav = target.closest('.ham'),
    navActive = navbar.classList.contains('showNav');

  if (!menuNav && !btnNav && navActive) {
    toggleHamburger();
  }
});

//higlight menu item
function highlight(e) {
  if (e.target.classList.contains('menuLink')) {
    toggleHamburger();
    document
      .querySelectorAll('.menuLink')
      .forEach((item) => item.classList.remove('active'));
    e.target.classList.add('active');
  }
}

document.querySelector('ul').addEventListener('click', highlight);

const fragment = document.createDocumentFragment();
const parentDiv = document.querySelector('.cards-content');

//objects categories
const categoryset0 = {
  set0: {
    title: 'cry',
    image: 'assets/img/cry.jpg',
    translate: 'плакать',
    audio: 'assets/sound/cry.mp3',
  },
  set1: {
    title: 'dance',
    image: 'assets/img/dance.jpg',
    translate: 'танцевать',
    audio: 'assets/sound/dance.mp3',
  },
  set2: {
    title: 'dive',
    image: 'assets/img/dive.jpg',
    translate: 'нырять',
    audio: 'assets/sound/dive.mp3',
  },
  set3: {
    title: 'draw',
    image: 'assets/img/draw.jpg',
    translate: 'рисовать',
    audio: 'assets/sound/draw.mp3',
  },
  set4: {
    title: 'fish',
    image: 'assets/img/fish.jpg',
    translate: 'ловить рыбу',
    audio: 'assets/sound/fish.mp3',
  },
  set5: {
    title: 'fly',
    image: 'assets/img/fly.jpg',
    translate: 'летать',
    audio: 'assets/sound/fly.mp3',
  },
  set6: {
    title: 'hug',
    image: 'assets/img/hug.jpg',
    translate: 'обнимать',
    audio: 'assets/sound/hug.mp3',
  },
  set7: {
    title: 'jump',
    image: 'assets/img/jump.jpg',
    translate: 'прыгать',
    audio: 'assets/sound/jump.mp3',
  },
};

const categoryset1 = {
  set0: {
    title: 'open',
    image: 'assets/img/open.jpg',
    translate: 'открывать',
    audio: 'assets/sound/open.mp3',
  },
  set1: {
    title: 'play',
    image: 'assets/img/play.jpg',
    translate: 'играть',
    audio: 'assets/sound/play.mp3',
  },
  set2: {
    title: 'point',
    image: 'assets/img/point.jpg',
    translate: 'указывать',
    audio: 'assets/sound/point.mp3',
  },
  set3: {
    title: 'ride',
    image: 'assets/img/ride.jpg',
    translate: 'ездить',
    audio: 'assets/sound/ride.mp3',
  },
  set4: {
    title: 'run',
    image: 'assets/img/run.jpg',
    translate: 'бегать',
    audio: 'assets/sound/run.mp3',
  },
  set5: {
    title: 'sing',
    image: 'assets/img/sing.jpg',
    translate: 'петь',
    audio: 'assets/sound/sing.mp3',
  },
  set6: {
    title: 'skip',
    image: 'assets/img/skip.jpg',
    translate: 'пропускать, прыгать',
    audio: 'assets/sound/skip.mp3',
  },
  set7: {
    title: 'swim',
    image: 'assets/img/swim.jpg',
    translate: 'плавать',
    audio: 'assets/sound/swim.mp3',
  },
};

const categoryset2 = {
  set0: {
    title: 'argue',
    image: 'assets/img/argue.jpg',
    translate: 'спорить',
    audio: 'assets/sound/big.mp3',
  },
  set1: {
    title: 'build',
    image: 'assets/img/build.jpg',
    translate: 'строить',
    audio: 'assets/sound/big.mp3',
  },
  set2: {
    title: 'carry',
    image: 'assets/img/carry.jpg',
    translate: 'нести',
    audio: 'assets/sound/big.mp3',
  },
  set3: {
    title: 'drive',
    image: 'assets/img/drive.jpg',
    translate: 'водить машину',
    audio: 'assets/sound/big.mp3',
  },
  set4: {
    title: 'drop',
    image: 'assets/img/drop.jpg',
    translate: 'падать',
    audio: 'assets/sound/big.mp3',
  },
  set5: {
    title: 'pull',
    image: 'assets/img/pull.jpg',
    translate: 'тянуть',
    audio: 'assets/sound/big.mp3',
  },
  set6: {
    title: 'catch',
    image: 'assets/img/catch.jpg',
    translate: 'ловить',
    audio: 'assets/sound/big.mp3',
  },
  set7: {
    title: 'push',
    image: 'assets/img/push.jpg',
    translate: 'толкать',
    audio: 'assets/sound/big.mp3',
  },
};

const categoryset3 = {
  set0: {
    title: 'egg',
    image: 'assets/img/egg.jpg',
    translate: 'яйцо',
    audio: 'assets/sound/big.mp3',
  },
  set1: {
    title: 'bread',
    image: 'assets/img/bread.jpg',
    translate: 'хлеб',
    audio: 'assets/sound/small.mp3',
  },
  set2: {
    title: 'cheese',
    image: 'assets/img/cheese.jpg',
    translate: 'сыр',
    audio: 'assets/sound/fast.mp3',
  },
  set3: {
    title: 'ice-cream',
    image: 'assets/img/ice-cream.jpg',
    translate: 'мороженое',
    audio: 'assets/sound/slow.mp3',
  },
  set4: {
    title: 'fruit',
    image: 'assets/img/fruit.jpg',
    translate: 'фрукты',
    audio: 'assets/sound/friendly.mp3',
  },
  set5: {
    title: 'pizza',
    image: 'assets/img/pizza.jpg',
    translate: 'пицца',
    audio: 'assets/sound/unfriendly.mp3',
  },

  set6: {
    title: 'sausage',
    image: 'assets/img/sausage.jpg',
    translate: 'косбаса, сосиски',
    audio: 'assets/sound/young.mp3',
  },
  set7: {
    title: 'vegetables',
    image: 'assets/img/vegetables.jpg',
    translate: 'овощи',
    audio: 'assets/sound/old.mp3',
  },
};

const categoryset4 = {
  set0: {
    title: 'cat',
    image: 'assets/img/cat.jpg',
    translate: 'кот',
    audio: 'assets/sound/cat.mp3',
  },
  set1: {
    title: 'dog',
    image: 'assets/img/dog.jpg',
    translate: 'собака',
    audio: 'assets/sound/dog.mp3',
  },
  set2: {
    title: 'chick',
    image: 'assets/img/chick.jpg',
    translate: 'цыпленок',
    audio: 'assets/sound/chick.mp3',
  },
  set3: {
    title: 'chicken',
    image: 'assets/img/chicken.jpg',
    translate: 'курица',
    audio: 'assets/sound/chicken.mp3',
  },
  set4: {
    title: 'horse',
    image: 'assets/img/horse.jpg',
    translate: 'лошадь',
    audio: 'assets/sound/horse.mp3',
  },
  set5: {
    title: 'pig',
    image: 'assets/img/pig.jpg',
    translate: 'свинья',
    audio: 'assets/sound/pig.mp3',
  },
  set6: {
    title: 'rabbit',
    image: 'assets/img/rabbit.jpg',
    translate: 'кролик',
    audio: 'assets/sound/rabbit.mp3',
  },
  set7: {
    title: 'sheep',
    image: 'assets/img/sheep.jpg',
    translate: 'овца',
    audio: 'assets/sound/sheep.mp3',
  },
};

const categoryset5 = {
  set0: {
    title: 'bird',
    image: 'assets/img/bird.jpg',
    translate: 'птица',
    audio: 'assets/sound/bird.mp3',
  },
  set1: {
    title: 'fish',
    image: 'assets/img/fish.jpg',
    translate: 'рыба',
    audio: 'assets/sound/fish.mp3',
  },
  set2: {
    title: 'frog',
    image: 'assets/img/frog.jpg',
    translate: 'лягушка',
    audio: 'assets/sound/frog.mp3',
  },
  set3: {
    title: 'giraffe',
    image: 'assets/img/giraffe.jpg',
    translate: 'жираф',
    audio: 'assets/sound/giraffe.mp3',
  },
  set4: {
    title: 'lion',
    image: 'assets/img/lion.jpg',
    translate: 'лев',
    audio: 'assets/sound/lion.mp3',
  },
  set5: {
    title: 'mouse',
    image: 'assets/img/mouse.jpg',
    translate: 'мышь',
    audio: 'assets/sound/mouse.mp3',
  },
  set6: {
    title: 'turtle',
    image: 'assets/img/turtle.jpg',
    translate: 'черепаха',
    audio: 'assets/sound/turtle.mp3',
  },
  set7: {
    title: 'dolphin',
    image: 'assets/img/dolphin.jpg',
    translate: 'дельфин',
    audio: 'assets/sound/dolphin.mp3',
  },
};

const categoryset6 = {
  set0: {
    title: 'skateboard',
    image: 'assets/img/skateboard.jpg',
    translate: 'скейтборд',
    audio: 'assets/sound/skirt.mp3',
  },
  set1: {
    title: 'scooter',
    image: 'assets/img/scooter.jpg',
    translate: 'самокат',
    audio: 'assets/sound/pants.mp3',
  },
  set2: {
    title: 'skiing',
    image: 'assets/img/skiing.jpg',
    translate: 'лыжи',
    audio: 'assets/sound/blouse.mp3',
  },
  set3: {
    title: 'skates',
    image: 'assets/img/skates.jpg',
    translate: 'коньки',
    audio: 'assets/sound/dress.mp3',
  },
  set4: {
    title: 'roller skates',
    image: 'assets/img/rollerskates.jpg',
    translate: 'ролики',
    audio: 'assets/sound/boot.mp3',
  },
  set5: {
    title: 'football',
    image: 'assets/img/football.jpg',
    translate: 'футбол',
    audio: 'assets/sound/shirt.mp3',
  },
  set6: {
    title: 'tennis',
    image: 'assets/img/tennis.jpg',
    translate: 'тенис',
    audio: 'assets/sound/coat.mp3',
  },
  set7: {
    title: 'bicycle',
    image: 'assets/img/bicycle.jpg',
    translate: 'велосипед',
    audio: 'assets/sound/shoes.mp3',
  },
};

const categoryset7 = {
  set0: {
    title: 'sad',
    image: 'assets/img/sad.jpg',
    translate: 'грустный',
    audio: 'assets/sound/sad.mp3',
  },
  set1: {
    title: 'angry',
    image: 'assets/img/angry.jpg',
    translate: 'сердитый',
    audio: 'assets/sound/angry.mp3',
  },
  set2: {
    title: 'happy',
    image: 'assets/img/happy.jpg',
    translate: 'счастливый',
    audio: 'assets/sound/happy.mp3',
  },
  set3: {
    title: 'tired',
    image: 'assets/img/tired.jpg',
    translate: 'уставший',
    audio: 'assets/sound/tired.mp3',
  },
  set4: {
    title: 'surprised',
    image: 'assets/img/surprised.jpg',
    translate: 'удивленный',
    audio: 'assets/sound/surprised.mp3',
  },
  set5: {
    title: 'scared',
    image: 'assets/img/scared.jpg',
    translate: 'испуганный',
    audio: 'assets/sound/scared.mp3',
  },
  set6: {
    title: 'smile',
    image: 'assets/img/smile.jpg',
    translate: 'улыбка',
    audio: 'assets/sound/smile.mp3',
  },
  set7: {
    title: 'laugh',
    image: 'assets/img/laugh.jpg',
    translate: 'смех',
    audio: 'assets/sound/laugh.mp3',
  },
};

//object cards
const cards = {
  set0: {
    title: 'Action 1',
    image: 'assets/img/activity.jpg',
    name: categoryset0,
  },
  set1: {
    title: 'Action 2',
    image: 'assets/img/swimming.jpg',
    name: categoryset1,
  },
  set2: {
    title: 'Action 3',
    image: 'assets/img/color.jpg',
    name: categoryset2,
  },
  set3: {
    title: 'Food',
    image: 'assets/img/food.jpg',
    name: categoryset3,
  },
  set4: {
    title: 'Animal 1',
    image: 'assets/img/pet.jpg',
    name: categoryset4,
  },
  set5: {
    title: 'Animal 2',
    image: 'assets/img/lion.jpg',
    name: categoryset5,
  },
  set6: {
    title: 'Sport',
    image: 'assets/img/sport.jpg',
    name: categoryset6,
  },
  set7: {
    title: 'Emotion',
    image: 'assets/img/smile.jpg',
    name: categoryset7,
  },
};

//generation div cards html
function setCards() {
  for (let key in cards) {
    const divCard = document.createElement('div');
    divCard.className = 'card';

    const divImage = document.createElement('div');
    divImage.className = 'card-img';

    const divTitle = document.createElement('div');
    divTitle.className = 'card-title';

    fragment.append(divCard);
    divCard.append(divImage);
    divCard.append(divTitle);
    parentDiv.append(fragment);

    divTitle.innerHTML = cards[key].title;
    divImage.style.backgroundImage = `url(${cards[key].image})`;
    divCard.setAttribute('data-name', `category${key}`);
  }
}
setCards();

//delete div cards when creating categories
function deleteDiv() {
  const delDiv = document.querySelector('.cards-content');
  while (delDiv.firstChild) {
    delDiv.removeChild(delDiv.firstChild);
  }
}

//cteating categories by refence to a card
document.addEventListener('click', (e) => {
  let cardName = e.target.closest('.card');
  let menuLink = e.target.closest('.menuLink');
  if (cardName) {
    let setName = eval(cardName.getAttribute('data-name'));
    deleteDiv();
    setCategory(setName);
    menuLinks.forEach((item) => {
      item.classList.remove('active');
      if (
        item.getAttribute('data-name') === cardName.getAttribute('data-name')
      ) {
        item.classList.add('active');
      }
    });
  }
  //link on main page
  if (menuLink) {
    deleteDiv();
    let targetAttr = e.target.getAttribute('data-name');
    if (targetAttr === 'main') {
      setCards();
    } else {
      let setLink = eval(targetAttr);
      setCategory(setLink);
    }
  }
});

//create cards with category
function setCategory(obj) {
  for (let i in obj) {
    const divCard = document.createElement('div');
    divCard.className = 'category';

    const divImage = document.createElement('div');
    divImage.className = 'category-img';

    const divTitle = document.createElement('div');
    divTitle.className = 'category-title';

    const divFront = document.createElement('div');
    divFront.className = 'front';

    const divBack = document.createElement('div');
    divBack.className = 'back';

    const divBtn = document.createElement('div');
    divBtn.className = 'btn-rotate';

    const divName = document.createElement('div');
    divName.className = 'category-name';

    fragment.append(divCard);
    divCard.append(divFront);
    divFront.append(divImage);
    divFront.append(divName);
    divName.append(divTitle);
    divName.append(divBtn);
    divCard.append(divBack);

    parentDiv.append(fragment);

    divTitle.innerHTML = obj[i].title;
    divImage.style.backgroundImage = `url(${obj[i].image})`;
    divBack.innerHTML = obj[i].translate;
    divBtn.style.backgroundImage = 'url(assets/img/rotate.png)';
    divCard.setAttribute('data-sound', `${obj[i].title}`);
  }
}

const divAppContent = document.querySelector('.app-content');

//create div for score
const divStar = document.createElement('div');
divStar.className = 'score';
divAppContent.append(divStar);

//create btn "Start game"
const btnGame = document.createElement('div');
btnGame.className = 'btn-start-game';
btnGame.innerHTML = 'Start Game';
divAppContent.append(btnGame);

//behaviour btn switcher
var switcher = document.querySelector('.switcher');
/*switcher.addEventListener('click', () => {
  switcher.classList.toggle('active_btn');

  const title = document.querySelectorAll('.card-title'),
    spanText = document.querySelector('span'),
    switchAttr = switcher.getAttribute('data-switch'),
    imgCategory = document.querySelectorAll('.category-img'),
    nameCategory = document.querySelectorAll('.category-name');

  spanText.innerHTML === switchAttr
    ? (spanText.innerHTML = switcher.getAttribute('data-switch-on'))
    : (spanText.innerHTML = switchAttr);

  if (spanText.innerHTML === 'train') {
    title.forEach((item) => (item.style.color = '#48266C'));
    btnGame.style.display = 'none';
  }
  if (spanText.innerHTML === 'play') {
    title.forEach((item) => (item.style.color = '#055fa6'));
    btnGame.style.display = 'block';
  }

  imgCategory.forEach((item) => item.classList.toggle('play-regime'));
  nameCategory.forEach((item) => item.classList.toggle('none'));
});*/

let word = '';
let res = [];

//create arr with sound for game
function setArr() {
  const allSound = document.querySelectorAll('.category');

  res = [];
  for (let item = 0; item < allSound.length; item++) {
    const soundArr = allSound[item].getAttribute('data-sound');
    res.push(soundArr);
  }
  return console.log(res);
}

//shuffling random arr with sound
const shuffle = (res) => {
  return res.sort(() => Math.round(Math.random() * 100) - 50);
};

//click "Start game"
document.addEventListener('click', (e) => {
  const btnGame = document.querySelector('.btn-start-game');

  if (e.target === btnGame) {
    btnGame.innerHTML = '';
    btnGame.className = 'btn-none';

    gameRegime = !gameRegime;
    setArr();
    shuffle(res);
  }

  if (gameRegime) {
    word = res[0];
    setAudio(res[0]);
    res.shift();
  }
});

card.addEventListener('click', checkCard);

//check answer playing
function checkCard(e) {
  const target = e.target.closest('.category');
  if (target) {
    if (target.getAttribute('data-sound') === word) {
      const star = document.createElement('div');
      star.className = 'star';
      divStar.append(star);
      star.style.backgroundImage = 'url(assets/img/star.png)';
    } else {
      if (gameRegime) {
        const star = document.createElement('div');
        star.className = 'star';
        divStar.append(star);
        star.style.backgroundImage = 'url(assets/img/star-grey.png)';
      }
    }
  }
}

function finishGame() {
  if (res.length == 0) {
    deleteDiv();
    const divFinish = document.createElement('div');
    divFinish.className = 'finish-game';
    card.append(divFinish);
    const divStar = document.querySelector('.score');
    divStar.style.display = 'none';
  }
}

//turn off sound in game mode
document.addEventListener('click', (e) => {
  if (e.target.closest('.front') && !gameRegime) {
    const name = e.target.closest('.category').getAttribute('data-sound');
    setAudio(name);
  }
});

//get sound card
function setAudio(name) {
  const audio = new Audio(`assets/sound/${name}.mp3`);

  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

//rotate card
document.addEventListener('click', (e) => {
  if (e.target.closest('.btn-rotate')) {
    e.target.closest('.category').classList.add('rotate');
  }
});

const outDiv = document.querySelector('body');

outDiv.onmouseover = outDiv.onmouseout = setStay;
const categoryDiv = document.querySelector('.category');

//rotate card when cursor out
function setStay(e) {
  if (e.type == 'mouseout') {
    if (e.target.closest('.back')) {
      if (!e.relatedTarget.closest('.category-translate'))
        document
          .querySelectorAll('.category')
          .forEach((item) => item.classList.remove('rotate'));
    }
  }
}
