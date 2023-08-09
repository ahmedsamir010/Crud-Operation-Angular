import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateComponent } from './updateTask/update/update.component';
import { SingleComponent } from './singleTask/single/single.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AllTaskComponent } from './all/all-task/all-task.component';
import { AllOperationComponent } from './all-operation/all-operation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Add this for icons
import { MatCardModule } from '@angular/material/card'; // Add this for card styling
import { MatListModule } from '@angular/material/list';
import { UsernameDialogComponent } from './username-dialog/username-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskIdDialogComponent } from './task-id-dialog/task-id-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    SingleComponent,
    AllTaskComponent,
    AllOperationComponent,
    UsernameDialogComponent,
    TaskIdDialogComponent,
    UpdateDialogComponent,
    DeleteDialogComponent,
  ],
  imports:
   [BrowserModule,
    AppRoutingModule, 
     FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      MatIconModule, // Include MatIconModule
      MatCardModule, // Include MatCardModule
      MatListModule,
      MatDialogModule,
      MatSnackBarModule, // Make sure you've imported this module
    ], 
    

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
