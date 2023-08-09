import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facility} from '../../model/facility/facility';
import {RentType} from '../../model/facility/rent-type';
import {FacilityType} from '../../model/facility/facility-type';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {ActivatedRoute, convertToParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  facilityTypes: FacilityType[];
  rentTypes: RentType[];
  rfFacility: FormGroup;
  facilityUpdate: Facility;
  id: number;

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');

    });
    this.facilityService.findById(this.id).subscribe(next => {
      this.facilityUpdate = next;
      console.log(this.facilityUpdate);
      this.rfFacility = new FormGroup({
        name: new FormControl(this.facilityUpdate.name, []),
        area: new FormControl(this.facilityUpdate.area, []),
        cost: new FormControl(this.facilityUpdate.cost, []),
        maxPeople: new FormControl(this.facilityUpdate.maxPeople, []),
        standardRoom: new FormControl(this.facilityUpdate.standardRoom, []),
        descriptionOtherConvenience: new FormControl(this.facilityUpdate.descriptionOtherConvenience, []),
        poolArea: new FormControl(this.facilityUpdate.poolArea, []),
        numberOfFloors: new FormControl(this.facilityUpdate.numberOfFloors, []),
        facilityFree: new FormControl(this.facilityUpdate.facilityFree, []),
        facilityType: new FormControl(this.facilityUpdate.facilityType, []),
        rentType: new FormControl(this.facilityUpdate.rentType, []),
      });
    });

    this.facilityService.getFacilityTypes().subscribe(next => {
      this.facilityTypes = next;
    });
    this.facilityService.getRentTypes().subscribe(next => {
      this.rentTypes = next;
    });
  }


  editFacility() {
    this.facilityService.update(this.id, {...this.rfFacility.value, id: this.id}).subscribe(next => {
      this.router.navigateByUrl('/facility');
    }, error => {
    }, () => {
    });
  }
}
