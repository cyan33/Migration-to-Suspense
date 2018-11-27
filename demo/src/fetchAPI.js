import data from './data';

function isImage(url) {
  if (!url || typeof url === 'object') {
    return 1;
  }
  return (url.endsWith('jpg') || url.endsWith('jpeg')) ? 1.5 : 1;
}

function getDataFromQuery(query) {
  const queries = query.split('/').filter(query => !!query);
  let result = {...data};

  try {
    for (let i = 0; i < queries.length; i++) {
      result = result[queries[i]];
    }
  } catch(e) {
    console.error('Invalid query: ', query);
  }

  return result;
}

function getAdditionalDelay(url) {
  const difference = window.fastNetwork ? 100 : 600;
  const maxDelay = difference * 3;

  if (url.includes('album')) {
    return maxDelay - difference * parseInt(url.match(/[1-9]/)[0]);
  }
  return 0;
}

function fetchAPI(url) {
  const result = getDataFromQuery(url);
  const baseSpeed = window.fastNetwork ? 150 : 1500;
  let delay;

  delay = baseSpeed * isImage(result);
  delay += getAdditionalDelay(url);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, delay);
  });
}

export default fetchAPI;
