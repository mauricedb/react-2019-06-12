const mapNumbers = document.getElementById("mapNumbers");
const startTimer = document.getElementById("startTimer");
const loadJokes = document.getElementById("loadJokes");
const result = document.getElementById("result");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const jokesUrl =
  "http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript";

mapNumbers.addEventListener("click", () => {
  const evenNumbers = numbers.filter(n => n % 2 === 0).map(n => ({ n }));

  result.textContent = JSON.stringify(evenNumbers);
});

let handle = null;
startTimer.addEventListener("click", () => {
  if (!handle) {
    let value = -1;
    handle = setInterval(() => {
      value += 1;
      if (value % 2 === 0) {
        result.textContent = JSON.stringify(value);
      }
    }, 1000);
    startTimer.textContent = "Stop timer";
  } else {
    clearInterval(handle);
    handle = null;
    startTimer.textContent = "Start timer";
  }
});

loadJokes.addEventListener("click", () => {
  fetch(jokesUrl)
    .then(rsp => rsp.json())
    .then(data => data.value)
    .then(jokes => {
      result.textContent = JSON.stringify(jokes);
    });
});
