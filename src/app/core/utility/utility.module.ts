import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';

export function getToken() {
  return '';
}

@NgModule({
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken
      }
    }),
  ],
  declarations: []
})
export class UtilityModule {
}
