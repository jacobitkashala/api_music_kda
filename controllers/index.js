const welcom = require('./welcom');

// Album
const getAlbum = require('./album/get');
const getPodcast = require('./album/getPodCast');
const postAlbum = require('./album/create');
const getUserAlbum = require('./album/userAlbum');

// Songs
const getSong = require('./song/get');
const putSong = require('./song/find');
const postSong = require('./song/post');
const deleteSong = require('./song/delete');
const getSongPodcast = require('./song/getPodCast');
const getSongGroupByAlbums = require('./song/songByAlbums');

const getUserAlbumCountSong = require('./song/delete');
const getSongByIdAlbum = require('./song/getSongByIdAlbum');
// User
const Users = require('./user/get');
const findUserById = require('./user/findById');
const postUser = require('./user/create');
const postuserW = require('./user/postWin');
const deleteUser = require('./user/delete');
const updateUser = require('./user/update');

const authenticate = require('./user/authen');

const reporting = require('./reporting');

module.exports = {
  welcom,
  authenticate,

  putSong,
  getSong,
  postSong,
  deleteSong,
  getSongPodcast,
  getSongGroupByAlbums,
  getUserAlbumCountSong,

  reporting,

  getAlbum,
  postAlbum,
  getPodcast,
  getUserAlbum,

  Users,
  findUserById,
  postUser,
  deleteUser,
  updateUser,
  getSongByIdAlbum,
  postuserW
};
