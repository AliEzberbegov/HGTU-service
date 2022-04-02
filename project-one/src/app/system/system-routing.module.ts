import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HistoryComponent } from "./history/history.component";
import { CongressComponent } from "./congress/congress.component";
import { ContactComponent } from "./contact/contact.component";
import { SystemComponent } from './system.component';

const routes: Routes = [
  {
    path: '', component: SystemComponent, children: [
      { path: '', component: MainComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'congress', component: CongressComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
