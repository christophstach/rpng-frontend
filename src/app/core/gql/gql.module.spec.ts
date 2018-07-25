import { GqlModule } from './gql.module';

describe('GqlModule', () => {
  let gqlModule: GqlModule;

  beforeEach(() => {
    gqlModule = new GqlModule();
  });

  it('should create an instance', () => {
    expect(gqlModule).toBeTruthy();
  });
});
