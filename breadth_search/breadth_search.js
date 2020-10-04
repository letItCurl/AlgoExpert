class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(arr) {
    const que = [this]
    while (que.length > 0){
      const cur = que.shift()
      arr.push(cur.name)
      for(const child of cur.children){
        que.push(child)
      }
    }
    return arr
  }
}

exports.Node = Node;