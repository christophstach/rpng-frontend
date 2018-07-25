import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { Store } from '@ngxs/store';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { ToastrService } from 'ngx-toastr';
import { createApollo } from './factories/apollo.factory';

@NgModule({
  imports: [
    CommonModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, Store, ToastrService]
    },
  ]
})
export class GqlModule {
}
