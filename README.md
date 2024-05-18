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

## AngularJS is the version 1
## Angular now is the version 2 and the latest version 

# Angular Component
- With annotation of @Component
- Set of HTML, CSS, and JavaScript separating each concern.
- Can have only one module.
- Is consist of Views, Template, Derivatives, and Components

## Angular Component Structure
<component-name>.component.html (Views)
- Contains the HTML elements

<component-name>.component.spec.ts or js (Test Service)
- Contains the unit test of your component

<component-name>.component.ts or js (Service)
- Contains the js or ts code for your component logic

<component-name>.component.css (Metadata)
- Contains the css styles

<component-name>.routes.ts (Routing)
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

# Template
- Is a HTML Snippet(1 - 3 lines of code) that tells angular how render the Component in Angular application.
- Is immediately associated with component and defines the component's template.
- Can only have 1 component

# Views
- Is a HTML Block (4-infinity lines of code) that tells angular how to render Component.
- Is immediately associated with component and defines the component's view.
- Can be used in multiple Component

## Difference of View and Template
- Basically View is your main UI for your component
- Template is the HTML Reusable Snippets that you use multiples times in a multiple views.

# Angular Binding
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
- import FormsModule
- Used to have a websocket like featured where html(view) and ts(model) file always are synchronize.
- Combination of all interpolation, property binding, and event binding.
```
<input type="text" [(ngModel)]="name">
<p>Hello, {{name}}!</p>
```

# Angular Directives
## Structural Directives
Structural directives alter the layout of the DOM by adding, changing, or removing elements.
Examples include:
- `*ngFor`: Iterates over a collection and instantiates a template once for each item.
- `*ngIf`: Conditionally includes or excludes a section of HTML based on an expression.
- `*ngSwitch`:
- `<ng-emplate> </ng-template>`:

###### Note: An html element can only have one and only one directive.

## Attribute Directives
Attribute directives change the appearance or behavior of an element, component, or another directive.
Examples include:
- `ngClass`: Adds or removes CSS classes dynamically based on certain conditions.
- `ngStyle`: Sets inline styles dynamically based on expressions.
- `ngModel`: Used for two wat data binding.
- `formControl`: Used to link input html element and ts variable.
- `formGroup`: Used to group form controls.
   - `formControlName=<form-control-name-from-ts-file>`: Same concept of form control but with different syntax.

## Component Directives
- Component directives are used to create reusable components with their own view and behavior.
They encapsulate a part of the UI and its logic. @Component

# Angular Dependency Injection
- Just like spring boot dependecy injection.

# Angular Services
- Can be anythind such as values, functions, or feature that are required by angular application.
- It is globally available by default.
## When to use services
- For businesss logic.
- Validations
- Distributing data between different components.
- To communicate with external services.
- Basically all the stuff for your application to meet business requirements.

## How to create a service 
```
ng g s <service-name>
```

# Angular Routing and Navigation
- Routing is just directing users to appropriate web page.
- Navigation is just users can do backward and forward history of web page.
- using routerLink=`"<component-name>"`

## Routing and Navigation Life Cycle
1. URL Redirects applied.
2. Match URL to Router State.
3. Process guards and resolvers.
4. Activate view using router-outlet.
5. Navigate, update browser location.

## How to use Angular Routing
[Angular Routing Sample](https://medium.com/@biplavmazumdar5/angular-17-routing-cc4a20cc4d8c)
1. Create the components
2. Go to app.routes.ts
```
export const routes: Routes = [
    {
        path: "myComponentPath", // This is what you will specify in routerLink
        title: "", // Optional add information about your routing
        component: MycomponentComponent // The component where you want to go
    },
    {
        path: "myOtherComponentPath", // This is what you will specify in routerLink
        title: "", // Optional add information about your routing
        component: MyothercomponentComponent // The component where you want to go
    }
];
```
3. Go to app.component.ts and add these imports to @Component
```
imports: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive],
```
4. Go to html file and add routerLink
```
<button routerLink="/myComponentPath">Go to other component</button>
<button routerLink="/myOtherComponentPath">Go to my other component</button>
```
5. DONT FORGET TO ADD THE <router-outlet></router-outlet> at the end of html file or else it will not work!!.
```
<router-outlet></router-outlet>
```

## Router Events
- NavigationStart
- RouterConfigLoadEnd
- NavigationEnd
- RouterConfigLoadStart
- NavigationError
- NavigationCancel

# Angular Forms
- Allow to manage data by sending inputs to the serv- er for processing


## Building Blocks
### Form Control
- Used to handle user input also validate and update.
### Form Group 
- Used to group form controls
### Control Value Accessor
- Used to create a link between form control instance and html element

## 2 Types of Forms
### Reactive Forms
#### Control Value Management
- Angular gives access to form control state and the value and can be change in template and component class.
- To gain access you have 2 choices either use Observable or in component class using the ``subscribe()`` method
### Templated Forms
![Screenshot from 2024-05-14 21-03-32](https://github.com/Elleined/angular-notes/assets/111877930/40c762c0-cdc8-4fae-b879-384445a0c76a)


# Important imports
- BrowserModule
- AppRoutingModule
- NgModule
- FormsModule

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

## Typescript naming conventions
https://ts.dev/style/

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


# [Tailwind Installation](https://tailwindcss.com/docs/installation)

# Flaticon Installation
1. Install [Flaticon Ui Icons](https://www.flaticon.com/uicons/interface-icons)
2. Install vs code extenstion
   - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

1. Install Flaticon
```
npm i @flaticon/flaticon-uicons
```
2. Always include these link in your every html file header
- Where the path is relative to your html file to the flaticon in node modules
```
<head>
  <link rel="stylesheet" type="text/css" href="../node_modules/&#64;flaticon/flaticon-uicons/css/all/all.css">
</head>
```

# Axios Installation
- [Axios Documentation](https://www.npmjs.com/package/axios)
1. Install axios
```
https://www.npmjs.com/package/axios
```
