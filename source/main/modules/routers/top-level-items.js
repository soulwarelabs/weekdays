var items = {

  'music': [
    {
      id: 'the-beatles',
      title: 'The Beatles',
      description: 'A short test post about The Beatles'
    },
    {
      id: 'the-rolling-stones',
      title: 'The Rolling Stones',
      description: 'A short test post about The Rolling Stones'
    },
    {
      id: 'the-who',
      title: 'The Who',
      description: 'A short test post about The Who'
    }
  ]
};

module.exports = {

  get: function (threadId) {
    return items[threadId];
  },

  set: function (threadId, item) {
    return items[threadId] = item;
  }
};
