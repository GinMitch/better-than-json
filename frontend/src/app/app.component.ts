import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, last, Observable, of, repeat } from 'rxjs';

import { requestsCount, requestSizes, requestTypes } from './constants';
import { DemoState, RequestSize, RequestType } from './models/app.models';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  providers: [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public readonly state$ = new BehaviorSubject<DemoState>(['empty', null]);

  public readonly requestTypes = requestTypes;
  public readonly requestSizes = requestSizes;
  public readonly requestConfig = new FormGroup({
    type: new FormControl<RequestType>('', { nonNullable: true }),
    size: new FormControl<RequestSize>('small', { nonNullable: true }),
  });

  constructor(
  ) {
  }

  public start(): void {
    const { type, size } = this.requestConfig.value;
    if (!type || !size) return;
    const count = requestsCount[size];

    this.state$.next(['pending', `Running ${ count } ${ size } ${ type } requests...`]);
    let timing = performance.now();

    const req = this.getMethod(type, size);
    req.pipe(repeat({ count: count, delay: 100 }), last()).subscribe({
      next: (value: any) => {
        timing = performance.now() - timing - ((count - 1) * 100);
        const [spentSec, spentMs] = [Math.floor(timing / 1000), timing % 1000];
        this.state$.next([
          'done',
          `${ count } ${ size } ${ type } requests done in ${ spentSec }s ${ spentMs.toFixed(2) }ms`,
          value,
        ]);
      },
      error: (err: any) => this.state$.next([
        'error',
        typeof err === 'string' ? err :
          typeof err.prototype?.toString === 'function' ? err.toString() :
            typeof err === 'object' && err !== null ? JSON.stringify(err) :
              'unknown',
      ]),
    });
  }

  private getMethod(type: RequestType, size: RequestSize): Observable<unknown> {
    switch (type) {
      default:
        return of({});
    }
  }
}
