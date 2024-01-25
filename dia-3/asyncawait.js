const data = [
  {
    title: "Aprendiendo JavaScript",
    year: "2021",
    isbn: "979-8700179263",
    auhtor: "Carlos Azaustre",
  },
  {
    title: "React.js Practico",
    year: "2022",
    isbn: "TBD",
    auhtor: "Carlos Azaustre",
  },
  {
    title: "Clean JavaScript",
    year: "2020",
    isbn: "979-8567583319",
    auhtor: "Carlos Azaustre",
  },
];

function getData() {
  return new Promise((resolve, reject) => {
    if (data.length === 0) {
      reject(new Error("Data is empty"));
    }
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}
async function fetchingData() {
  const books = await getData();
  console.log(books);
}

fetchingData()