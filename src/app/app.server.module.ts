import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot([{ path: 'shell', component: AppShellComponent }]),
    FontAwesomeModule,
  ],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule {
}
