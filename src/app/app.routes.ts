import { Routes } from '@angular/router';
import { EstadoCocherasComponent } from './pages/estado-cocheras/estado-cocheras.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardContainerComponent } from './pages/dashboard-container/dashboard-container.component';
import { soloPublicoGuard } from './guards/solo-publico.guard';
import { soloAdminGuard } from './guards/solo-admin.guard';
import { soloLogueadoGuard } from './guards/solo-logueado.guard';
import { LoginPageComponent } from './pages/login/login-page.component';
import { AdminReporteComponent } from './pages/admin-reporte/admin-reporte.component';
import { AdminPreciosComponent } from './pages/admin-precios/admin-precios.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path: "estado-cocheras",
        component: DashboardContainerComponent,
        canActivate: [soloLogueadoGuard],
        children:[
            {
                path: "",
                component: EstadoCocherasComponent
            },
            {
                path: "reportes",
                component: AdminReporteComponent,
                canActivate: [soloAdminGuard]
            },
            {
                path: "precios",
                component: AdminPreciosComponent,
                canActivate: [soloAdminGuard]
            }
        ]
    },
    {
        path: "login",
        component: LoginPageComponent,
        canActivate: [soloPublicoGuard]
    },
    {
        path: "register",
        component: RegisterComponent,
        canActivate: [soloPublicoGuard]
    },
    {
        path: "not-found",
        component: NotFoundComponent
    },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
        
    },
    {
        path: "**",
        redirectTo: "not-found",
        pathMatch: "full"
    },
];