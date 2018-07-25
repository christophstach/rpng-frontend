export class LoginRequest {
  static readonly type = '[Auth] LoginRequest';

  constructor(public readonly email: string, public readonly password) {

  }
}

export class LoginSuccess {
  static readonly type = '[Auth] LoginRequest Success';
}

export class LoginFailure {
  static readonly type = '[Auth] LoginRequest Failed';

  constructor(public error) {

  }
}

export class Logout {
  static readonly type = '[Auth] Logout';

  constructor() {

  }
}
