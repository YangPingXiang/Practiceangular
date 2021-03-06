import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class F04003Service extends BaseService {
  constructor(protected httpClient: HttpClient) { super(httpClient); }
  dialogData: any;

  getUnitCode(baseUrl: string): Observable<any> {
    return this.postApiFor_NET(baseUrl);
  }

  getGroupCode(baseUrl: string): Observable<any> {
    return this.postApiFor_NET(baseUrl);
  }

  getEmployeeList(baseUrl: string, pageIndex: number, pageSize: number, formData: FormData): Observable<any> {
    let targetUrl = `${baseUrl}?page=${pageIndex + 1}&per_page=${pageSize}`;
    return this.formDataApiFor_NET(targetUrl, formData);
  }

  addOrEditSystemCodeSet(baseUrl: string, data: any): any {
    const formdata: FormData = new FormData();
    formdata.append('EMP_NO', data.EMP_NO);
    formdata.append('EMP_NAME', data.EMP_NAME);
    formdata.append('ON_JOB', data.ON_JOB);
    formdata.append('EMAIL', data.EMAIL);
    formdata.append('PROMOTION_UNIT', data.PROMOTION_UNIT);
    formdata.append('GROUP_NO', data.GROUP_NO);
    return this.saveOrEditMsgString(baseUrl, formdata);
  }

  getEmployeeRole(baseUrl: string): Observable<any> {
    return this.postApiFor_NET(baseUrl);
  }

  saveEmployeeRole(baseUrl: string, formData: FormData): Observable<any> {
    return this.formDataApiFor_NET(baseUrl, formData);
  }
}
