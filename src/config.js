const { MODE } = require("./blendMode.js");
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "https://hashlips/nft";

const layerConfigurations = [
  {
    growEditionSizeTo: 10, //this will have to adjust to accormodate the new total

    layersOrder: [
      { name: "Background", count: 5 },
      { name: "Eyeball" , count: 20 },
      { name: "Eye color" , count: 7},
      { name: "Iris" , count: 8 },
      { name: "Shine", count: 9 },
      { name: "Bottom lid" , count: 5 },
      { name: "Top lid", count: 5 },
      { name: "Eyeballz", count: 5 },
      
    ],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
