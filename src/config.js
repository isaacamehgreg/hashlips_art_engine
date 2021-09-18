const { MODE } = require("./blendMode.js");
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "https://hashlips/nft";

const layerConfigurations = [
  {
    growEditionSizeTo: 20, //this will have to adjust to accormodate the new total

    layersOrder: [
      { name: "Background", count: 16 },
      { name: "Eyeball" , count: 18 },
      { name: "Eye color" , count: 12},
      { name: "Iris" , count: 28 },     
      { name: "Bottom lid" , count: 13},
      { name: "Top lid", count: 45 },
     
      
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
