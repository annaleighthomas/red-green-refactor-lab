import fetch from 'node-fetch';

// function munge(obj) {
//   return {
//     name: obj.character,
//     text: obj.quote,
//     image: obj.image
//   };
// }

const API = 'http://futuramaapi.herokuapp.com/api/quotes/1';

export function fetchQuotes() {
  const response = fetch(API)
    .then (response => response.json())
    .then (data => ({
      name: data[0].character,
      text: data[0].quote,
      image: data[0].image
    }));
  return response;
  
 


}

