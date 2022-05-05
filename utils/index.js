const theNumberOfSongsInAnAlbum = (idAlbum, idAlbumAndNumberSongs) => {
  idAlbumAndNumberSongs.forEach((element) => {
    if (element.idAlbum === idAlbum) {
      return element.numberSong;
    }
  });

  return 0;
};
const songRefIdAlbums = (idAlbum, idAlbumAndNumberSongs) => {
  const song = { urlSong: '', titleSong: '' };
  idAlbumAndNumberSongs.forEach((element) => {
    if (parseInt(idAlbum) === parseInt(element.idAlbum)) {
		// console.log(element);
      song.urlSong = element.urlSong;
      song.titleSong = element.titleSong;
	  return song;
    //   console.log(song);
    }
  });
  
  return song;
};
module.exports = { theNumberOfSongsInAnAlbum, songRefIdAlbums };
