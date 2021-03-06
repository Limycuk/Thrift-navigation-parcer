const axios = require('axios');

const parce = async (url) => {
  const response = await axios({
    url,
    method: 'get'
  });

  const html = response.data;

  const navTags = html
    .toString()
    .replace(/\s/g, '')
    .match(/<\s*nav[^>]*>(.*?)<\s*\/\s*nav>/g);

  let result = {
    positive: [],
    negative: []
  };

  if (navTags) {
    result.positive.push('Тег навигации присутствует');

    if (navTags[0].includes('<ul')) {
      result.positive.push('Список меню присутствует');
    } else {
      result.negative.push('Список меню отсутствует');
    }

    if (navTags[0].includes('<li')) {
      result.positive.push('Пункты меню присутствуют');
    } else {
      result.negative.push('Пункты меню отсутствуют');
    }

    if (navTags[0].includes('<a')) {
      result.positive.push('Ссылки в меню присутствуют');
    } else {
      result.negative.push('Ссылки в меню отсутствуют');
    }

    if (navTags[0].includes('aria-current="page"')) {
      result.positive.push('Aria тег текущей страницы присутвует');
    } else {
      result.negative.push('Aria тег текущей страницы отсутвует');
    }
  } else {
    result.negative.push('Навигация отсутствует');
  }

  return result;
};

module.exports = parce;
