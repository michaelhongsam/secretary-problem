function interview(arr)
{
  var e = 2.71828;  
  var scoreToBeat = 0;
  var N = arr.length; // the number of candidates is equal to the length of the array.
  var n = Math.floor(N/e); // N is divided by e and is rounded down
  
  console.log("\nThere are " + N + " candidates.");
  console.log("The first " + n + " candidate(s) will be rejected.");
  console.log("scoreToBeat is " + scoreToBeat +"\n");
  
  for(var i=0; i<N; i++) // loop though the entire array of candidates
  {
    console.log("Checking candidate " + i + ", score is " + arr[i]);
    if(i<=n-1) // if the candidate is one of the first n candidates
    // NOTE: arrays start at 0 and not at 1.
    // example [0,1,2,3,4] 
    // This array has a length of 5 even though the last position is called the 4th position.
    // This is why I compare "i" with n-1
    {
      if (arr[i]>scoreToBeat) // and his score is higher than what was seen before
      {
        scoreToBeat = arr[i]; // save the highest score as "scoreToBeat"
        console.log("*** scoreToBeat is now " + scoreToBeat + " ***");
      }
    }
    // We have now passed the first n candidates.
    else if (arr[i]>scoreToBeat) // if the candidate's score is higher than scoreToBeat
    {
      return i; // current candidate is selected
    }
    
    else if (i === N-1) // if we are at the last candidate
    // NOTE: arrays start at 0 and not at 1.
    // example [0,1,2,3,4] 
    // This array has a length of 5 even though the last position is called the 4th position.
    // This is why I compare "i" with N-1
    {
      return i; // candidate is automatically selected
    }
  }
}
// found the first canidate that beat the score
console.log("Selected candidate: " + interview([0,1,2,3,2,3,2,1,0,8,0]) +"\n");

// selected the last person
console.log("Selected candidate: " + interview([0,1,2,3,2,3,2,1,0,0,0]) +"\n");


