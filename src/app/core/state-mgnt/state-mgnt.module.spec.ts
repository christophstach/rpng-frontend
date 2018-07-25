import { StateMgntModule } from './state-mgnt.module';

describe('StateMgntModule', () => {
  let stateMgntModule: StateMgntModule;

  beforeEach(() => {
    stateMgntModule = new StateMgntModule();
  });

  it('should create an instance', () => {
    expect(stateMgntModule).toBeTruthy();
  });
});
