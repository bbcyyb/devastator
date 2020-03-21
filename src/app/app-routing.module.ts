import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes2: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: () =>
    import('./features/dashboard/dashboard.module').then(
      m => m.DashboardModule
    )
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

const routes: Routes = [
  {
    // default
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    // normal
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
        import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      /*
      // TODO: need to understand what the parameters below are used for.
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
      */
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
