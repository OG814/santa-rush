scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Santa.vy = -100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false)
})
let Santa: Sprite = null
scene.setBackgroundColor(1)
Santa = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 . . . . . . . . . . . 
    . . . . 2 2 2 2 . . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 4 4 4 4 4 4 . . . . . . 
    . . . . 4 f 4 4 f 4 . . . . . . 
    . . . . 4 4 4 4 4 4 . . . . . . 
    . . . . 4 1 1 1 1 4 . . . . . . 
    . . . . 4 1 4 4 1 4 . . . . . . 
    . . . . 4 1 4 4 1 4 . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . 2 2 . 2 1 1 1 1 2 . 2 2 . . . 
    . . 2 2 2 f f f f 2 2 2 . . . . 
    . . . . f f 5 5 f f . . . . . . 
    `, SpriteKind.Player)
let myCorg = corgio.create(SpriteKind.Player)
myCorg.updateSprite()
myCorg.follow(Santa)
controller.moveSprite(Santa, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
Santa.ay = 350
scene.cameraFollowSprite(Santa)
