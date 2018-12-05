import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { NewProjectComponent } from './new-project/new-project.component';

const routes: Routes = [
  // {path: 'projects', component: ProjectListComponent},
  // {path: 'project-view', component: ProjectViewComponent},
  // {path: 'new-project', component: NewProjectComponent}
  {
    path: '',
    children: [
      {
        path: '',
        children: [
          {path: 'new-project', component: NewProjectComponent},
          { path: ':id', component: ProjectViewComponent},
          { path: '', component: ProjectListComponent }
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
