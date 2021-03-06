// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020102020202020202010101010102020201020202020202020202020202020202010202020102020202020201010102020202020201020202020202020201010101010202010101020202020202020202020202020102020202020202010202020201010101020202020202020102020202020202010202020202010101010102020202020102010102020201020201010101020201020202020202010202020202020202010202020202020102020202020202020202020202020202020101020201020202010101020202020201020202010202020202020202010101010202020101010101020202020202020202020201020202020202`, img`
. . . . . . . . 2 . . . . . . . 
2 2 2 2 2 . . . 2 . . . . . . . 
. . . . . . . . 2 . . . 2 . . . 
. . . 2 2 2 . . . . . . 2 . . . 
. . . . . 2 2 2 2 2 . . 2 2 2 . 
. . . . . . . . . . . . 2 . . . 
. . . . 2 . . . . 2 2 2 2 . . . 
. . . . 2 . . . . . . . 2 . . . 
. . 2 2 2 2 2 . . . . . 2 . 2 2 
. . . 2 . . 2 2 2 2 . . 2 . . . 
. . . 2 . . . . . . . . 2 . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . 2 2 . . 2 . . . 2 2 2 
. . . . . 2 . . . 2 . . . . . . 
. . 2 2 2 2 . . . 2 2 2 2 2 . . 
. . . . . . . . . 2 . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileDarkGrass3], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
