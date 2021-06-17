// // ex-01

// // console.log("aman saini"); 

// // ex-02

var readLineSync = require('readline-sync');
var userName = readLineSync.question('What is your name ?\n');

// // ex-03 & ex-04

console.log(`\nHi, ${userName}. Welcome to NeoG Camp! .`);

// // ex-05

// var readLineSync = require('readline-sync');
var age = readLineSync.question("\nAm I older than 25 ?\n");

if(age.toUpperCase()==="no".toUpperCase())console.log("You are Right");
else  console.log("You are Wrong");

// // ex-06

var score = 0, city = "";

city = readLineSync.question('\nIn which city does I prefer to live ?\n');

if(city.toUpperCase()==="Gurgaon".toUpperCase())score += 10;
else 
  score -= 10;
console.log(`Your score is : ${score}`);

// ex-07

function add(a, b){
  return a+b;
}

var myAdd = add(5,7);
console.log("\nAddition of 5+7 = " + myAdd);


// ex-08

var mul = (a,b)=>{
  return a*b;
}

function checkAnswer(question, correctAns){
  var userAns = readLineSync.question(question);

  if(userAns==correctAns){
    console.log("Your answer is Correct");
    score += 10;
  }
  else{
    console.log("Your answer is Wrong....\nCorrect ans is : " + correctAns);
    score -= 10;
  }
  console.log(`Score is : ${score}`);
}

checkAnswer("\n9*9 is... ?\n", mul(9,9));



// ex-09 

console.log('\n');

for(let i=1; i<=5; ++i){
  console.log(`${i} . Aman Saini`);
}

// Home-Work
console.log('\n');
for(let i=1; i<=5; ++i){
  for(let j=1; j<=i; ++j){
    process.stdout.write('*');
  }
  console.log('');
}

console.log('\nReverse pattern\n');

for(let i=1; i<=5; ++i){
  for(let j=5; j>=i; --j){
    process.stdout.write('*');
  }
  console.log('');
}


// ex-10

var groceryItems = ["apple", "mango", "kiwi", "strawberry", "watermelon"];

console.log(`${groceryItems[0]}, ${groceryItems[2]}, ${groceryItems[groceryItems.length - 1]}`)

//  ex-11
console.log('\n');

for(let i=0; i<groceryItems.length ; ++i)
    console.log(groceryItems[i]);


//  ex-12 

var Superman = {
  name : "Superman",
  powers : "flight",
  costumecolor : "blue",
	health : 999,
	stealth: 0
};
var Batman = {
  name : "Batman",
  powers : "flight",
  costumecolor : "black",
	health : 1000,
	stealth: 100
};
var Krish = {
  name : "Krish",
  powers : "flight-roam",
  costumecolor : "Jetblack",
	health : 1050,
	stealth: 1010
};


var superHeros = [Superman , Batman, Krish];

console.log('\n');

for (let i=0 ; i<superHeros.length; i++){
	console.log("Name : ", superHeros[i].name);
	console.log("Costume Color :", superHeros[i].costumecolor);
}

//  ex-13  &&  ex-14  &&  ex-15

console.log(`\nHi, ${userName}. Welcome to this quiz...`)
console.log("--------------");

var score = 0;

function quiz(obj){
		var userAnswer = readLineSync.question(obj.question);
		if(obj.answer === userAnswer){
			console.log("Huuraahhh you got 10 points");
			score += 10;
		}
		else{
			console.log("Wrong answer your 10 points deducted");
			score -= 10;
		}

		console.log(" current score is :", score);
		console.log("--------------");
}

var questionList = [ 
		{
			question: "\nWho is my favorite superhero?",
			answer: "Dhruv"
		}, 
		{
			question: "\nWhich is my favorite sad song?",
			answer: "Channa Meraya"
		}, 
		{
			question: "\nWhich is my favorite Food?",
			answer: "Naan With Butter Paneer Masala"
		}
];

var highScoreList = [
	{
		name : "Suraj",
		score : 30
	},
	{
		name : "Deepak",
		score : 20
	},
	{
		name : "Akshay",
		score : 10
	}
];


for (let i=0; i<questionList.length; i++){
	var currentques = questionList[i];
		quiz(currentques);
}

console.log("\nHigh Score List : \n")

for (let i=0; i<highScoreList.length; i++){
		console.log(`Name : ${highScoreList[i].name}\nScore : ${highScoreList[i].score}\n`);
}


console.log(`\nIf you beat the high score then send me a screenshot of that score. Thanks for playing quiz`);
