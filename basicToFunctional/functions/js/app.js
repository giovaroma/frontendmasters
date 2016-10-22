
//1 and 2
var AnimalTestUser = function (username) {
  var argAmount = arguments.length;
  var otherArgs = [];
  if (argAmount > 1) {
    for (var i = 1; i < argAmount; i++) {
      otherArgs.push(arguments[i]);
    }
  }
  return {
    username: username,
    otherArgs : otherArgs
  };
}

var testSheep = AnimalTestUser('nerino','bella');
console.log(testSheep);

//3
var AnimalCreator = function (username, species, tagline, noises, friends) {
  var animal = {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: friends
  };
  return animal;
}

var dog = AnimalCreator('Nerino','dog','dove finiro', ['Ancora qua','sono confuso'], ['Giovanni','Rose']);
console.log(dog);

var horse = AnimalCreator('Bianco','horse','andiamo',['Cosa faccio', 'Ho Vinto'],['Karlo','Ena']);
console.log(horse);

var cat = AnimalCreator('Garfield','cat','more milk',['Piu', 'Hmmm'],['James','Marko']);
console.log(cat);

//4
var addFriend = function (dog, horse) {
  dog.friends.push(horse.username);
  return dog;
}

var dogFriend = addFriend(dog,horse);
console.log(dogFriend);

//5 Modified array to take only the username of the animal friend.

//6
var myFarm = [dog,horse,cat];
console.log(myFarm);

//7
var addMatchesArray = function (farm) {
  for (var i = 0; i < farm.length; i++) {
    farm[i].matches = [];
  }
}

addMatchesArray(myFarm);
console.log(myFarm[0]);

//8
var giveMatches = function (farm) {
  for (var animal in farm) {
    farm[animal].matches.push(farm[animal].friends[0]);
  }
}

giveMatches(myFarm);
console.log(myFarm[0]);


//Nesting
//1
var friendsList = [];
for (var i = 0; i < myFarm.length; i++) {
  friendsList.push(myFarm[i].friends);
}

console.log(friendsList);

var relationships = {};

relationships.friends = friendsList;

console.log(relationships);
console.log(Object.keys(relationships).length);

var matches = [];
relationships.matches = matches;
relationships.matches.push('pig');
console.log(relationships);
