﻿import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from "./dashboard.component";
import { HeroDetailComponent } from "./hero-detail.component";

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);