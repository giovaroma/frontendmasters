//Closures Exercise

var nonsense = function (message) {

  var blab = function () {
    alert(message);
  }
  // setTimeout(blab, 2000);
  return blab;
}

var blabLater = nonsense('this is overwriting the original closure, maybe');
// newMessage();
var otherString = nonsense('this is another closure');


//5
var first = function (firstName) {
  var last = function (lastName) {
    console.log(firstName + " " + lastName);
  }
  return last;
}

var firstNameFarmer = first('Billy');
firstNameFarmer('Thorn');

//6
var storyWriter = function() {
  return {
    firstName: 'Giovanni',
    addWords: function(addWords) {
      addWords += addWords;
      return addWords;
    },
    erase: function() {
      addWords = "Story Erased";
      return erase;
    }
  };
}
//Need to assing the function to a variable to hold the object
var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

// var storyOfMyLife = storyWriter();
// storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
// storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
// storyOfMyLife.erase(); // ''

var nameArr = ['Giovanni', 'Rose', 'Luka'];

var checkAttendanceFunc = function(nameArr){
    var resultArr = [];
    for(var i = 0; i < nameArr.length; i++){
        resultArr.push(function(){ console.log('Is', nameArr[i], 'present?', i)})
    };
    return resultArr;
};
