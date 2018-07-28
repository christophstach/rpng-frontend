export class RegisterRequest {
  static readonly type = '[Auth] Register Request';

  constructor(
    public readonly email: string,
    public readonly username: string,
    public readonly password: string,
    public readonly passwordRepeated: string,
    public readonly firstName?: string,
    public readonly lastName?: string
  ) {
  }
}

export class RegisterSuccess {
  static readonly type = '[Auth] Register Success';
}

export class RegisterFailure {
  static readonly type = '[Auth] Register Failure';

  constructor(public readonly error) {
  }
}

export class LoginRequest {
  static readonly type = '[Auth] Login Request';

  constructor(
    public readonly email: string,
    public readonly password: string
  ) {
  }
}

export class LoginSuccess {
  static readonly type = '[Auth] Login Success';
}

export class LoginFailure {
  static readonly type = '[Auth] Login Failure';

  constructor(public readonly error) {
  }
}

export class Logout {
  static readonly type = '[Auth] Logout';

  constructor() {
  }
}
