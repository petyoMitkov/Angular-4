import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { PlaygroundNgclassComponent } from './components/playground-ngclass/playground-ngclass.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ng-class', component: NgClassComponent },
    { path: 'ng-style', component: NgStyleComponent },
    { path: 'animatinos', component: AnimationsComponent },
    { path: 'playground', component: PlaygroundNgclassComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
