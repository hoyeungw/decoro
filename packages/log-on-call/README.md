# @decoro/log-on-call

[![npm version][badge-npm-version]][url-npm]
[![npm download monthly][badge-npm-download-monthly]][url-npm]
[![npm download total][badge-npm-download-total]][url-npm]
[![npm dependents][badge-npm-dependents]][url-github]
[![npm license][badge-npm-license]][url-npm]
[![pp install size][badge-pp-install-size]][url-pp]
[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)
[badge-npm-version]: https://flat.badgen.net/npm/v/@decoro/log-on-call
[badge-npm-download-monthly]: https://flat.badgen.net/npm/dm/@decoro/log-on-call
[badge-npm-download-total]:https://flat.badgen.net/npm/dt/@decoro/log-on-call
[badge-npm-dependents]: https://flat.badgen.net/npm/dependents/@decoro/log-on-call
[badge-npm-license]: https://flat.badgen.net/npm/license/@decoro/log-on-call
[badge-pp-install-size]: https://flat.badgen.net/packagephobia/install/@decoro/log-on-call
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/decoro
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/decoro

[//]: <> (Link)
[url-npm]: https://npmjs.org/package/@decoro/log-on-call
[url-pp]: https://packagephobia.now.sh/result?p=@decoro/log-on-call
[url-github]: https://github.com/hoyeungw/decoro

##### Enums of signals

#### Install
```console
$ npm install @decoro/log-on-call
```

#### Usage
```js
import { LogOnCall } from '@decoro/log-on-call'

const logOnCall = LogOnCall('decorator:logger')

class Point {
  constructor(x, y) { this.x = x; this.y = y }

  @logOnCall
  get distance() { return Math.sqrt(this.x ** 2 + this.y ** 2) }
}

const p = new Point(3, 4)
p.distance |> console.log

// console outputs:
// > [decorator:logOnCall] 18:29:49.008 calling property Point.distance
// > 10

```

#### Meta
[LICENSE (MIT)](LICENSE)
