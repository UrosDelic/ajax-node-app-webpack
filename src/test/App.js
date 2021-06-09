import HttpRequest from "./HttpRequest.js";

class DomInterface {
  constructor() {
    this.httpRequest = new HttpRequest();
    this.passwordField = document.getElementById("password");
    this.emailField = document.getElementById("email");
    this.textArea = document.getElementById("logData");
    this.postButton = document.getElementById("post-request-button");
    this.getButton = document.getElementById("get-request-button");
    this.form = document.getElementById("form");
  }
  addEventListeners() {
    this.passwordField.addEventListener("change", this.enableButton());
    this.emailField.addEventListener("change", this.enableButton());
    this.form.addEventListener("submit", e => {
      e.preventDefault();
    });
    this.getButton.addEventListener("click", () => {
      httpRequest
        .get("http://localhost:8080/get-data")
        .then(response => {
          showResponseData(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
    this.postButton.addEventListener("click", () => {
      const obj = {
        email: emailField.value,
        password: passwordField.value,
      };

      textArea.innerText = "";
      httpRequest
        .post("http://localhost:8080/post-data", obj)
        .then(response => {
          showResponseData(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }
}
const domInterface = new DomInterface();
domInterface.addEventListeners();
// enableButton() {
//   if (this.passwordField.value !== "" && this.emailField.value !== "") {
//     this.postRequestButton.disabled = false;
//   } else {
//     this.postRequestButton.disabled = true;
//   }
// }
// showResponseData(displayData) {
//   if (displayData !== "") {
//     displayData = JSON.parse(displayData);
//     console.log(displayData, "displayData");
//     for (let element in displayData) {
//       if (displayData[element] !== "") {
//         textArea.innerHTML = `email: ${displayData.email}\npassword: ${displayData.password}`;
//       }
//     }
//   } else textArea.innerHTML = `no data to display`;
// }

// post button disabled

// disabled post button

// inputs
