import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.scss']
})
export class MissionfilterComponent {
  launchYear: string = '';

  @Output() yearSelected = new EventEmitter<string>();

  onYearChange() {
    this.yearSelected.emit(this.launchYear);
  }
}
