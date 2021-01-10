import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTreeComponent } from './mat-tree/mat-tree.component';
import { AngularMaterialModule } from './mat-tree/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    MatTreeComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
