import { Component, Input } from '@angular/core';

/**
 * Generated class for the EventInfoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'event-info',
  templateUrl: 'event-info.html'
})
export class EventInfoComponent {
  @Input() event : any;

  constructor() {
  }
}
