import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { ClientListComponent } from './client-list/client-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ManageClientsComponent } from './manage-clients/manage-clients.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'client-list', component: ClientListComponent},
          { path: 'employee-list', component: EmployeeListComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
