import axios from "axios";

function getData(idNumber) {
  return new Promise(async () => {
    const getUser = await axios(
      `https://jsonplaceholder.typicode.com/users/${idNumber}`
    );
    const getUserPost = await axios(
      `https://jsonplaceholder.typicode.com/posts?${idNumber}`
    );

    console.log({ getUser, getUserPost });
  });
}

export default getData;
