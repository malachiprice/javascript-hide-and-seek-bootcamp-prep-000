function getFirstSelector(selector) {
  var firstMatch = document.querySelector(selector);
  return firstMatch;
}

function nestedTarget() {
  var target = document.querySelector('div#nested div.target');
  return target;
}

function increaseRankBy(n) {
  var targets = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < targets.length; i++) {
    targets[i].innerHTML = (parseInt(targets[i].innerHTML) + n)
  }
  return targets;
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let deeper = node.children[0]

  while (deeper) {
    node = deeper
    deeper = node.children[0]
  }

  return node
}
