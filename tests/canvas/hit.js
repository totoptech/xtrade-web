function drawSceneCircles() {
  circles.forEach(function(circle) {
    drawSceneCircle(circle);
  });
  viewport.render();
}

function drawHitCircles() {
  circles.forEach(function(circle) {
    drawHitCircle(circle);
  });
}

function drawSceneCircle(config) {
  var scene = config.layer.scene,
      context = scene.context;

  scene.clear();
  context.save();
  context.beginPath();
  context.arc(config.x, config.y, 60, 0, Math.PI*2, false);
  context.fillStyle = config.color;
  context.fill();

  if (config.selected) {
    context.strokeStyle = 'black';
    context.lineWidth = 6;
    context.stroke();
  }

  if (config.hovered) {
    context.strokeStyle = 'green';
    context.lineWidth = 2;
    context.stroke();
  }
  context.restore();
}

function drawHitCircle(config) {
  var hit = config.layer.hit,
      context = hit.context;

  hit.clear();
  context.save();
  context.beginPath();
  context.arc(config.x, config.y, 60, 0, Math.PI*2, false);
  context.fillStyle = hit.getColorFromIndex(config.key);
  context.fill();
  context.restore();
}

function getCircleFromKey(key) {
  var len = circles.length,
      n, circle;

  for (n=0; n<len; n++) {
    circle = circles[n];
    if (circle.key === key) {
      return circle;
    }
  }

  return null;
}

function getSelectedCircle() {
  var len = circles.length,
      n, circle;

  for (n=0; n<len; n++) {
    circle = circles[n];
    if (circle.selected) {
      return circle;
    }
  }

  return null;  
}

function destroyCircle(key) {
  var len = circles.length,
      n, circle;

  for (n=0; n<len; n++) {
    circle = circles[n];
    if (circle.key === key) {
      circles.splice(n, 1);
      drawSceneCircles();
      drawHitCircles();
      return true;
    }
  }

  return false;
}

var concreteContainer = document.getElementById('concreteContainer');

// create viewport
var viewport = new Concrete.Viewport({
  width: 400,
  height: 200,
  container: concreteContainer
});

// create layers
var layer1 = new Concrete.Layer();
var layer2 = new Concrete.Layer();
var layer3 = new Concrete.Layer();

// add layers
viewport.add(layer1).add(layer2).add(layer3);

// create a scene graph (you don't need a scene graph for Concrete, but in this
// example we will use one
var circles = [
  {
    x: viewport.width/2,
    y: viewport.height*2/3,
    hovered: false,
    selected: true,
    layer: layer1,
    color: 'red',
    key: 0
  },
  {
    x: viewport.width*2/5,
    y: viewport.height/3,
    hovered: false,
    selected: false,
    layer: layer2,
    color: 'yellow',
    key: 1
  },
  {
    x: viewport.width*3/5,
    y: viewport.height/3,
    hovered: false,
    selected: false,
    layer: layer3,
    color: 'orange',
    key: 2
  }
];

// draw circles onto hit canvases for mouse detection
drawHitCircles();

// draw visible circles
drawSceneCircles();

// add concrete container handlers
concreteContainer.addEventListener('mousemove', function(evt) {
  var boundingRect = concreteContainer.getBoundingClientRect(),
      x = evt.clientX - boundingRect.left,
      y = evt.clientY - boundingRect.top,
      key = viewport.getIntersection(x, y),
      circle;

  // unhover all circles
  circles.forEach(function(circle) {
    circle.hovered = false;
  });
  
  if (key >= 0) {
    circle = getCircleFromKey(key);
    circle.hovered = true;
  }

  drawSceneCircles();
});

concreteContainer.addEventListener('click', function(evt) {
  var boundingRect = concreteContainer.getBoundingClientRect(),
      x = evt.clientX - boundingRect.left,
      y = evt.clientY - boundingRect.top,
      key = viewport.getIntersection(x, y),
      circle;

  // unhover all circles
  circles.forEach(function(circle) {
    circle.selected = false;
  });
  
  if (key >= 0) {
    circle = getCircleFromKey(key);
    circle.selected = true;
  }

  drawSceneCircles();
});

// add button handlers
document.getElementById('moveUp').addEventListener('click', function() {
  var circle = getSelectedCircle();

  if (circle) {
    circle.layer.moveUp();
  }
  viewport.render();
});

document.getElementById('moveDown').addEventListener('click', function() {
  var circle = getSelectedCircle();

  if (circle) {
    circle.layer.moveDown();
  }
  viewport.render();
});

document.getElementById('moveToTop').addEventListener('click', function() {
  var circle = getSelectedCircle();

  if (circle) {
    circle.layer.moveToTop();
  }
  viewport.render();
});

document.getElementById('moveToBottom').addEventListener('click', function() {
  var circle = getSelectedCircle();

  if (circle) {
    circle.layer.moveToBottom();
  }
  viewport.render();
});

document.getElementById('destroy').addEventListener('click', function() {
  var circle = getSelectedCircle();

  if (circle) {
    circle.layer.destroy();
  }
  viewport.render();
});

document.getElementById('download').addEventListener('click', function() {
  viewport.scene.download({
    fileName: 'three-circles.png'
  });
});
