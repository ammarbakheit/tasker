import { put, call } from 'redux-saga/effects';
import AuthRepository from '../Repository/AuthRepository';
import { getCurrentUserFailed, getCurrentUserSuccess, loginFailed, loginSuccess, logoutFailed, logoutSuccess } from './AuthSlice';

const authRepo = new AuthRepository();

export function* getCurrentUserSaga() {
    try {
        const response = yield call(() => authRepo.getCurrentUserService())
        console.log(response);
        if (response) {

            yield put(getCurrentUserSuccess(response))
        }
    } catch (e) {
        console.log(e);
        yield put(getCurrentUserFailed(e));
    }

}
export function* loginSaga(action) {
    const data = action.payload;

    try {
         yield call(() => authRepo.login(data))
        const res = yield call(() => authRepo.getCurrentUserService())
        yield put(getCurrentUserSuccess(res))
    } catch (e) {
        console.log(e);
    }


}

export function* logoutSaga() {
    try {
        const res = yield call(() => authRepo.logout());
        yield put(logoutSuccess());
    } catch (e) {
        yield put(logoutFailed(e));
    }
}