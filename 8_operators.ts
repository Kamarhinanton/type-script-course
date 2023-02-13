interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age' // бо ми вказали тільки name або age, присвоєння іншого значення виклече помилку

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> //виключити 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta = 'name'
// u1 = '_id' помилка