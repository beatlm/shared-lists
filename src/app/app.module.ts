import { AuthGuard } from './application/auth/auth.guard';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { CommonsModule } from './application/common/commons.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopModule } from './application/shop/shop.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [AppComponent],
  imports: [MatSliderModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatOptionModule,
    ShopModule,
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    AkitaNgRouterStoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    AngularFirestoreModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,//.forRoot(),

    
  ],
  providers: [
    AuthGuard
  //  {
  //    provide: NG_ENTITY_SERVICE_CONFIG,
  //    useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' },
  //  },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
