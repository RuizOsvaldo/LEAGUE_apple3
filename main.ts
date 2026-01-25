namespace SpriteKind {
    export const BadFood = SpriteKind.create()
}

scene.setBackgroundColor(7)
let player = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
player.setStayInScreen(true)
info.setScore(0)
info.startCountdown(30)

let apple: Sprite = null
game.onUpdateInterval(1500, function () {
    apple = sprites.create(sprites.food.smallApple, SpriteKind.Food)
    apple.setPosition(randint(10, 150), randint(10, 110))
})

game.onUpdateInterval(4000, function () {
    let badApple = sprites.create(sprites.castle.skellyFront, SpriteKind.BadFood)
    badApple.setPosition(randint(10, 150), randint(10, 110))
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.BadFood, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    otherSprite.destroy()
    sprite.startEffect(effects.fire, 200)
})

info.onCountdownEnd(function () {
    game.splash("Time's up!", "You collected " + info.score() + " apples!")
    game.over(true, effects.confetti)
})