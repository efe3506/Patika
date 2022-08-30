import getData from "./index.js";

console.log(
  getData(1)
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
);
