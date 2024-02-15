import { Observable } from 'rxjs';

export type RequestType = 'json';

export type RequestSize = 'small' | 'medium' | 'large';

export type IRequestService = Record<RequestSize, () => Observable<unknown>>;

export type DemoState = ['empty', null] | ['pending', string] | ['done', string, any] | ['error', string];
