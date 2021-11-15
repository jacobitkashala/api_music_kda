const welcom = require('./welcom');
const postSongs = require('./chansons/post');
const getSongs = require('./chansons/get');
const putSong = require('./chansons/find');
const deleteSong = require('./chansons/delete');
module.exports = {
  welcom,
  postSongs,
  getSongs,
  putSong,
  deleteSong
};
