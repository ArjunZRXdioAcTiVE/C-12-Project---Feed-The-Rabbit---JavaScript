apple = createSprite (Math.round (random (75, 325)), 0)
apple.addImage (appleIMG);
apple.scale = 0.07;
apple.velocityY = 3;
apple.lifetime = 150;


if (apple.isTouching (rabbit) && frameCount % 77 == 0) {
    apple.visible = false;
  }

  if (leaf.isTouching (rabbit)) {
    leaf.visible = false;
  }