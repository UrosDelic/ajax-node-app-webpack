import HttpRequest from "../frontend/HttpRequest.js";

class Test {
  constructor() {
    this.http = new HttpRequest();
    this.buttonPost = document.getElementById("buttonPost");
  }

  eventListeners() {
    this.buttonPost.addEventListener("click", () => {
      this.clickTest();
    });
  }

  clickTest() {
    alert("click test");
  }
}
const test1 = new Test();
test1.eventListeners();
