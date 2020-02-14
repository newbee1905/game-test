let input = document.getElementById("input");
let input_container = document.querySelector(".input-container");
let submit_btn = document.querySelector(".submit-btn");
let Content = document.querySelector(".selecte-answer-container");
let para = "";

submit_btn.addEventListener("click", () => {
  para = input.value;
  let words = para.split("\n");
  console.log(words);

  let fullPara = "";

  for (word of words) {
    fullPara += `<div>\n`
    word = word.split(" ");
    for (let i = 0; i < word.length; ++i)
      fullPara += `\t<span class="teacher-para">${word[i]}</span>\n`;
    console.log(word);
    fullPara += `</div>\n`
  }

  console.log(fullPara);

  Content.style.display = "block";
  input_container.style.display = "none";

  Content.innerHTML = fullPara;
  Content.scrollIntoView({ block: "start", behavior: "smooth" });
});
