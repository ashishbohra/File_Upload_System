import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Home/app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatNativeDateModule} from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';

import { FileUploadComponent } from './file-upload/file-upload.component';
import { SharePreferencesDetailsComponent } from './share-preferences-details/share-preferences-details.component';
import { MailPreferenceComponent } from './mail-preference/mail-preference.component';


import {DocumentManagerService} from '../services/document-manager.service';


const MaterialComponents=[
  MatButtonModule,MatIconModule,MatNativeDateModule,MatProgressBarModule,
  MatRadioModule,MatSlideToggleModule,MatInputModule
]
@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    SharePreferencesDetailsComponent,
    MailPreferenceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialComponents,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule

  ],
  exports:[
    MaterialComponents
  ],
  providers: [
    { provide: 'DocumentManagerService', useClass: DocumentManagerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
