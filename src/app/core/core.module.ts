import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GqlModule } from './gql/gql.module';
import { StateMgntModule } from './state-mgnt/state-mgnt.module';
import { LayoutModule } from './layout/layout.module';
import { UtilityModule } from './utility/utility.module';
import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  imports: [
    CoreRoutingModule,
    SharedModule,
    StateMgntModule,
    GqlModule,
    LayoutModule,
    UtilityModule
  ],
  exports: [
    LayoutModule
  ]
})
export class CoreModule {
}
