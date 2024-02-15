import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

import { IRequestService } from '../models/app.models';
import * as Protobuf from '../models/protobuf/descriptors_pb';
import { DataFactory } from './data-factory';

@Injectable()
export class ProtobufRequestService implements IRequestService {
  private readonly path = '/api/protobuf/';

  constructor(@Inject(HttpClient) private readonly http: HttpClient) {
  }

  public small(): Observable<Protobuf.EntityRef.AsObject> {
    return this.http.request(
      new HttpRequest('GET', this.path + 'small', null, {
        headers: new HttpHeaders({ Accept: 'application/x-protobuf' }),
        responseType: 'arraybuffer',
      }),
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => Protobuf.EntityRef.deserializeBinary(r.body).toObject()),
    );
  }

  public medium(): Observable<Protobuf.AccountData.AsObject> {
    return this.http.request(
      new HttpRequest('GET', this.path + 'medium', null, {
        headers: new HttpHeaders({ Accept: 'application/x-protobuf' }),
        responseType: 'arraybuffer',
      }),
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => Protobuf.AccountData.deserializeBinary(r.body).toObject()),
    );
  }

  public large(): Observable<Protobuf.SubWrapper.AsObject> {
    return this.http.request(
      new HttpRequest('POST', this.path + 'large', DataFactory.largeObjectProtobuf().serializeBinary(), {
        headers: new HttpHeaders({ 'Content-Type': 'application/x-protobuf', Accept: 'application/x-protobuf' }),
        responseType: 'arraybuffer',
      }),
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => Protobuf.SubWrapper.deserializeBinary(r.body).toObject()),
    );
  }
}
