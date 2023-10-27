console.log("Working...");
let vrn_count = 0,
  vrn_checkWin = 0,
  vrn_counter_X = 0,
  vrn_counter_O = 0,
  vrn_total = 9;
const vrn_table = document.querySelector("table");
const vrn_tds = vrn_table.querySelectorAll("td");
vrn_tds.forEach((vrn_temp) => {
  vrn_temp.addEventListener("click", (e) => {
    if (
      document.querySelector("#" + e.target.id).innerHTML == "" &&
      !vrn_checkWin
    ) {
      if (vrn_count) {
        document.querySelector("#" + e.target.id).innerHTML = "O";
        vrn_count = 0;
        vrn_total -= 1;
      } else {
        document.querySelector("#" + e.target.id).innerHTML = "X";
        vrn_count = 1;
        vrn_total -= 1;
      }
      vrn_result();
      if (!vrn_total && !vrn_checkWin)
        alert("Match Draw!!!\nPlease Restart the Game...");
    }
  });
});
function vrn_result() {
  if (
    vrn_checker("cell1", "cell2", "cell3") ||
    vrn_checker("cell4", "cell5", "cell6") ||
    vrn_checker("cell7", "cell8", "cell9") ||
    vrn_checker("cell1", "cell4", "cell7") ||
    vrn_checker("cell2", "cell5", "cell8") ||
    vrn_checker("cell3", "cell6", "cell9") ||
    vrn_checker("cell1", "cell5", "cell9") ||
    vrn_checker("cell3", "cell5", "cell7")
  ) {
    if (vrn_count) {
      alert("Player X is Winner...");
      vrn_counter_X += 1;
      vrn_checkWin = 1;
      document.querySelector(".scoreX").innerHTML = vrn_counter_X;
    } else {
      alert("Player O is Winner...");
      vrn_counter_O += 1;
      vrn_checkWin = 1;
      document.querySelector(".scoreO").innerHTML = vrn_counter_O;
    }
  }
}
function vrn_checker(vrn_a, vrn_b, vrn_c) {
  if (
    vrn_helper(vrn_a).innerHTML != "" &&
    vrn_helper(vrn_b).innerHTML == vrn_helper(vrn_a).innerHTML &&
    vrn_helper(vrn_b).innerHTML == vrn_helper(vrn_c).innerHTML
  ) {
    // vrn_helper(vrn_a).style.backgroundColor = "#B3FFAE";
    // vrn_helper(vrn_b).style.backgroundColor = "#B3FFAE";
    // vrn_helper(vrn_c).style.backgroundColor = "#B3FFAE";
    vrn_helper(vrn_a).style.color = "#5ed25e";
    vrn_helper(vrn_b).style.color = "#5ed25e";
    vrn_helper(vrn_c).style.color = "#5ed25e";

    return true;
  }
}
function reset() {
  console.log("restarting..."); // window.location.reload();
  vrn_tds.forEach((vrn_temp) => {
    vrn_temp.innerHTML = "";
    vrn_temp.style.backgroundColor = "#000000b5";
    vrn_temp.style.color = "white";
    vrn_checkWin = 0;
    vrn_total = 9;
  });
}
document.querySelector("#btn").addEventListener("click", () => reset());
function vrn_helper(vrn_temp) {
  return document.querySelector("#" + vrn_temp);
}
