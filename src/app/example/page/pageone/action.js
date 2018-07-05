// import fetch from 'isomorphic-fetch';

export function actionPageOne(data) {
  // data = {
  //   name: data.name,
  //   id: data.id,
  //   level: data.id
  // }
  return { type: 'FETCH_PAGE_SUCCESS', payload: data };

}