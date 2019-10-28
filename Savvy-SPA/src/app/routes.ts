import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DbsetupComponent } from './dbsetup/dbsetup.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'main', component: MainComponent },
            { path: 'favorites', component: FavoritesComponent },
            { path: 'dbsetup', component: DbsetupComponent }
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
