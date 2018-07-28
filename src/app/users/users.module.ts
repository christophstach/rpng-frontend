import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from './states/users.state';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    NgxsModule.forFeature([UsersState])
  ],
  declarations: [UsersListComponent]
})
export class UsersModule {
}
