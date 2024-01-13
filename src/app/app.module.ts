import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';
import { BroadbandPlansComponent } from './broadband-plans/broadband-plans.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { BusinessPlansComponent } from './business-plans/business-plans.component';
import { BusinessFormComponent } from './business-form/business-form.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
const routes: Routes = [
  { path: 'broadband-plans', component: BroadbandPlansComponent },
  { path: 'customer-data', component: CustomerDataComponent },
  { path: 'business-plans', component: BusinessPlansComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BroadbandPlansComponent,
    CustomerDataComponent,
    FormComponent,
    BusinessPlansComponent,
    BusinessFormComponent,
    DeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
