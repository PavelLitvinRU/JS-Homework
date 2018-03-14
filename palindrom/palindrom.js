function isPalindrome(s) {
    s=s.replace(/\W+/g,'').toLowerCase();return s==s.split('').reverse().join(''); // 77символов
  }

console.log(isPalindrome("level")); // logs 'true'
console.log(isPalindrome("levels")); // logs 'false'
console.log(isPalindrome("A car, a man, a maraca")); // logs 'true'