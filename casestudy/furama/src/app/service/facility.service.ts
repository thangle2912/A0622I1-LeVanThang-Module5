import {Injectable} from '@angular/core';
import {Facility} from '../model/facility/facility';
import {RentType} from '../model/facility/rent-type';
import {FacilityType} from '../model/facility/facility-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  APIFacilities = 'http://localhost:3000/facilities';
  APIRentTypes = ' http://localhost:3000/rentTypes';
  APIFacilityTypes = 'http://localhost:3000/facilityTypes';

  constructor(private httpClient: HttpClient) {
  }

  getRentTypes(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(this.APIRentTypes);
  }

  getFacilityTypes(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>(this.APIFacilityTypes);
  }

  findAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.APIFacilities);
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(`${this.APIFacilities}/${id}`);
  }

  save(facility: Facility): Observable<Facility> {
    return this.httpClient.post<Facility>(this.APIFacilities, facility);
  }

  update(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(this.APIFacilities + id, facility);
  }

  delete(id: number): Observable<Facility> {
    // @ts-ignore
    return this.httpClient.delete<Facility>(`${this.APIFacilities}/${id}`);
  }
}
