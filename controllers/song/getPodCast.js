const { Album, Songs } = require('../../models');

const AlbumsPodCasts = async (req, res) => {
  try {

    const  podCastByAlbum= await Album.findAll({
      attributes: [
        ['is_top', 'isTopAlbum'],
        ['url_image', 'urlImage'],
        ['title_album', 'titleAlbum']
      ],
      include: {
        model: Songs,
        attributes: [
          ['url_song', 'urlSong'],
          ['title_songs', 'titleSong']
        ]
      }, where: {
        contente_type: "Podcast"
      }
    });


    return res.status(200).send(podCastByAlbum);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = AlbumsPodCasts;
