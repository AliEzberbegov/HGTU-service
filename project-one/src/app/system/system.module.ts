import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HeadComponent } from './shared/components/head/head.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';
import { MainComponent } from './main/main.component';
import { SwiperModule } from "swiper/angular";
import { HistoryComponent } from './history/history.component';
import { CongressComponent } from './congress/congress.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    SystemComponent,
    HeadComponent,
    FooterComponent,
    ScrollTopComponent,
    MainComponent,
    MainComponent,
    HistoryComponent,
    CongressComponent,
    ContactComponent,
  ],
  imports: [
    SystemRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    SwiperModule
  ],
  bootstrap: [SystemComponent]
})
export class SystemModule { }
