import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MonacoEditorModule } from "ngx-monaco-editor";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { EditorComponent } from "./editor/editor.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [AppComponent, HeaderComponent, EditorComponent],
	imports: [BrowserModule, FormsModule, MonacoEditorModule.forRoot()],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
