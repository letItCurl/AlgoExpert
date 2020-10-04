class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name)
    this.children.forEach((el) => {
      el.depthFirstSearch(array)
    })
    return array
  }
}

exports.Node = Node;