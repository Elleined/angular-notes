# angular-notes
Notes for Angular

# Pre-requisites
- JS Fundamentals
- Typescript

# What is Angular
- Cross platform, Flexible development, production ready fast and performant.
- UI framework created by google
- A component based framework for building scalable web applications.
- Collection of well integrated libraries that cover wide variety of features.
- Helps you build, develop, test, and update your code.
- Uses MVVC architecture.
- Heirarchial dependence implementated using an infusion system declaration, constructors function, and providers.

## Angular Binding
- () used for event binding
- [] used for property binding
- [()] used for two way data binding
- {{}} used for interpolation from ts/ js to html file

# Data Binding
## Interpolation {{}}
- After you pass the data from ts to html angular will read the variable and display it as a string
- Mainly use for directly displaying value directly in html element text.
```
<p>Hello There, {{currentUser}}</p>
```
## Property Binding []
- Angular will read it directly from ts file preserving its data type
- Mainly used for changing the html element property value.
```
<img [src] = "variableName" />
```

## Event Binding ()
- Used to listen from anything you do in website
```
<button (event) = "functionNameFromTsFile()"> </button>
```
## 2 Way Data Binding [{}]
- Used to have a websocket like featured where html(view) and ts(model) file always are synchronize.
- Combination of all interpolation, property binding, and event binding.
```
<input type="text" [(ngModel)]="name">
<p>Hello, {{name}}!</p>
```

# Angular Directives

## Structural Directives
Structural directives alter the layout of the DOM by adding or removing elements.
Examples include:
- `*ngFor`: Iterates over a collection and instantiates a template once for each item.
- `*ngIf`: Conditionally includes or excludes a section of HTML based on an expression.

## Attribute Directives
Attribute directives change the appearance or behavior of an element, component, or another directive.
Examples include:
- `ngClass`: Adds or removes CSS classes dynamically based on certain conditions.
- `ngStyle`: Sets inline styles dynamically based on expressions.

## Component Directives
Component directives are used to create reusable components with their own view and behavior.
They encapsulate a part of the UI and its logic. @Component

## AngularJS is the version 1
## Angular now is the version 2 and the latest version 

# Difference between Frameworks and Libraries
## Framework
- Contains set of libraries and also extensible.
  
## Library
- Performs specific operation
- You can combine libraries to build your own app.

# Module
- With annotation of @NgModule
- Can have many components, pipes, derivatives and service.

# Component
- With annotation of @Component
- Set of HTML, CSS, and JavaScript separating each concern.
- Can have only one module.
- Is consist of Views, Template, Derivatives, and Components

## Structure
<component-name>.component.html (Views)
- Contains the HTML elements

<component-name>.component.spec.ts or js (Services)
- Contains the unit test of your component

<component-name>.component.ts or js
- Contains the js or ts code for your component logic

<component-name>.component.css (Metadata)
- Contains the css styles

<component-name>.routes.ts
- Contains the component routes/ navigation to other components

## Benefits of Components
- Separates html, css, and javascript files but works together
- Seamless in browser navigation
- Web component based is balanced

## How to use Component
- the `selector` attribute of your component defines how to use it. It can be used as custom HTML element by default and class attribute value instead just add . in selector.

## Create a component
```
ng g c <component-name>
```

## Template
- Is a HTML Snippet(1 - 3 lines of code) that tells angular how render the Component in Angular application.
- Is immediately associated with component and defines the component's template.
- Can only have 1 component

## Views
- Is a HTML Block (4-infinity lines of code) that tells angular how to render Component.
- Is immediately associated with component and defines the component's view.
- Can be used in multiple Component

### Difference of View and Template
- Basically View is your main UI for your component
- Template is the HTML Reusable Snippets that you use multiples times in a multiple view.

# How start an angular project
- Install the LTS version of node.
- Install angular cli
```
npm install -g @angular/cli
```
- Create new project
```
ng new <project-name>
```
- Go to created project folder
```
cd <project-name>
```
- Add Angular material
```
ng add @angular/material
```
- Run the project
```
ng serve
```

# Typescript
- Strongly typed languange
- Created and maintained by Microsoft
- Superset of JavaScript
## Datatypes
1. string
2. number
3. boolean
4. array
5. enum
6. tuple
7. any
8. void
9. never
