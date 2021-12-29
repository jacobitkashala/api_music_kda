const welcom = require('./welcom');


const getSong = require('./song/get');
const putSong = require('./song/find');
const postSong = require('./song/post');
const deleteSong = require('./song/delete');

const getUser = require('./user/get');
const putUser = require('./user/find');
const postUser = require('./user/post');
const deleteUser = require('./user/delete');

module.exports = {
  welcom,
  putSong,
  getSong,
  postSong,
  deleteSong,
  getUser,
  putUser,
  postUser,
  deleteUser 
};
