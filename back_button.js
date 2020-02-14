let back_btn = document.querySelector(".back-btn");

submit_btn.addEventListener("click", () => {
  back_btn.style.display = "inline-block";
});

back_btn.addEventListener("click", () => {
  Content.style.display = "none";
	input_container.style.display = "block";
	back_btn.style.display = "none";
});
