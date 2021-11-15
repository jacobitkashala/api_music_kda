const welcom = require('./welcom');
const postSongs = require('./song/post');
const getSongs = require('./song/get');
const putSong = require('./song/find');
const deleteSong = require('./song/delete');
module.exports = {
  welcom,
  putSong,
  getSongs,
  postSongs,
  deleteSong
};
