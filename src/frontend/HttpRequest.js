export default class HttpRequest {
  post(url, data) {
    return this.sendRequest("POST", url, data);
  }

  get(url) {
    return this.sendRequest("GET", url);
  }

  sendRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open(method, url, data);
      http.setRequestHeader("Content-Type", "application/json");
      data = JSON.stringify(data);

      http.onload = () => {
        if (http.status >= 200 && http.status < 300) {
          resolve(http.response);
          console.log(http.response, "http response");
        } else {
          reject(http.statusText);
        }
      };

      http.onerror = () => {
        reject("REJECT message inside onerror");
      };
      http.send(data);
    });
    return promise;
  };
}
