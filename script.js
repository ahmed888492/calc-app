const btns = document.querySelectorAll(".content .btns button");
const inp = document.getElementById("inp");

btns.forEach((elm) => {
  elm.addEventListener("click", () => {
    if (elm.id == "c") {
      inp.value = "";
    } else if (elm.id == "del") {
      inp.value = inp.value.slice(0, -1);
    } else if (elm.id == "equal") {
      inp.value = eval(inp.value);
    } else {
      inp.value += elm.innerHTML;
    }
  });
});
