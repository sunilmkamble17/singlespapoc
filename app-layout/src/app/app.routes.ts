import { Routes } from '@angular/router';
import { authRoutes } from './module/public/auth.routes';
import { secureRoutes } from './module/secure/secure.routes';


export const routes: Routes = [
    
    // Secure Routes (Profile, Settings)
    {
        path: '',
        children: secureRoutes
    },
    
    // Public Routes (Login, Forgot Password, Change Password)
    {
        path: '',
        children: authRoutes
    },

];
