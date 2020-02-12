let data = document.querySelector(".database").innerHTML;
let game = document.querySelector(".game");
let play = document.querySelector(".play");
let wrong = document.querySelector(".wrong");
let correct = document.querySelector(".correct");

console.log(data);

var res = data.split(" ");
console.log(res);

for (val of res) {
  console.log(val);
  game.innerHTML += `<span>${val}</span>\n`;
}

play.innerHTML = game.innerHTML;

let game_span = game.childNodes;
console.log(game_span);

let correct_answer = [];
let answer = [];
for (let i = 0; i < game_span.length; ++i) {
  correct_answer.push(false);
  answer.push(false);
}

let correct_point = 0;
let wrong_point = 0;


for (let i = 0; i < game_span.length; ++i) {
  game_span[i].addEventListener("click", () => {
    game_span[i].classList.toggle("selected");
    correct_answer[i] = !correct_answer[i];
    correct_point = 0;
    wrong_point = 0;
    for (let j = 0; j < answer.length; ++j) {
      if (answer[j] === correct_answer[j]) {
        if (answer[j] === true)
          ++correct_point;
      }
      else ++wrong_point;
    }
    wrong.innerHTML = `<h2>WRONG: ${wrong_point}</h2>`
    correct.innerHTML = `<h2>CORRECT: ${correct_point}</h2>`
  });
}

let play_field = play.childNodes;

for (let i = 0; i < play_field.length; ++i) {
  play_field[i].addEventListener("click", () => {
    play_field[i].classList.toggle("selected");
    answer[i] = !answer[i];
    correct_point = 0;
    wrong_point = 0;
    for (let j = 0; j < answer.length; ++j) {
      if (answer[j] === correct_answer[j]) {
        if (answer[j] === true)
          ++correct_point;
      }
      else ++wrong_point;
    }
    wrong.innerHTML = `<h2>WRONG: ${wrong_point}</h2>`
    correct.innerHTML = `<h2>CORRECT: ${correct_point}</h2>`
  });
}
