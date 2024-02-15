import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { decode, encode } from '@msgpack/msgpack';
import { filter, map, Observable } from 'rxjs';

import { IRequestService } from '../models/app.models';
import * as Msgpack from '../models/msgpack/descriptors_mp';
import { DataFactory } from './data-factory';

@Injectable()
export class MsgpackRequestService implements IRequestService {
  private readonly path = '/api/msgpack/';

  constructor(@Inject(HttpClient) private readonly http: HttpClient) {
  }

  public small(): Observable<Msgpack.EntityRef> {
    return this.http.request(
      new HttpRequest('GET', this.path + 'small', null, {
        headers: new HttpHeaders({ Accept: 'application/x-msgpack' }),
        responseType: 'arraybuffer',
      }),
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => decode(r.body) as Msgpack.EntityRef),
    );
  }

  public medium(): Observable<Msgpack.AccountData> {
    return this.http.request(
      new HttpRequest('GET', this.path + 'medium', null, {
        headers: new HttpHeaders({ Accept: 'application/x-msgpack' }),
        responseType: 'arraybuffer',
      }),
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => decode(r.body) as Msgpack.AccountData),
    );
  }

  public large(): Observable<Msgpack.SubWrapper> {
    return this.http.request(
      new HttpRequest('POST', this.path + 'large', encode(DataFactory.largeObjectMsgpack()), {
        headers: new HttpHeaders({ 'Content-Type': 'application/x-msgpack', Accept: 'application/x-msgpack' }),
        responseType: 'arraybuffer',
      }),
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => decode(r.body) as Msgpack.SubWrapper),
    );
  }
}
