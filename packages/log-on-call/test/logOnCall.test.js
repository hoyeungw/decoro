import { ObjectCollection } from '@foba/object-string'
import { deco, delogger }   from '@spare/deco'
import { LogOnCall }        from '../src/logOnCall'

const logOnCall = LogOnCall('decorator:logOnCall')

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  @logOnCall
  get distance() { return Math.sqrt(this.x ** 2 + this.y ** 2) }

  @logOnCall
  horizontalMove(delta) { return this.x += delta }

  @logOnCall
  verticalMove(delta) { return this.y += delta }

  @logOnCall
  foo(anything) {return deco(anything)}

  toString() { return `(${ this.x },${ this.y })`}
}

const p = new Point(3, 4)
p.horizontalMove(3)
p.verticalMove(4)
p.distance |> console.log
p.foo(ObjectCollection.MilitaryRobots) |> delogger