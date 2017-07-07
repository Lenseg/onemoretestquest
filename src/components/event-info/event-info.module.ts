import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EventInfoComponent } from './event-info';

@NgModule({
  declarations: [
    EventInfoComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    EventInfoComponent
  ]
})
export class EventInfoComponentModule {}
