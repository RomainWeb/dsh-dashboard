import { CardNumber } from 'src/app/shared/model/dashboard/card-number';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';

const cardNumberList: any[] = [
    { id: 1,  number: 1234 },
    { id: 2,  number: 6574 },
    { id: 3,  number: 34 },
    { id: 4,  number: 9 },
]

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(2000))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.match(/\/card-number\/\d+$/) && method === 'GET':
                    return getCardNumberById();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions

        function getCardNumberById() {
            const user = cardNumberList.find(x => x.id === idFromUrl());
            return ok(user);
        }

        // helper functions

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return +urlParts[urlParts.length - 1];
        }
    }
}