import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule, STORAGE_ENGINE } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';
import { ScrollSpyService } from '../layout/services/scroll-spy.service';
import { UniversalCompatibleLocalStorageEngine } from './engines/universal-compatible-local-storage.engine';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([]),
    // NgxsStoragePluginModule.forRoot(),
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
