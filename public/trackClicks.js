document.addEventListener("click", function(e) {
  console.log(getClickInfo(e.target));
  //console.log(findParentNode(e.target,['A','BUTTON']).textContent);
});

function getClickInfo(eventTarget) {
  var clickType =
    "ontouchstart" in document.documentElement ? "touchDevice" : "mouseClick";
  var l = findAnchorLink(eventTarget);
  var isLink = l.href && l.href != null && !l.href.includes("#") ? true : false;
  var elemList = {
    A: ["textContent", "className", "id", "href"],
    BUTTON: ["textContent", "className", "id"],
    IMG: ["src", "alt"],
    INPUT: ["value", "className", "id"]
  };

  var clickTarget = Object.keys(elemList).includes(eventTarget.tagName)
    ? eventTarget
    : findParentNode(eventTarget, ["A", "BUTTON"]);

  if (!clickTarget) {
    return false;
  }

  var clickTargetAttr = (function() {
    //get each attribute
    var attrList = elemList[clickTarget.tagName].map(function(attr) {
      if (clickTarget[attr]) {
        return clickTarget[attr];
      }
    });
    //remove null values
    attrList = attrList.filter(attr => attr != null);
    //console.log(attrList);
    return attrList.join(",");
  })();

  return {
    deviceType: clickType,
    isLink: isLink,
    info: clickTargetAttr
  };
}

//find parentNode that matches an element tagName
//tag can be an array of element tagNames
function findParentNode(el, tag) {
  var isArr = {
    true: function() {
      return tag.includes(el.tagName);
    },
    false: function() {
      return el.tagName === tag;
    }
  };
  while (el.parentNode) {
    el = el.parentNode;
    if (isArr[Array.isArray(tag)]()) {
      return el;
    } else if (el.tagName === "DIV") {
      return false;
    }
  }
  return false;
}
function findAnchorLink(node) {
  if (node.tagName == "A") {
    return node;
  }
  return findParentNode(node, "A");
}
