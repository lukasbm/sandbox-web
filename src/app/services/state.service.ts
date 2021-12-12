import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class StateService {
	private languageSource = new BehaviorSubject("javascript");
	public currentLanguage = this.languageSource.asObservable();

	private codeSource = new BehaviorSubject("console.log('hello world')");
	public currentCode = this.codeSource.asObservable();

	constructor() {}

	public changeLanguage(value: string): void {
		this.languageSource.next(value);
	}

	public changeCode(value: string): void {
		this.codeSource.next(value);
	}
}
