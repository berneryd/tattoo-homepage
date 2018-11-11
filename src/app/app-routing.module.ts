import { NgModule }             from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'home', component: InfoComponent },
  { path: '', component: InfoComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);