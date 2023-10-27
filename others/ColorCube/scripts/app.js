console.log("Working...");
let vrn_main = document.querySelector(".main");
let vrn_rows = 3,
  vrn_columns = 3,
  vrn_score = 0,
  vrn_randomColor = "",
  vrn_tds = "",
  vrn_seconds = 10,
  vrn_x = Math.floor(Math.random() * (vrn_rows * vrn_columns));
randomColorGenerator();
console.log("Cell " + vrn_x);
let random = document.querySelector("#vrn_" + vrn_x);
random.style.opacity = "0.7";
vrn_func();

function vrn_func() {
  random.addEventListener("click", () => {
    if (random.id == "vrn_" + vrn_x) {
      vrn_score += 1;
      vrn_rows += 1;
      vrn_columns += 1;
      document.querySelector("#scorer").innerHTML = vrn_score;
      vrn_main.innerHTML = "";
      let tbl = document.createElement("table");

      // for (let i = 0; i < vrn_rows; i++) {
      //   let row = document.createElement("tr");
      //   for (let j = 0; j < vrn_columns; j++) {
      //     let cell = document.createElement("td");
      //     row.appendChild(cell);
      //   }
      //   tbl.appendChild(row);
      // }

      for (let row = 0; row < vrn_rows; row++) {
        let allHtml = "<tr>";
        for (let column = 0; column < vrn_columns; column++) {
          allHtml += `<td></td>`;
        }
        allHtml += "</tr>";
        tbl.innerHTML += allHtml;
      }
      vrn_main.appendChild(tbl);
      vrn_tds = document.querySelectorAll("td");
      tbl.setAttribute("border", "1");
      vrn_x = Math.floor(Math.random() * (vrn_rows * vrn_columns));
      console.log("Cell " + vrn_x);
      randomColorGenerator();
      random = document.querySelector("#vrn_" + vrn_x);
      random.style.opacity = "0.7";
    }
    vrn_func();
  });
}
function randomColorGenerator() {
  vrn_tds = document.querySelectorAll("td");
  vrn_randomColor = Math.floor(Math.random() * 16777215).toString(16);
  for (let i = 0; i < vrn_tds.length; i++) {
    vrn_tds[i].setAttribute("id", "vrn_" + i);
    vrn_tds[i].style.background = "#" + vrn_randomColor;
  }
}
function timer() {
  if (vrn_seconds > -1) {
    document.querySelector("#counter").innerHTML = vrn_seconds;
    setTimeout(timer, 1000);
  } else {
    alert("Game Over!!!\nYour Score : " + vrn_score);
    window.location.reload();
  }
  vrn_seconds -= 1;
}
setTimeout(timer, 1000);
