import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RentType} from '../../model/facility/rent-type';
import {FacilityType} from '../../model/facility/facility-type';
import {Facility} from '../../model/facility/facility';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  rentTypes: RentType[] ;
  facilityTypes: FacilityType[];
  facilityCreate: Facility;

  rfFacility: FormGroup;

  facility: Facility = {
    id: 1,
    name: 'string',
    area: 1,
    cost: 1,
    maxPeople: 1,
    standardRoom: 'string',
    descriptionOtherConvenience: 'string',
    poolArea: 1,
    numberOfFloors: 1,
    facilityFree: 'string',
    facilityType: {
      id: 1
    },
    rentType: {
      id: 1
    }
  };

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityService.getFacilityTypes().subscribe(next => {
      this.facilityTypes = next;
    });
    this.facilityService.getRentTypes().subscribe(next => {
      this.rentTypes = next;
    });
    this.rfFacility = new FormGroup({
      name: new FormControl('', []),
      area: new FormControl('', []),
      cost: new FormControl('', []),
      maxPeople: new FormControl('', []),
      standardRoom: new FormControl('', []),
      descriptionOtherConvenience: new FormControl('', []),
      poolArea: new FormControl('', []),
      numberOfFloors: new FormControl('', []),
      facilityFree: new FormControl('', []),
      facilityType: new FormControl('', []),
      rentType: new FormControl('', []),
    });
  }

  // tslint:disable-next-line:max-line-length
  addFacility() {
    this.facilityService.save(this.rfFacility.value).subscribe(next => {
      console.log(this.rfFacility.value);
      this.router.navigateByUrl('/facility');
    }, error => {
    }, () => {});
  }
}
