import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionService } from '../../services/mission.service';
import { Mission } from '../../models/mission.model';
import { Router, RouterModule } from '@angular/router';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MissionfilterComponent // ✅ Import the filter component
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private missionService: MissionService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllMissions();
  }

  loadAllMissions(): void {
    this.missionService.getAllMissions().subscribe((data: Mission[]) => {
      this.missions = data;
    });
  }

  filterMissionsByYear(year: string): void {
    if (year) {
      this.missionService.getMissionsByYear(year).subscribe((data: Mission[]) => {
        this.missions = data;
      });
    } else {
      this.loadAllMissions();
    }
  }

  viewDetails(flightNumber: number): void {
    this.router.navigate(['/mission', flightNumber]);
  }
}
