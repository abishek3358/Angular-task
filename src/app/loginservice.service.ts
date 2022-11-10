import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private baseUrl = environment.apiUrl + '/auth/new'
  private _login = this.baseUrl + '/login'
  private _userDetail = this.baseUrl + '/user-details'
  private _getAlljobListing = environment.apiUrl + '/api/careers/search/inactive'
  private _createJob = environment.apiUrl + '/api/careers/create'
  private _cityUrl = environment.apiUrl + '/api/countryCities/get'
  private _getById = environment.apiUrl + '/api/careers/get'
  private _updateUrl = environment.apiUrl + '/api/careers/update'
  // Edit API: GET https://hastin-container.com/staging/api/careers/get/e135e807-5017-4fab-bed1-bd2e633eca24
  //https://hastin-container.com/staging/api/careers/search/active
 // https://hastin-container.com/staging/api/careers/create
 // https://hastin-container.com/staging/api/countryCities/get
  //https://hastin-container.com/staging/api/careers/get/e135e807-5017-4fab-bed1-bd2e633eca24
  //https://hastin-container.com/staging/api/careers/update

  constructor(
    private http: HttpClient
  ) { }

  loginForm(data: any) {
    return this.http.post<any>(this._login, data)
  }
  userData() {
    return this.http.get<any>(this._userDetail)
  }
  getToken() {
    return localStorage.getItem('data')
  }
  getJob(data: any){
    return this.http.put<any>(this._getAlljobListing , data)
  }
  createJob(data: any){
    return this.http.post<any>(this._createJob,data)
  }
  cityGet(){
    return this.http.get<any>(this._cityUrl)
  }
  getById(id:any){
    return this.http.get<any>(this._getById + '/'+ id)
  }
  updateUrl(data: any){
    return this.http.put<any>(this._updateUrl,data)
  }
}
