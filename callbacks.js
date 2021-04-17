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

function addPet(pet, callback) {
  setTimeout(() => {
    pets.push(pet);
    callback();
  }, 3000);
}

// addPet({ id: 3, name: "Coco", age: 3 }, getPets);
// getPets();

////////////////

function login(email, password, callback) {
  setTimeout(() => {
    console.log("login");
    callback({ email, password });
  }, 2000);
}

function getAllPets(user, callback) {
  setTimeout(() => {
    // pets.forEach((pet) => {
    //   callback(pet.name);
    // });
    callback(pets[0].name);
  }, 1000);
}

function getPetDetail(pet, callback) {
  setTimeout(() => {
    callback("Ruby is a good dog. Her age is 3..");
  });
}

login("myemail@gmail.com", 12345, (user) => {
  console.log(user);
  getAllPets(user, (pets) => {
    console.log(pets);
    getPetDetail(pets, (pet) => {
      console.log(pet);
    });
  });
});
