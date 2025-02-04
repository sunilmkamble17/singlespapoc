import { Routes } from "@angular/router";
import { ViewProfileComponent } from "./components/view-profile/view-profile.component";
import { EditProfileComponent } from "./components/edit-profile/edit-profile.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";

export const routes: Routes = [
    { path: '', redirectTo: 'my-profile', pathMatch: 'full' },
    
    { path: 'my-profile', component: ViewProfileComponent },
    { path: 'edit-profile', component: EditProfileComponent },
    { path: 'change-password', component: ChangePasswordComponent },

    { path: '**', redirectTo: 'my-profile' }, // Default to config
];