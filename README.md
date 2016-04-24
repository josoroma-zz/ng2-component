# Angular 2 Walkthrough

## TypeScript Config

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules",
    "typings/main",
    "typings/main.d.ts"
  ]
}
```

## TypeScript Lint Config

 - atom ng2-component/tslint.json

## Typings Config

 - atom ng2-component/typings.json

## npm install

```
npm install
```

## Start App

### ES5 Transpilation and Maps

 - ng2-component/app/josoroma.app.component.js
 - ng2-component/app/josoroma.app.component.js.map

### Specs

 - ng2-component/app/josoroma.app.component.spec.js
 - ng2-component/app/josoroma.app.component.spec.js.map


```
npm start
```

## Test

 - http://localhost:9876/debug.html

```
npm test
```

## Components are self-describing

A component:

 - Knows how to interact with its host element.
 - knows how to render itself.
 - Configures dependency injection.
 - Has a well-defined public API of input and output properties.

Components are fundamental building blocks of Angular 2 applications:

 - They have well-defined inputs and outputs.
 - They have well-defined lifecycle.
 - They are self-describing.

Directives, and in particular components, are the most important part of Angular 2. They are the fundamental building blocks of Angular 2 applications. They are self-describing. They describe their public API, which is inputs and outputs. They describe their private API, which is lifecycle hooks, and how they interact with the host element.

Some components will depend on other components and services. The dependency injection module will provide those. It will construct the component tree, which is the core of any Angular 2 application.

Finally, property bindings and zones is what makes Angular 2 applications interactive.
