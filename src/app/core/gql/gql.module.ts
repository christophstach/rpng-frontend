import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { Store } from '@ngxs/store';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { createApollo } from './factories/apollo.factory';
import { MessageService } from '../utility/services/message.service';

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
      deps: [HttpLink, Store, MessageService]
    },
  ]
})
export class GqlModule {
}
