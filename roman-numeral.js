function convertToRoman(num) {
    let roman = ['M','CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let result = ''
    for (let i = 0; i < roman.length; i++) {
      while (num >= numbers[i]) {
        result += roman[i]
        num -= numbers[i]
      }
    }
    return result
  }
  
  convertToRoman(36);