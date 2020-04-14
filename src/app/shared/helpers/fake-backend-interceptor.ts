import { CardNumber } from 'src/app/shared/model/dashboard/card-number';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';

const cardNumberList: any[] = [
    { id: 1,  number: 1234 },
    { id: 2,  number: 6574 },
    { id: 3,  number: 34 },
    { id: 4,  number: 1035531 },
];

// array in local storage for registered users
const users = [
    {
        id: 1,
        email: 'moi@chezmoi.com',
        password: '123456',
        firstName: 'romain',
        lastName: 'web'
    }
];

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
                case url.endsWith('/api/login') && method === 'POST':
                    return login();
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

        //#region LOGIN
        function login() {
            const { email, password, rememberMe } = body;
            const user = users.find(x => x.email === email && x.password === password);
            if (!user) {
                return error('Email or password is incorrect');
            }
            return ok({
                id: user.id,
                username: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            })
        }
        //#endregion

        // helper functions

        // tslint:disable-next-line: no-shadowed-variable
        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return +urlParts[urlParts.length - 1];
        }
    }
}