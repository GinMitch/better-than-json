import { RequestSize, RequestType } from './models/app.models';

export const requestTypes: RequestType[] = ['json', 'msgpack', 'protobuf'];

export const requestSizes: RequestSize[] = ['small', 'medium', 'large'];

export const requestsCount: Record<RequestSize, number> = { small: 100, medium: 50, large: 20 };
