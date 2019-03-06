// import {delay} from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
// import axios from 'axios';
function hello() {


  return new Promise(function (resolve, reject) {

    fetch('https://randomuser.me/api/')
      .then(response=>   response.json())
      .then(json => resolve(json))



  // axios.get('https://randomuser.me/api/')
  // .then(response => resolve(response.data))
})
}

function* ageUpAsync() {


  const data = yield hello();
  console.log('data', data);

  yield put({ type: 'INC', value: data });

}


export function* watchAgeUp() {

  yield takeEvery('UP', ageUpAsync)

}
