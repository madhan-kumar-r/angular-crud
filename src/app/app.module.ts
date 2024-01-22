import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { BroadbandPlansComponent } from './broadband-plans/broadband-plans.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { BusinessPlansComponent } from './business-plans/business-plans.component';
import { BusinessFormComponent } from './business-form/business-form.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'broadband-plans', component: BroadbandPlansComponent },
  { path: 'customer-data', component: CustomerDataComponent },
  { path: 'business-plans', component: BusinessPlansComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BroadbandPlansComponent,
    CustomerDataComponent,
    FormComponent,
    BusinessPlansComponent,
    BusinessFormComponent,
    DeleteDialogComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgxChartsModule,
  ],
  exports: [RouterModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
