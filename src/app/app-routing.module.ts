import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { I18nDigitalComponent } from './i18n-digital/i18n-digital.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'i18n', component: I18nDigitalComponent },
  { path: 'formulario', component: FormularioComponent }
/*  { path: '', redirectTo: '/', pathMatch: 'full' }
*/
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
