
Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "Talis Dice - Flowers", name: "Talis Dice - Flowers" }, "default");
 
  dice3d.addTexture("flower", {
    name: "Flower 1",
    composite: "multiply",
    source: "modules/talisdice-flower/graphics/dice/PriscillaFlowerBaW.webp",
	bump: "modules/talisdice-flower/graphics/dice/PriscillaFlowerBaW.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Flower 1',
        description: "Flower 1",
        category: "Talis Dice - Flowers",
        background: "#ffffff",
		foreground: '#ffffff',
		outline: '#43014b',
        edge: '#ffffff',
		texture: 'flower',
		material: 'chrome',
		font: 'Courier',
      },"default");
    });


  dice3d.addTexture("flower2", {
    name: "Flower 2",
    composite: "multiply",
    source: "modules/talisdice-flower/graphics/dice/PriscillaFlower2.webp",
	bump: "modules/talisdice-flower/graphics/dice/PriscillaFlower2.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Flower 2',
        description: "Flower 2",
        category: "Talis Dice - Flowers",
        background: "#ffffff",
		foreground: '#ffffff',
		outline: '#43014b',
        edge: '#ffffff',
		texture: 'flower2',
		material: 'chrome',
		font: 'Courier',
      },"default");
    });
	
  dice3d.addTexture("flower3", {
    name: "Flower 3",
    composite: "multiply",
    source: "modules/talisdice-flower/graphics/dice/PriscillaFlower3.webp",
	bump: "modules/talisdice-flower/graphics/dice/PriscillaFlower3.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Flower 3',
        description: "Flower 3",
        category: "Talis Dice - Flowers",
        background: "#ffffff",
		foreground: '#ffffff',
		outline: '#43014b',
        edge: '#ffffff',
		texture: 'flower3',
		material: 'chrome',
		font: 'Courier',
      },"default");
    });
	
});