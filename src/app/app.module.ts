import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MonacoEditorModule } from "ngx-monaco-editor";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [BrowserModule, MonacoEditorModule.forRoot()],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
