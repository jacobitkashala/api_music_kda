// const { Users, Album } = require('../../models');
const { Users, Album, Songs } = require('../../models');
// const { Op } = require('sequelize');

const getUser = async (req, res) => {
  const { uuid } = req.params;

  try {
    const idUser = await Users.findOne({
      attributes: [['id', 'id']],
      where: { id_user: uuid }
    });

    const user = await Users.findOne({
      attributes: [
        ['id', 'idUser'],
        ['name_user', 'name'],
        ['telephone_user', 'numberPhone'],
        ['role_user', 'role'],
        ['sex_user', 'sexe'],
        ['etat_user', 'state'],
        ['email_user', 'email']
      ],
      include: {
        model: Album,
        attributes: [
          ['id_album', 'idAlbum'],
          ['contente_type', 'contenteType'],
          ['title_album', 'titleAlbum'],
          ['is_top', 'isTop'],
          ['etat_album', 'stateAlbum']
        ]
      },
      where: { id_user: uuid }
    });

    const Albums = await Album.findAll({
      attributes: [
        //   ['is_top', 'isTopAlbum'],
        //   ['url_image', 'urlImage'],
        //   ['title_album', 'titleAlbum']
      ],
      include: {
        model: Songs,
        attributes: [
          ['url_song', 'urlSong'],
          ['title_songs', 'titleSong']
        ]
      },
      where: {
        id_user: idUser.id
      }
    });

    // Project.findAll({
    //   where: {
    //     name: 'Some Project',
    //     [Op.not]: [
    //       { id: [1,2,3] },
    //       {
    //         description: {
    //           [Op.like]: 'Hello%'
    //         }
    //       }
    //     ]
    //   }
    // });
    // const { Albums } = await Users.findOne({
    //   attributes: [],
    //   include: {
    //     model: Album,
    //     attributes: [['id', 'id']]
    //   },
    //   where: { id_user: uuid }
    // });

    // const songs = await Songs.findAll({
    //   attributes: [
    //     ['title_songs', 'titleSong'],
    //     ['type_son', 'typeSong'],
    //   ],
    //   where: {
    //     [Op.not]: [{ id_album: [...Albums] }]
    //   }
    //   // , where: {  "": "oko tika ngai te",
    //   //   contente_type: {
    //   //     [Op.ne]: [ "Podcast"]}
    //   // }
    // });
    // console.log(songByAlbums)
    return res.status(200).send({ Albums, user });
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getUser;
