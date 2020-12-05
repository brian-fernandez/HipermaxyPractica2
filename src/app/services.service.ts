import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  path = 'http://127.0.0.1/';
  idUsuario: string;
  items = [];
  accesToken: string;
  httpOptions: { headers: HttpHeaders };
  httpOptions2: { headers: HttpHeaders };
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    // this.accesToken = localStorage.getItem('access_token');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization':'Bearer '+ this.accesToken
      }),
    };
    return this.http.get(this.path + 'web/se/', this.httpOptions).pipe(
      tap((data: any) => {
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  login(correo, password): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    var datoaEnviar = 'correo=' + correo + '&password=' + password + '';
    return this.http
      .post(this.path + 'web/se/login.php', datoaEnviar, this.httpOptions)

      .pipe(
        tap((data: any) => {
          return of(data);
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  perfil(correo): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post(this.path + 'web/se/?email=' + correo + '', this.httpOptions)

      .pipe(
        tap((data: any) => {
          return of(data);
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  editarPerfil(
    id,
    nombre,
    apellido_paterno,
    apellido_materno,
    telefono,
    direccion,
    numdecasa
  ): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    // tslint:disable-next-line: max-line-length
    var datoaEnviar =
      'id=' +
      id +
      '&nombre=' +
      nombre +
      '&apellido_paterno=' +
      apellido_paterno +
      '&apellido_materno=' +
      apellido_materno +
      '&telefono=' +
      telefono +
      '&direccion=' +
      direccion +
      '&numdecasa=' +
      numdecasa +
      '';
    return this.http
      .post(this.path + 'web/se/actualizar.php', datoaEnviar, this.httpOptions)

      .pipe(
        tap((data: any) => {
          return of(data);
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }
  registrarUsuario(
    nombre,
    apellido_paterno,
    apellido_materno,
    correo,
    password,
    telefono,
    direccion,
    numdecasa
  ): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    // tslint:disable-next-line: max-line-length
    var datoaEnviar =
      'nombre=' +
      nombre +
      '&apellido_paterno=' +
      apellido_paterno +
      '&apellido_materno=' +
      apellido_materno +
      '&correo=' +
      correo +
      '&password=' +
      password +
      '&telefono=' +
      telefono +
      '&direccion=' +
      direccion +
      '&numdecasa=' +
      numdecasa +
      '';
    return this.http
      .post(this.path + 'web/se/registro.php', datoaEnviar, this.httpOptions)

      .pipe(
        tap((data: any) => {
          return of(data);
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
