import { HttpInterceptorFn } from '@angular/common/http';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    const tokenRequest = req.clone({
      setHeaders:{
        Authorization: "bearer " + token
      }
    })
    return next(tokenRequest);
  }
  return next(req);
};
