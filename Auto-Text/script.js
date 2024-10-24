const p = document.querySelector(".hello");
const container = document.querySelector(".container");
const jobs = ["Freelancer", "Web Developer", "Studnet", "Coder"];
let jobIndex = 0;
let charIndex = 0;

function update() {
  container.innerHTML = `<p> Hello I am ${jobs[jobIndex].slice(
    0,
    charIndex
  )} </p>`;
  setTimeout(update, 300);

  if (charIndex == jobs[jobIndex].length) {
    jobIndex++;
    charIndex = 0;
  }
  charIndex++;
  if (jobIndex == jobs.length - 1) {
    jobIndex = 0;
  }
}
update();
