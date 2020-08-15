import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()

export class HttpRequestInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // // console.log(request)
      const token = "Bearer "+localStorage.getItem('token'); 


      // let handle : Observable<HttpEvent<any>> = null
      // request = request.clone({
      //   setHeaders:{
      //     Authorization:token
      //   }
      // });

      // handle = next.handle(request)

      // return handle.pipe(
      //   catchError(err=>{
      //     localStorage.removeItem('token');

      //     throw err;
      //   })
      // )


      if(token){
 
        const cloned = request.clone({
          headers:request.headers.set("Authorization",token)
        });
        // // console.log(cloned)
        
        return next.handle(cloned)
      }else{
        
        return next.handle(request)      
      }
    }
}