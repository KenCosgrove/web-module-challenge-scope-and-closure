// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 *  counter 1 uses closure and counter2 does not. in counter2 the variable count is 
    in the global scope, while counter1 the count variable is in function scope.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 * counter1 uses a closure. you can tell because there is an inner function nested within
 * the outter function.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 * counter1 would be preferable if you want to be able to access counter function as a variable
 * to be used later
 * counter2 would be preferable if you plan on using the count variable for other functions
 * in your code
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number
 of points that a team scored in an inning. 
 This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(Math.random() * 3);
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the
 callback function `inning` (from above) and a number of innings
  and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(callback, innings) {
  let homeFinal = 0;
  let awayFinal = 0;
  for (let i = 1; i <= innings; i++) {
    homeFinal += callback();
    awayFinal = awayFinal + callback();
  }
  return { home: homeFinal, away: awayFinal };
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore() {
  let home = 0;
  let away = 0;
  home = home + inning();
  away = away + inning();
  let score = `${home} - ${away}`;
  return score;
}

function scoreboard(callback, callback2, innings) {
  let finalHome;
  let finalAway;
  for (let i = 1; i <= innings; i++) {
    console.log(`inning ${i}: ${callback()}`);
  }
  return `Final Score: ${finalHome} - ${finalAway}`;
}

console.log(scoreboard(getInningScore, inning, 9));

/*
function scoreboard(callback, callback2, innings) {
  let home = 0;
  let away = 0;
  function getInningScore() {
    for (let i = 1; i <= innings; i++) {
      console.log(`inning ${[i]}: home ${(home = callback2())} - 
     away ${(away = callback())}`);
    }
    return getInningScore;
  }
  return `Final Score = home ${home} away ${away}`;
} 

*/
