const form = document.getElementById("color-form");
const baseUrl = "https://www.thecolorapi.com/scheme";
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const colorSelected = document
    .getElementById("color-form-input")
    .value.slice(1);
//   console.log(colorSelected);
  const optionSelected = document.getElementById("color-form-select").value;
//   console.log(optionSelected);
  //   form.reset();

  fetch(`${baseUrl}?hex=${colorSelected}&mode=${optionSelected}`)
    .then((res) => res.json())
    .then((data) => {
    //   console.log(data);
      let colorDivHtml = "";
      let colorIdHtml = "";
      for (color of data.colors) {
        colorDivHtml= `
                ${colorDivHtml}
                <div class="color-div" style="background-color:${color.hex.value};">
                </div>
            `;
        colorIdHtml= `
                ${colorIdHtml}
                <div class="color-id">
                    ${color.hex.value}
                </div>
            `;
      }
    //   console.log(colorDivHtml);
      document.getElementById("color-div-container").innerHTML = colorDivHtml;
      document.getElementById("color-id-container").innerHTML = colorIdHtml;
    });
});


