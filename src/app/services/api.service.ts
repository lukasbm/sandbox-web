import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	private base: string = environment.apiUrl.toString();

	constructor(private http: HttpClient) {}

	public getLanguages(): Observable<string[]> {
		return this.http.get<string[]>(`${this.base}/getLanguages`);
	}

	public executeCode(language: string, code: string): Observable<any> {
		return this.http.get(`${this.base}/executeCode`);
	}
}
