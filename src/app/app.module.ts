import { CommonsModule } from './application/common/commons.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopModule } from './application/shop/shop.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [AppComponent],
  imports: [
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
    AkitaNgRouterStoreModule//.forRoot(),

    
  ],
  providers: [
  //  {
  //    provide: NG_ENTITY_SERVICE_CONFIG,
  //    useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' },
  //  },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
