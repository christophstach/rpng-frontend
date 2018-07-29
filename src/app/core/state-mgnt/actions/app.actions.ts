export class StartLoading {
  static readonly type = '[App] StartLoading';

  constructor(public readonly id: string) {
  }
}

export class StopLoading {
  static readonly type = '[App] StopLoading';

  constructor(public readonly id: string) {
  }
}
