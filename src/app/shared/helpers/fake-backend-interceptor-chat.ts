import { Chat } from './../model/chat/chat';
import { CardNumber } from 'src/app/shared/model/dashboard/card-number';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';
import * as faker from 'faker';

@Injectable()
export class FakeBackendInterceptorChat implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.match('/api/chat/messages') && method === 'GET':
                    return getMessagesList();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions

        function getMessagesList() {
          // Generate Datas with faker.js
            const getMessages: Chat[] = [];

            for(let i = 0; i < 15; i++) {
                const obj: Chat = {
                    id: faker.random.number(),
                    user: {
                        id: faker.random.number(),
                        username: faker.internet.userName(),
                        lastname: faker.name.lastName(),
                        firstname: faker.name.firstName(),
                        avatar: faker.internet.avatar()
                    },
                    lastDate: faker.date.past(1),
                    isRead: faker.random.boolean(),
                    unreadMessageCount: faker.random.number({ min: 0, max: 15, precision: 1 }),
                    lastMessage: faker.lorem.words()
                };

                getMessages.push(obj);
            }

            return ok(getMessages);
        }

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