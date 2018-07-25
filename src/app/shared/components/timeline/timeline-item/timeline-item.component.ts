import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent {
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = null;
  @Input() position: string;
  @Input() employer: string;
  @Input() location: string;
}
