export class GetUsersRequest {
  static readonly type = '[Users] GetUsers Request';

  constructor() {
  }
}

export class GetUsersSuccess {
  static readonly type = '[Users] GetUsers Success';
}

export class GetUsersFailure {
  static readonly type = '[Auth] GetUsers Failure';

  constructor(public readonly error) {
  }
}
