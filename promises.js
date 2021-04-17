const fetch = require("node-fetch");

const pets = [
  { id: 1, name: "Ruby", age: 1 },
  { id: 2, name: "Bean", age: 2 },
];

function getPets() {
  setTimeout(() => {
    pets.forEach((pet) => {
      console.log(pet.name);
    });
  }, 1000);
}

function addPet(pet) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      pets.push(pet);

      const error = false;
      if (error) {
        reject("error");
      } else {
        resolve();
      }
    }, 3000);
  });
}

// addPet({ id: 3, name: "Coco", age: 3 })
//   .then(getPets)
//   .catch((err) => console.log(err));

// const promise1 = Promise.resolve("Promise 1");
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 5000, "Promise 2")
// );
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Promise 3")
// );
// const promisefetch = fetch(
//   "https://jsonplaceholder.typicode.com/users"
// ).then((res) => res.json());

// Promise.all([promise1, promise2, promise3, promisefetch]).then((result) =>
//   console.log(result)
// );

// Async/Await
// async function init() {
//   await addPet({ id: 3, name: "Coco", age: 3 });

//   getPets();
// }

// init();

// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
// }

// getUsers();

//////////////////////

function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login");
      resolve({ email, password });
    }, 2000);
  });
}

function getAllPets(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   pets.forEach((pet) => {
      //     console.log(pet.name);
      //     resolve(pet.name);
      //   });
      console.log(pets[0].name);
      resolve(pets[0].name);
    }, 1000);
  });
}

function getPetDetail(pet) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ruby is a good dog. Her age is 3..");
    });
  });
}

// login("myemail@gmail.com", 12345, (user) => {
//   console.log(user);
//   getAllPets(user, (pets) => {
//     console.log(pets);
//     getPetDetail(pets, (pet) => {
//       console.log(pet);
//     });
//   });
// });

// login("myemail@gmail.com", 12345)
//   .then((user) => getAllPets(user))
//   .then((pets) => getPetDetail(pets))
//   .then((pet) => console.log(pet));

async function displayPet() {
  const loggedInUser = await login("myemail@gmail.com", 12345);
  const pets = await getAllPets(loggedInUser);
  const pet = await getPetDetail(pets);
  console.log(pet);
}

displayPet();
