// ---------------------------
// Define a new SpriteKind for bad apples
// ---------------------------
namespace SpriteKind {
    export const BadFood = SpriteKind.create()
}

// ---------------------------
// Create player and setup scene
// ---------------------------
let apple: Sprite = null
// Use a built-in hero sprite for player
let player2 = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
scene.setBackgroundColor(7)
controller.moveSprite(player2, 100, 100)
player2.setFlag(SpriteFlag.StayInScreen, true)

// ---------------------------
// Score and countdown
// ---------------------------
info.setScore(0)
info.startCountdown(30)

// ---------------------------
// Spawn regular apples every 1.5 seconds
// ---------------------------
game.onUpdateInterval(1500, function () {
    apple = sprites.create(sprites.food.smallApple, SpriteKind.Food)
    apple.setPosition(randint(10, 150), randint(10, 110))
})

// ---------------------------
// Spawn bad apples every 4 seconds
// ---------------------------
game.onUpdateInterval(4000, function () {
    let badApple = sprites.create(sprites.castle.skellyFront, SpriteKind.BadFood)
    badApple.setPosition(randint(10, 150), randint(10, 110))
})

// ---------------------------
// Collect apples
// ---------------------------
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (player, food) {
    info.changeScoreBy(1)
    food.destroy()
})

// ---------------------------
// Hit bad apple
// ---------------------------
sprites.onOverlap(SpriteKind.Player, SpriteKind.BadFood, function (player, badFood) {
    info.changeScoreBy(-1)                // lose a point
    badFood.destroy()                     // remove bad apple
    player.startEffect(effects.fire, 200) // visual feedback
})

// ---------------------------
// Countdown ends
// ---------------------------
info.onCountdownEnd(function () {
    game.splash("Time's up!", "You collected " + info.score() + " apples!")
    game.over(true, effects.confetti)
})


