import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {NotificationServicesService} from './notification-services.service';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NotificationsComponent,
    

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [NotificationServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
