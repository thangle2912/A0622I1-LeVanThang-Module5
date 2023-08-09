import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility/facility';
import {FacilityType} from '../../model/facility/facility-type';
import {RentType} from '../../model/facility/rent-type';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility [];
  rentTypes: RentType[];
  facilityTypes: FacilityType[];
  facilityDelete: Facility;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityService.findAll().subscribe(next => {
      this.facilities = next;
    });
    this.facilityService.getFacilityTypes().subscribe(next => {
      this.facilityTypes = next;
    });
    this.facilityService.getRentTypes().subscribe(next => {
      this.rentTypes = next;
    });
  }

  getFacilityDelete(facility: Facility) {
    this.facilityDelete = facility;
  }

  deleteFacility() {
    this.facilityService.delete(this.facilityDelete.id).subscribe(next => {
    }, error => {
    }, () => {
      this.facilityService.findAll().subscribe(next => {
        this.facilities = next;
      });
    });
  }


}
