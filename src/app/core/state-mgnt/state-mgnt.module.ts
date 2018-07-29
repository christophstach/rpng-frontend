import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule, STORAGE_ENGINE } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';
import { UniversalCompatibleLocalStorageEngine } from './engines/universal-compatible-local-storage.engine';
import { AppState } from './states/app.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([AppState]),
    NgxsStoragePluginModule.forRoot({key: ['auth']}),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [

    {
      provide: STORAGE_ENGINE,
      useClass: UniversalCompatibleLocalStorageEngine
    }
  ]
})
export class StateMgntModule {
}
