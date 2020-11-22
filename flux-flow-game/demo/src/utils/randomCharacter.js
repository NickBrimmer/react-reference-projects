const images = [
  'https://i.pinimg.com/originals/a7/d3/41/a7d341f666ed2241e7e48b25770e1d83.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4ywjNj85vPoWKQjFv5isNDAq2yX7qBl9_6Q&usqp=CAU',
  'https://www.kindpng.com/picc/b/631/6312422.png',
  'https://st.depositphotos.com/1814084/1673/i/950/depositphotos_16735263-stock-photo-adam-sandler-at-the-ceremony.jpg'
];

const getRandomNumber = max => Math.floor(Math.random() * max);

export default function randomCharacter() {
  return {
    image: images[getRandomNumber(images.length)],
    health: getRandomNumber(100),
    attack: getRandomNumber(10),
    experience: getRandomNumber(30)
  };
}
