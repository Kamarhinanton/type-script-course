// commands for console:
// tsc 1-types.ts compiling to js
// node 1-types.js run js
// TypeScript не є динамічно типізований

// types (примітивні)
//boolean
const isFetching : boolean = true;
const isLoading: boolean = false;

// number
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

// string
const messsage: string = 'Hello TypeScript';

//Arrays
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const words: string[] = ['hello', 'TypeScript'];

// Tuple
const contact: [string, number] = ['anton', 12];

// Any
let variable: any = 42;
// можна переназначити тип
variable = 'anton'

// functions
// :void - функція нічого не вертає, або вказати тип який має вернутись
function sayMyName(name:string):void {
  console.log(name)
}
sayMyName('anton');

//Never
//функція яка постійно щось виконує або та яка вертає помилку і не закінчує своє виконання
function throwError(message: string): never{
  throw new Error(message)
}

function infinity():never {
  while (true){}
}

//власні типи які дозволяють створювати еліаси
//Type:
type Login = string;
const login_name:Login = 'anton';

type ID = string|number;
const id1: ID = 1234;
const id2: ID = 'anton';

//null, undefined
type someType = string | null | undefined




