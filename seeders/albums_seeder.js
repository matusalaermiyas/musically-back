const { AlbumModel } = require("../albums/album_model");

const albumNames = [
  "1989",
  "Scorpion",
  "Lemonade",
  "Divide",
  "25",
  "My Beautiful Dark Twisted Fantasy",
  "After Hours",
  "ANTI",
  "24K Magic",
  "When We All Fall Asleep, Where Do We Go?",
  "Thank U, Next",
  "Hollywood's Bleeding",
  "Purpose",
  "The Fame Monster",
  "To Pimp a Butterfly",
  "The Eminem Show",
  "Illuminate",
  "Future Nostalgia",
  "Fine Line",
  "SOUR",
  "A Rush of Blood to the Head",
  "Night Visions",
  "Ctrl",
  "Astroworld",
  "Planet Her",
  "Montero",
  "Good News",
  "Born to Die",
  "Invasion of Privacy",
  "In the Lonely Hour",
  "Manic",
  "Eternal Atake",
  "DS2",
  "2014 Forest Hills Drive",
  "The Pinkprint",
  "American Teen",
  "Melodrama",
  "Love in the Future",
  "The Element of Freedom",
  "Songs About Jane",
  "Bangerz",
  "Camila",
  "Teenage Dream",
  "Rare",
  "Indigo",
  "Confessions",
  "Talk Dirty",
  "Mind of Mine",
  "Queen of the Clouds",
  "Nine Track Mind",
];

async function seedAlbums() {
  await AlbumModel.deleteMany({});

  albumNames.forEach(async (album) => {
    await AlbumModel.create({
      title: album,
    });
  });
}

module.exports = {
  seedAlbums,
};
