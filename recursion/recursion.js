//calculate produce of an array of numbers
function product(nums, idx = 0){
    if(nums.length === idx) return 1;
    return nums[idx] * product(nums, idx +1);
}
console.log(product([2,3,4]));
//return LENGTH of the longest word given an arr of words
const longest = (words, idx=0, currLongest=0) => {

    if(idx === words.length) return currLongest;

    currLongest = Math.max(words[idx].length, currLongest);
    return longest(words, idx+1, currLongest)
}
console.log(longest(['hello','hi','hola']));
//return a string with every other letter
const everyOther = (str, idx=0, newStr="") => {
    if(idx >= str.length) return newStr;
    newStr += str[idx];
    return everyOther(str, idx +2, newStr)
}
console.log(everyOther("hello"));
//checks if string is palindrome
const isPalindrome = (str,idx=0) => {
    //checks by idx if values are the same forward and reversed, if yes T if no F
    let left = idx;
    let right = str.length -idx -1;

    if(left > right) return true;
    if(str[left] != str[right]) return false;
    return isPalindrome(str, idx +1);
}
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("tacodog"));
//return idx of val in arr of -1 of not present
const findIndex = (arr, val, idx=0) => {
    if(arr.length === idx) return -1; //if empty or val not in arr return -1
    if(arr[idx] === val) return idx; //if val found at udx return that idx
    return findIndex(arr, val, idx +1)
}
let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals, "cat"));
console.log(findIndex(animals, "dog"));
//return reversed copy of string
const revString = (str, idx = 0, newStr="") => {
    if(str.length === newStr.length) return newStr;
    newStr += str[str.length -1 -idx];
    return revString(str, idx +1, newStr)
}
console.log(revString("porcupine"));
//given an object, return arr of all string values
const gatherStrings = (obj) => {
    let arr = [];
    for(let key in obj){
        if(typeof obj[key] === "string") arr.push(obj[key]);
        if(typeof obj[key] != "string") arr.push(...gatherStrings(obj[key]));
    }   return arr;
}
let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
        lastName: "Testowitz"
    },
    funFacts: {
        moreStuff: {
            anotherNumber: 100,
            deeplyNestedString: {
                almostThere: {
                    success: "you made it!"
                }
            }
        },
    favoriteString: "nice!"
    }
};
console.log(gatherStrings(nestedObj));
//given sortedArr and a value return idx of that val or -1 if not present
const binarySearch = (arr,val, left =0, right =arr.length) => {
    if(left > right) return -1;

    let mid = Math.floor((right+left)/2);
    if(arr[mid] === val) return mid;
    if(arr[mid] > val) return binarySearch(arr, val, left, mid -1);
    return binarySearch(arr, val, right, mid +1);
    
}
console.log(binarySearch([1,2,3,4],1));
console.log(binarySearch([1,2,3,4],3));
console.log(binarySearch([1,2,3,4],5));