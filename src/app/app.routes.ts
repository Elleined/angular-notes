import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './routing/first-component/first-component.component';
import { SecondComponentComponent } from './routing/second-component/second-component.component';
import { BindingComponent } from './binding/binding.component';
import { FormsComponent } from './forms/forms.component';
import { RoutingComponent } from './routing/routing.component';

export const routes: Routes = [
    {
        path: "firstComponent",
        title: "",
        component: FirstComponentComponent
    },
    {
        path: "secondComponent",
        title: "",
        component: SecondComponentComponent
    },
    {
        path: "bindings",
        title: "",
        component: BindingComponent
    },
    {
        path: "forms",
        title: "",
        component: FormsComponent
    },
    {
        path: "routings",
        title: "",
        component: RoutingComponent
    }
];
