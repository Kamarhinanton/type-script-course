const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfString: Array<string> = ['hello', 'anton']

function reverse <T>(array: T[]): T[]{
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfString)