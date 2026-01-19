# Advanced Apple Collector

## Introduction @unplugged
Welcome to Advanced Apple Collector! This game builds on the basic collector game by adding a new challenge: bad apples that you need to avoid! Collecting bad apples will cost you points. You'll learn how to create custom sprite kinds and manage multiple types of collectibles. Let's get started!

## Step 1

First, let's create a custom sprite kind for the bad apples.

At the **very top** of your workspace, add a ``||sprites:namespace||`` block. Inside it, create a new SpriteKind called **BadFood**.

```blocks
namespace SpriteKind {
    export const BadFood = SpriteKind.create()
}
```

## Step 2

Set up the game environment with a background color.

From ``||scene:Scene||``, use ``||scene:set background color||`` and choose your color.

```blocks
scene.setBackgroundColor(7)
```

## Step 3

Create the player character.

From ``||sprites:Sprites||``, ``||sprites:create a sprite||`` named **player** with kind **Player**. You can use the built-in `heroWalkFront1` sprite from the castle gallery.

```blocks
scene.setBackgroundColor(7)
let player = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
```

## Step 4

Add movement controls to the player.

From ``||controller:Controller||``, use ``||controller:move sprite with buttons||`` with speed **100** for both directions.

```blocks
scene.setBackgroundColor(7)
let player = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
```

## Step 5

Keep the player on screen.

From ``||sprites:Sprites||``, ``||sprites:set stay in screen||`` to **ON** for the player.

```blocks
scene.setBackgroundColor(7)
let player = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
player.setStayInScreen(true)
```

## Step 6

Initialize the score counter.

From ``||info:Info||``, ``||info:set score to 0||`` to start with zero points.

```blocks
scene.setBackgroundColor(7)
let player = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
player.setStayInScreen(true)
info.setScore(0)
```

## Step 7

Add a countdown timer for the game.

From ``||info:Info||``, ``||info:start countdown||`` and set it to **30** seconds.

```blocks
scene.setBackgroundColor(7)
let player = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
player.setStayInScreen(true)
info.setScore(0)
info.startCountdown(30)
```

## Step 8

Make good apples spawn automatically during gameplay.

From ``||game:Game||``, use ``||game:on game update every 1500 ms||`` to spawn apples every 1.5 seconds.

```blocks
let apple: Sprite = null
game.onUpdateInterval(1500, function () {
	
})
```

## Step 9

Inside the update interval, create good apple sprites.

``||sprites:Create a sprite||`` named **apple** with kind **Food** using the `smallApple` sprite from the food gallery.

```blocks
let apple: Sprite = null
game.onUpdateInterval(1500, function () {
    apple = sprites.create(sprites.food.smallApple, SpriteKind.Food)
})
```

## Step 10

Make each apple appear at a random location.

Use ``||sprites:set position||`` with ``||math:pick random||`` values:
- x: random from **10** to **150**
- y: random from **10** to **110**

```blocks
let apple: Sprite = null
game.onUpdateInterval(1500, function () {
    apple = sprites.create(sprites.food.smallApple, SpriteKind.Food)
    apple.setPosition(randint(10, 150), randint(10, 110))
})
```

## Step 11

Now add bad apples that spawn less frequently!

Create another ``||game:on game update every||`` block, but this time set it to **4000 ms** (4 seconds) so bad apples appear less often than good apples.

```blocks
game.onUpdateInterval(4000, function () {
	
})
```

## Step 12

Inside this new interval, create bad apple sprites.

``||sprites:Create a sprite||`` named **badApple** with kind **BadFood** (the custom kind you created earlier). Use the `skellyFront` sprite from the castle gallery.

```blocks
game.onUpdateInterval(4000, function () {
    let badApple = sprites.create(sprites.castle.skellyFront, SpriteKind.BadFood)
})
```

## Step 13

Position bad apples randomly, just like the good apples.

Use ``||sprites:set position||`` with random coordinates from **10 to 150** (x) and **10 to 110** (y).

```blocks
game.onUpdateInterval(4000, function () {
    let badApple = sprites.create(sprites.castle.skellyFront, SpriteKind.BadFood)
    badApple.setPosition(randint(10, 150), randint(10, 110))
})
```

## Step 14

Handle collecting good apples.

Use ``||sprites:on sprite overlaps||`` for **Player** and **Food**. When they overlap:
- ``||info:change score by 1||``
- ``||sprites:destroy||`` the food sprite

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
```

## Step 15

Handle touching bad apples (this is the new mechanic!).

Use ``||sprites:on sprite overlaps||`` for **Player** and **BadFood**. When they overlap:
- ``||info:change score by -1||`` (lose a point!)
- ``||sprites:destroy||`` the bad apple
- Add ``||sprites:start effect||`` with **fire** for **200** ms on the player to show visual feedback

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.BadFood, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    otherSprite.destroy()
    sprite.startEffect(effects.fire, 200)
})
```

## Step 16

Finally, end the game when the countdown finishes.

Use ``||info:on countdown end||`` and inside:
- ``||game:splash||`` "Time's up!"
- Use ``||text:join||`` to show "You collected " + ``||info:score||`` + " apples!"
- ``||game:game over||`` with **WIN** and **confetti** effect

```blocks
info.onCountdownEnd(function () {
    game.splash("Time's up!", "You collected " + info.score() + " apples!")
    game.over(true, effects.confetti)
})
```

## Conclusion @unplugged

Excellent work! You've created an advanced collector game with multiple object types and custom sprite kinds!

**New concepts you learned:**
- Creating custom SpriteKinds
- Managing multiple spawn timers
- Handling different types of collectibles
- Adding visual feedback with effects
- Negative scoring mechanics

**Try these challenges:**
- Add lives instead of negative points
- Create power-ups that give bonus points
- Make bad apples move around
- Add sound effects for good and bad apples
- Increase spawn rates as time runs out

Keep experimenting and have fun!


> Open this page at [https://ruizosvaldo.github.io/league_apple3/](https://ruizosvaldo.github.io/league_apple3/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/ruizosvaldo/league_apple3** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/ruizosvaldo/league_apple3** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
