import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MonacoEditorModule } from "ngx-monaco-editor";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { EditorComponent } from "./editor/editor.component";

@NgModule({
	declarations: [AppComponent, HeaderComponent, EditorComponent],
	imports: [BrowserModule, MonacoEditorModule.forRoot()],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
