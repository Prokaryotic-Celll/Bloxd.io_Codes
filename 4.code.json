{
  "Code Block Codes": [
    {
      "name": "HP & Shield Codes",
      "codes": [
        {
          "desc": "Set HP to 10000",
          "code": "api.setHealth(myId, 10000, undefined, true)"
        },
        {
          "desc": "Set Shield to 500000",
          "code": "api.setShieldAmount(myId, 500000)"
        }
      ]
    },
    {
      "name": "Custom Recipes",
      "codes": [
        {
          "desc": "Cornbread Recipe",
          "code": "api.editItemCraftingRecipes(myId, \"Cornbread\", [{requires: [{items: [\"Bread\"], amt:5}, {items: [\"Corn\"], amt:3}], produces: 1, station: \"Workbench\"}]);"
        }
      ]
    },
    {
      "name": "Particles",
      "codes": [
        {
          "desc": "Bubble Particles",
          "code": "let [x, y, z] = thisPos;\ny += 1;\napi.playParticleEffect({ dir1: [-1, -1, -1], dir2: [1, 1, 1], pos1: [x, y, z], pos2: [x+1, y+1, z+1], texture: \"bubble\", minLifeTime: 5, maxLifeTime: 5, minEmitPower: 2, maxEmitPower: 2, minSize: 0.25, maxSize: 0.35, manualEmitCount: 50, gravity: [0, -10, 0], colorGradients: [{ timeFraction: 0, minColor: [60, 60, 150, 1], maxColor: [200, 200, 255, 1] }], velocityGradients: [{ timeFraction: 0, factor: 1, factor2: 1 }], blendMode: 1 });"
        }
      ]
    }
  ],
  "World Codes": [
    {
      "name": "Set Area Codes",
      "codes": [
        {
          "desc": "Set Area as Dirt",
          "code": "p1 = [x,y,z];\np2 = [x,y,z];\napi.setBlockRect(p1,p2,\"Dirt\");"
        },
        {
          "desc": "Unbreakable Area (Activator)",
          "code": "p1 = [0,-50,0];\np2 = [-100,50,-100];\napi.setCantChangeBlockRect(myId, p1, p2);"
        }
      ]
    }
  ]
}
