// Target data 

const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 6;

playerLivesCount.textContent = playerLives;

// Generate an array

const getData = () => [

    {
        imgSrc: 'assets/images/emoji1.png',
        name: 'fart'
    },
    {
        imgSrc: 'assets/images/emoji2.png',
        name: 'happy'
    },
    {
        imgSrc: 'assets/images/emoji3.png',
        name: 'ok'
    },
    {
        imgSrc: 'assets/images/emoji4.png',
        name: 'thumb'
    },
    {
        imgSrc: 'assets/images/emoji5.png',
        name: 'confused'
    },
    {
        imgSrc: 'assets/images/emoji6.png',
        name: 'thinking'
    },
    {
        imgSrc: 'assets/images/emoji7.png',
        name: 'smile'
    },
    {
        imgSrc: 'assets/images/emoji8.png',
        name: 'laugh'
    },
    {
        imgSrc: 'assets/images/emoji1.png',
        name: 'fart'
    },
    {
        imgSrc: 'assets/images/emoji2.png',
        name: 'yes'
    },
    {
        imgSrc: 'assets/images/emoji3.png',
        name: 'ok'
    },
    {
        imgSrc: 'assets/images/emoji4.png',
        name: 'fight'
    },
    {
        imgSrc: 'assets/images/emoji5.png',
        name: 'confused'
    },
    {
        imgSrc: 'assets/images/emoji6.png',
        name: 'thinking'
    },
    {
        imgSrc: 'assets/images/emoji7.png',
        name: 'smile'
    },
    {
        imgSrc: 'assets/images/emoji8.png',
        name: 'laugh'
    },
];

// Randomize cards

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

//Card generator function

const cardGenerator = () => {
    const cardData = randomize();

    //Generate HTML

    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        //Attach image to cards

        face.src = item.imgSrc;
        card.setAttribute('name', item.name);

        //Attach cards to section

        section.appendChild(card);
        card.appendChild(face)
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        })
    });
};

// Check cards

const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    console.log(flippedCards);

    // logic 

    // Turn 2 cards then do a check

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log('match');
            // stop flip if correct
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                cardStyle.pointerEvents = 'none';
            });
        } else {
            // Turn back if wrong
            console.log('wrong');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });

            playerLives--;
            playerLivesCount.textContent = playerLives;
        }
    }
};
cardGenerator();