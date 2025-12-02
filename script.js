document.getElementById("btn").onclick = async function () {
  const message = document.getElementById("text").value;
  const delay = Number(document.getElementById("delay").value);
  const output = document.getElementById("output");

  output.innerHTML = ""; // Clear previous output

  // Function returning a promise with setTimeout
  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  // Wait for the delay
  await wait(delay);

  // Display message
  output.innerHTML = message;
};

