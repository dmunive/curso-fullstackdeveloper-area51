import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        const token = "ujm,daj848748487"

        console.log(req)

        const requestClone = req.clone({headers: req.headers.append("authorization", token)})

        return next.handle(requestClone)

    }
}