interface Rect{
  //readonly неможливо переназанчити
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

//обовʼязкові тільки id, size. Можна вказувати і встановлювати свої значення.
const rect1: Rect = {
  id: 'anton',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: 'dmytro',
  size: {
    width: 10,
    height: 60
  }
}

rect2.color = 'black';

const rect3 = {} as Rect;
//або
const rect4 = <Rect>{};

//==================
//наслідуваність інтерфейсів

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: 'myke',
  size: {
    width: 5,
    height: 6
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

//==================
interface IClock {
  time: Date
  setTime (date: Date): void
}

class Clock implements IClock {
  time: Date = new Date ()
  setTime(date: Date):void {
    this.time = date
  }
}

//==================
interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}