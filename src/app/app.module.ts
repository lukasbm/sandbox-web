import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MonacoEditorModule } from "ngx-monaco-editor";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { EditorComponent } from "./editor/editor.component";

@NgModule({
	declarations: [AppComponent, HeaderComponent, EditorComponent],
	imports: [
		BrowserModule,
		FormsModule,
		MonacoEditorModule.forRoot(),
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
