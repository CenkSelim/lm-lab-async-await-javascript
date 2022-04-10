import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

const fetchDataAsync = async (apiEndPoint) => {
  try {
    const result = await fetch(apiEndPoint);
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

};



fetchData(jsonTypicode);

fetchDataAsync(jsonTypicode);