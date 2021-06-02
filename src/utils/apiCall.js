import axios from "axios";

let api_url="https://api.shrtco.de/v2/shorten";

class ApiCall {

  get = (url) =>
    new Promise((resolve, reject) => {
      axios
        .get(api_url + url)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
}

export default new ApiCall();
