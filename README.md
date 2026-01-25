# Apple Collector (Advanced)

## Introduction @unplugged
Welcome to **The LEAGUE's Apple Collector game (Advanced)**!  
In this version of the game, you'll build on the beginner and intermediate versions by adding a new challenge: **bad apples** that you must avoid. Collecting bad apples will **reduce your score**! You'll learn how to work with **multiple sprite kinds**, **different spawn timers**, and **positive vs negative scoring**.

## Step 1

First, let's set up the game world with a background color.

From the ``||scene:Scene||`` category, use ``||scene:set background color||`` and choose a color you like for your game.

```blocks
scene.setBackgroundColor(7)
```

## Step 2

Now create your player character.

From ``||sprites:Sprites||``, click and drag ``||sprites:set mySprite to sprite kind player||`` and rename it **myPlayer**.  
Set the kind to **Player** and choose an image from the **Gallery** image section.

```blocks
scene.setBackgroundColor(7)
let myPlayer = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
```

## Step 3

Make the player move with the controller buttons.

From ``||controller:Controller||``, use ``||controller:move sprite with buttons||``.  
Press the **+** sign and set both **VX** and **VY** to **100**.

```blocks
scene.setBackgroundColor(7)
let myPlayer = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
controller.moveSprite(myPlayer, 100, 100)
```

## Step 4

Keep the player inside the screen boundaries.

From ``||sprites:Sprites||``, use ``||sprites:set stay in screen||`` and turn it **ON**.

```blocks
scene.setBackgroundColor(7)
let myPlayer = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
controller.moveSprite(myPlayer, 100, 100)
myPlayer.setStayInScreen(true)
```

## Step 5

Initialize the score to keep track of points.

From ``||info:Info||``, use ``||info:set score to 0||`` so the game starts at zero.

```blocks
scene.setBackgroundColor(7)
let myPlayer = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
controller.moveSprite(myPlayer, 100, 100)
myPlayer.setStayInScreen(true)
info.setScore(0)
```

## Step 6

Add a countdown timer to limit the game time.

From ``||info:Info||``, use ``||info:start countdown||`` and set it to **30** seconds.

```blocks
scene.setBackgroundColor(7)
let myPlayer = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
controller.moveSprite(myPlayer, 100, 100)
myPlayer.setStayInScreen(true)
info.setScore(0)
info.startCountdown(30)
```

## Step 7

Now let's make **good apples** spawn automatically.

From ``||game:Game||``, drag out ``||game:on game update every||`` and set it to **2000** ms  
(meaning a good apple appears every 2 seconds).

~~~blocks
game.onUpdateInterval(2000, function () {

})
~~~

## Step 8

Inside the update interval, create a good apple sprite.

Choose ``||sprites:set mySprite to sprite of kind player||`` and:
- Rename it to **apple**
- Change the kind to **Food**
- Choose an apple image from the **Gallery**

~~~blocks
let apple: Sprite = null
game.onUpdateInterval(2000, function () {
    apple = sprites.create(sprites.food.smallApple, SpriteKind.Food)
})
~~~

## Step 9

Make each good apple appear at a random position.

From ``||sprites:Sprites||``, use ``||sprites:set mySprite position to x and y||``.  
For both x and y, use ``||math:pick random||``:
- x: random from **10** to **150**
- y: random from **10** to **110**

~~~blocks
let apple: Sprite = null
game.onUpdateInterval(2000, function () {
    apple = sprites.create(sprites.food.smallApple, SpriteKind.Food)
    apple.setPosition(randint(10, 150), randint(10, 110))
})
~~~

## Step 10

Now add **bad apples** that spawn less frequently.

From ``||game:Game||``, create another ``||game:on game update every||`` block.  
Set this one to **4000** ms so bad apples appear less often.

~~~blocks
game.onUpdateInterval(4000, function () {

})
~~~

## Step 11

Inside this new interval, create a bad apple sprite.

Choose ``||sprites:set mySprite to sprite of kind player||`` and:
- Rename it to **badApple**
- Change the kind to **BadFood**
- Choose a different image so it looks dangerous

~~~blocks
game.onUpdateInterval(4000, function () {
    let badApple = sprites.create(sprites.castle.skellyFront, SpriteKind.BadFood)
})
~~~

## Step 12

Position bad apples randomly, just like good apples.

Use ``||sprites:set mySprite position to x and y||`` with random values:
- x: **10** to **150**
- y: **10** to **110**

~~~blocks
game.onUpdateInterval(4000, function () {
    let badApple = spr
