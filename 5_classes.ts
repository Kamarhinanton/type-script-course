class Typescript {
  version: string

  constructor(version: string){
    this.version = version
  }

  info(name: string){
    return `[${name}]: typescript version is ${this.version}`
  }
}

class Car {
  readonly model: string
  readonly numberOfWheels: number = 4

  constructor(theModel: string){
    //readonly є можливість перзаписати у constructor, в інших методах ми не можемо цього зробити
    this.model = theModel
  }
}

//більш лаконічний запис

// class Car {
//   readonly numberOfWheels: number = 4
//   constructor(readonly model: string) {}
// }

//====================
//модифікатори protected, public, private
//public по замовчуванню

class Animal {
  //protected поля доступні в класі animal та тих які його наслідують
  protected voice: string = ''
  public color: string = 'black'
  //private доступні тільки там де вони визначені(тільки в Animal)
  private go () {
    console.log('go')
  }
}

class Cat extends Animal {
  public setVoice (voice: string):void{
    this.voice = voice
  }
}

const cat = new Cat()
//console.log(cat.voice) не можемо отримати до нього доступ в інстансі cat(та подібних) так як він protected

//абстрактні класи, для наслідуваності==========

abstract  class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render():void {
    console.log('Component on render')
  }
  info(): string {
    return "Return this info";
  }
}