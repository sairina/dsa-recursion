/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (nums.length === i) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestLength = 0) {
  if (words.length === i) return longestLength;

  longestLength = Math.max(words[i].length, longestLength);
  return longest(words, i + 1, longestLength); //keep words to compare to .length
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let resultStr = '';

  function inner(str, i = 0) {
    if (str.length <= i) return;

    resultStr += str[i];
    inner(str, i + 2);
  }

  inner(str, 0);
  return resultStr;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === i) return -1;
  if (arr[i] === val) return i; //are there two base cases for this one?
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return '';
  let lastChar = str.slice(-1);
  return lastChar += revString(str.slice(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') strings.push(obj[key]);
    if (typeof obj[key] === 'object') strings.push(...gatherStrings(obj[key])); //what does ... do?
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
