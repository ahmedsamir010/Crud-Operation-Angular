import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTaskComponent } from './all/all-task/all-task.component';
import { SingleComponent } from './singleTask/single/single.component';
import { AllOperationComponent } from './all-operation/all-operation.component';
import { UpdateComponent } from './updateTask/update/update.component';


const routes: Routes = [
  { path: 'all', component: AllTaskComponent },
  { path: 'update/:id', component: UpdateComponent }, 
  { path: 'all/:username', component: AllTaskComponent },
  { path: 'single/:id', component: SingleComponent }, 
  { path: 'all-operation', component: AllOperationComponent },
  { path: '', redirectTo: '/all-operation', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
