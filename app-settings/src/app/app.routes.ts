import { Routes } from '@angular/router';

import { PaymentBrandingComponent } from './components/payment-branding/payment-branding.component';
import { UsersComponent } from './components/users/users.component';
import { BusinessSettingsComponent } from './components/business-settings/business-settings.component';
import { ProcessingDetailsComponent } from './components/processing-details/processing-details.component';
import { NotificationDetailsComponent } from './components/notification-details/notification-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'config', pathMatch: 'full' },
    
    { path: 'config', component: PaymentBrandingComponent },
    { path: 'user', component: UsersComponent },
    { path: 'business-settings', component: BusinessSettingsComponent },
    { path: 'processing-details', component: ProcessingDetailsComponent },
    { path: 'notifications', component: NotificationDetailsComponent },

    { path: '**', redirectTo: 'config' }, // Default to config
];