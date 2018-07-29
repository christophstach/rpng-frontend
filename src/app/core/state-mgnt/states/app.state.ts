import { Action, Selector, State, StateContext } from '@ngxs/store';
import { StartLoading, StopLoading } from '../actions/app.actions';

export interface AppStateModel {
  loading: string[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    loading: []
  }
})
export class AppState {
  @Selector()
  static loading(state: AppStateModel) {
    return state.loading.length > 0;
  }

  @Action(StartLoading)
  startLoading({patchState, getState}: StateContext<AppStateModel>, action: StartLoading) {
    const loading = [
      ...getState().loading,
      action.id
    ];

    patchState({loading});
  }

  @Action(StopLoading)
  stopLoading({patchState, getState}: StateContext<AppStateModel>, action: StopLoading) {
    const loading = [
      ...getState().loading.filter(id => id !== action.id)
    ];

    patchState({loading});
  }
}
