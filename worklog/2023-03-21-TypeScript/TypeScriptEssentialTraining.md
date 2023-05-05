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

# Q/A

## Q: What is the `+` operator
```return { id: resp.id }```
vs
```return { id: +resp.id }```
A: `+` Operator returns the numeric representation of the object

Check all Expressions and Operators here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Unary_plus_(.2B)

