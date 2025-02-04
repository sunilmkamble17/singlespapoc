import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Default route for settings microfrontend
];

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SettingsModule {}
