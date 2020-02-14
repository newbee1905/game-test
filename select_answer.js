let teacher_answer;

submit_btn.addEventListener("click", () => {
  teacher_answer = document.querySelectorAll(".teacher-para");

	console.log(teacher_answer);

  for (let i = 0; i < teacher_answer.length; ++i) {
		teacher_answer[i].addEventListener("click", () => {
			teacher_answer[i].classList.toggle("selected-text");
		});
  }
});
