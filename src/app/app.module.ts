import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './shared/components/post/post.component';
import { MobileCompComponent } from './shared/components/mobile-comp/mobile-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MobileCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
