// Selected all html id
const clickBtn = document.getElementById("click-btn");
const myPara = document.getElementById("my-paragraph");
const audioSound = new Audio("./Audio-Sound/tap-notification-180637.mp3");

// random quote array
const defaultRandomQuote = [
  "sit amet consectetur adipisicing elit. Enim libero inventore similique, assumenda a delectus earum suscipit sequi dolores ab ipsum fuga modi maiores debitis non cupiditate unde beatae. Inventore aliquam praesentium assumenda. Placeat asperiores porro ea inventore id quidem?",
  "adipisicing elit. Nesciunt sint illo ab, optio maxime commodi? Veniam aut labore quod reiciendis iusto sint odit aspernatur, hic, facilis culpa ducimus officiis necessitatibus!",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi labore cumque qui dolorem magni nihil architecto dolor, laborum dolore quibusdam?",
  "amet consectetur, adipisicing elit. Nihil aut neque sint enim doloribus rerum at laboriosam quod dicta accusantium minima ratione, pariatur facilis perferendis deserunt distinctio consequuntur harum. Ex a eos rem aliquam, earum esse voluptates harum atque quos. Eos sit culpa esse, reiciendis iure veritatis dolorum adipisci modi.",
  "Officia maxime qui quis, fugit temporibus voluptate aperiam accusantium ipsum esse, dicta harum facilis rerum distinctio quas ratione nostrum ut quae porro.",
  "similique reiciendis incidunt nisi facilis eius veritatis repellendus error velit quisquam aliquam accusantium ex dolorem optio, laudantium asperiores doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse error ut quae deleniti praesentium inventore cumque a atque. Sed et explicabo suscipit saepe nobis nostrum iste maxime blanditiis unde numquam.",
  "laboriosam quod dicta accusantium minima ratione, pariatur facilis perferendis deserunt distinctio consequuntur harum. Ex a eos rem aliquam, earum esse voluptates harum atque quos. Eos sit culpa esse, reiciendis iure veritatis dolorum adipisci modi.",
  "adipisicing elit. Officia maxime qui quis, fugit temporibus voluptate aperiam accusantium ipsum esse, dicta harum facilis rerum distinctio quas ratione nostrum ut quae porro.",
  "Sunt sequi maxime similique reiciendis incidunt nisi facilis eius veritatis repellendus error velit quisquam aliquam accusantium ex dolorem optio, laudantium asperiores doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse error ut quae deleniti praesentium inventore cumque a atque. Sed et explicabo suscipit saepe nobis nostrum iste maxime blanditiis unde numquam.",
];

// window function
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  clickBtn.addEventListener("click", function () {
    let index = Math.floor(Math.random() * defaultRandomQuote.length);
    const quote = defaultRandomQuote[index];
    myPara.innerText = quote;
    audioSound.play();
    audioSound.volume = 0.3;
  });
}
