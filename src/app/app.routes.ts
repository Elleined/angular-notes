import { Routes } from '@angular/router';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { MyothercomponentComponent } from './myothercomponent/myothercomponent.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: "myComponentPath",
        title: "",
        component: MycomponentComponent
    },
    {
        path: "myOtherComponentPath",
        title: "",
        component: MyothercomponentComponent
    }
];
