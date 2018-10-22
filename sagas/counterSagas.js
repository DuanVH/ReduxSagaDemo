import {DECREMENT, INCREMENT} from "../actions/actionTypes";

// Saga effects
import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
//takeEvery theo doi action nao do de call 1 action nao do

// Ham co dau * la ham cua redux saga
// Goi la 1 saga
export function* sayHello() {
    console.log('Hello world!');
}

function* increment() {
    console.log('This is increment saga');
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment);
}

function* decrement() {
    console.log('This is decrement saga');
}

export function* watchDecrement() {
    yield takeEvery(DECREMENT, decrement);
}
