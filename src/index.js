// document.addEventListener("DOMContentLoaded", () => {
//   //
// });

// const main = document.querySelection("main-content")
// console.log(main)

const taskForm = document.querySelector("#create-task-form");
const resultElement = document.querySelector("#result");
taskForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  const result = "hiking";
  resultElement.textContent = result;
});

// function documentquerySelection() {
//   return hiking();
// }
