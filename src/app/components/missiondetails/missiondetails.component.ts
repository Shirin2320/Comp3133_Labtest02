import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MissionService } from '../../services/mission.service';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissiondetailsComponent implements OnInit {
  mission: Mission | null = null;

  constructor(
    private route: ActivatedRoute,
    private missionService: MissionService
  ) {}

  ngOnInit(): void {
    const flightNumber = Number(this.route.snapshot.paramMap.get('id'));

    if (flightNumber) {
      this.missionService.getMissionByFlightNumber(flightNumber).subscribe((data) => {
        this.mission = data;
        console.log('Mission details:', data);
      });
    }
  }
}
