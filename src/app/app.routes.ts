
 
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { 
    AboutComponent, 
    ProductoComponent,
    HomeComponent,
    ProtafolioComponent,
    AdultoComponent,
    TestComponent,
    PreguntasComponent


}  from './components/index.paginas';


const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'about', component: AboutComponent },
    { path: 'Tadulto', component: AdultoComponent },
    { path: 'Tadoles', component: TestComponent },
    { path: 'Tnino', component: PreguntasComponent },

    { path: '**', pathMatch: 'full', redirectTo:'home' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});

/* @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {} */




