# Info
[TypeScript Essential Training](https://www.linkedin.com/learning/typescript-essential-training-14687057/learning-typescript?autoplay=true&u=2074018)

# Installation

```
brew install node npm
npm install typescript  # -g install globally
```

## Install per project - better isolation
```
npm install typescript --save-dev
```

# TypeScript
Static typed overset of Javascript

# TypeScript configuration file
tsconfig.json
```
{
  "include": ["src/**/*"]
}
```

# Missing definitions - when using non standard java libraries
https://github.com/DefinitelyTyped/DefinitelyTyped
https://npmjs.com
# Q/A

## Q: What is the `+` operator
```return { id: resp.id }```
vs
```return { id: +resp.id }```
A: `+` Operator returns the numeric representation of the object

Check all Expressions and Operators here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Unary_plus_(.2B)

## Q: any type is good in TypeScript
A: any type is an opposite of TypeScript, however it makes it possible to do assigments like:
```
let b: string[]
b = "Hello" as any
let a: any
a = "Hello"
a = 123
```
Don't bother checking the type for this variable. But it would be better to not using the any type.

## Q: Difference between `==` and `===`

## Q: String interpolation
A: String written in backtics will interpolate variables
```
let oo: string = "lelo"
let myvar: string = `Lala ${oo} lala`
```

# Modules

Loading 2 javascript files containing the same function name will lead to override of the method by the last load. When
using modules the functions stay isolated within their module memory and don't leak, which helps avoiding name collisions.

Browser will load modules when needed. We no longer have to wory about this.

## Typescript
Requires importing modules. Before we can import something we need to export it first
```
export function functionName(...
```
in other file
```
import { formatDate } from "./utils"
// or all
import from "./utils"
```

## d.ts file - type definition
example global.d.ts
```
declare global {
  /** some proper description */
  function formatData(date: Date): String //definition is enough
}
export {}
```

# Declaration merging
```
interface Customer {
    /** saves the customer somewhere */
    save(): void
}

class Customer {}

const customer = new Customer()
customer.save = function() {}

const myVar = window.MY_VAR  //should be in definitions
```

globals.d.ts
```
declare global {
  interface Window {
    /** my custom global variable */
    MY_VAR: string
  }
}
export {}
```
this helps you organize external globals used in your modules

## CommonJS
enable CommonJS syntax in your tsconfig:
```
compilerOptions:
  module: "CommonJS"
```
webpack, parcel