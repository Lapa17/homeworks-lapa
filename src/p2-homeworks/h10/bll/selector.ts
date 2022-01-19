import {LoadingType} from "./loadingReducer";
import {AppStoreType} from "./store";


export const selectLoading = (state: AppStoreType) => state.loading.isLoad;

export const selectTheme = (state: AppStoreType) => state.theme