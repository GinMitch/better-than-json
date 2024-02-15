import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

import { IRequestService } from '../models/app.models';
import * as Json from '../models/json/descriptors_json';
import { DataFactory } from './data-factory';

@Injectable()
export class JsonRequestService implements IRequestService {
  private readonly path = '/api/json/';

  constructor(@Inject(HttpClient) private readonly http: HttpClient) {
  }

  public small(): Observable<Json.EntityRef> {
    return this.http.request(
      new HttpRequest('GET', this.path + 'small', null, {
        headers: new HttpHeaders({ Accept: 'application/json' }),
      }),
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r.body as Json.EntityRef),
    );
  }

  public medium(): Observable<Json.AccountData> {
    return this.http.request(
      new HttpRequest('GET', this.path + 'medium', null, {
        headers: new HttpHeaders({ Accept: 'application/json' }),
      }),
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r.body as Json.AccountData),
    );
  }

  public large(): Observable<Json.SubWrapper> {
    return this.http.request(
      new HttpRequest('POST', this.path + 'large', DataFactory.largeObjectJson(), {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', Accept: 'application/json' }),
      }),
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r.body as Json.SubWrapper),
    );
  }
}
