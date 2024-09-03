const { ArtistsModel } = require("../artists/artists_model");

const fakeArtistsData = [
  "The Weeknd",
  "Post Malone",
  "Teddy Afro",
  "Alemayehu Hirpo",
];

async function seedArtists() {
  await ArtistsModel.deleteMany({});

  fakeArtistsData.forEach(async (artist) => {
    await ArtistsModel.create({
      name: artist,
    });
  });
}

module.exports = {
  seedArtists,
};
