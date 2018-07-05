// import fetch from 'isomorphic-fetch';

export function actionHome(data) {
  // data = {
  //   name: data.name,
  //   id: data.id,
  //   level: data.id
  // }
  return { type: 'FETCH_HOME_SUCCESS', payload: data };

}