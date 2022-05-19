const welcom = require('./welcom');

const getAlbum = require('./album/get');
const getPodcast = require('./album/getPodCast');
const postAlbum = require('./album/post');
const getUserAlbum =require('./album/userAlbum');

// Songs
const getSong = require('./song/get');
const putSong = require('./song/find');
const postSong = require('./song/post');
const deleteSong = require('./song/delete');
const getSongGroupByAlbums= require('./song/songByAlbums');

const  getUserAlbumCountSong= require('./song/delete');

const getUser = require('./user/get');
const putUser = require('./user/find');
const postUser = require('./user/post');
const postuserW = require('./user/postWin');
const deleteUser = require('./user/delete');

const authenticate = require('./user/authen');

module.exports = {
  welcom,
  authenticate,
  
  putSong,
  getSong,
  postSong,
  deleteSong,
  getSongGroupByAlbums,
  getUserAlbumCountSong,

  getAlbum,
  postAlbum,
  getPodcast,
  getUserAlbum,

  getUser,
  putUser,
  postUser,
  deleteUser,

  postuserW
};
