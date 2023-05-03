import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from "src/app/body/clientes/clientes.component";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})

export class bdServices {
    private urlLocal = "http://localhost:8080/";
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    };
    constructor(private http: HttpClient) {}

    public getClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.urlLocal + "users");
    }

    public postClientes(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(this.urlLocal + "users",JSON.stringify(cliente),this.httpOptions).pipe(
        catchError((err) => {
            console.log("error caught");
            console.error(err);
            return throwError(err);
        })
        )
    }

    public deleteCliente(email: string): Observable<Cliente[]> {
        return this.http.delete<Cliente[]>(
            this.urlLocal + "users/" + email
        );
    }

    // public updateCliente(cliente: Cliente): Observable<Cliente[]> {
    //     return this.http.put<Cliente[]>(this.urlLocal + "users" + email)
    //     .subscribe(http => this.postId = data.id);
    // }
    public putClientes(cliente: Cliente): Observable<Cliente[]> {
        return this.http.put<Cliente[]>(
            this.urlLocal + cliente.email,
            cliente
        );
    }

    private handleError(error: any) {
        console.log(error);
        return throwError(error);
    }
}