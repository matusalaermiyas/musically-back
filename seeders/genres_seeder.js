const { GenresModel } = require("../genres/genres_model");

const musicGenres = [
  "Pop",
  "Rock",
  "Hip Hop",
  "Jazz",
  "Classical",
  "R&B",
  "Country",
  "Electronic",
  "Reggae",
  "Blues",
  "Metal",
  "Soul",
  "Folk",
  "Punk",
  "Disco",
  "Funk",
  "Gospel",
  "Ska",
  "House",
  "Techno",
  "Trance",
  "Dubstep",
  "Indie",
  "Alternative",
  "Latin",
  "Salsa",
  "Reggaeton",
  "K-Pop",
  "Afrobeat",
  "Dancehall",
  "Grunge",
  "Opera",
  "Bluegrass",
  "Swing",
  "Synthpop",
  "Trap",
  "Drum and Bass",
  "Ambient",
  "New Age",
  "Chillout",
  "World",
  "Bollywood",
  "Celtic",
  "J-Pop",
  "EDM",
  "Hardcore",
  "Progressive Rock",
  "Industrial",
  "Emo",
  "Lo-fi",
];

async function seedGenres() {
  await GenresModel.deleteMany({});

  musicGenres.forEach(async (genre) => {
    await GenresModel.create({
      title: genre,
    });
  });
}

module.exports = {
  seedGenres,
};
