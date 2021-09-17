let value = document.getElementById("value"),
  operators = document.querySelectorAll(".operator"),
  numbers = document.querySelectorAll(".number");

numbers.forEach((num) => {
  num.addEventListener("click", function () {
    if (value.innerHTML == "0") {
      value.innerHTML = num.innerHTML;
    } else {
      value.innerHTML += num.innerHTML;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    if (operator.id === "clear") {
      value.innerHTML = 0;
    } else if (operator.id === "%") {
      value.innerHTML += operator.id;
    } else if (operator.id === "/") {
      value.innerHTML += operator.id;
    } else if (operator.id === "*") {
      value.innerHTML += operator.id;
    } else if (operator.id === "-") {
      value.innerHTML += operator.id;
    } else if (operator.id === "+") {
      value.innerHTML += operator.id;
    } else if (operator.id === ".") {
      value.innerHTML += operator.id;
    } else if (operator.id === "=") {
      value.innerHTML = eval(value.innerHTML);
    }
  });
});
