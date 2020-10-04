const program = require('./breadth_search');
const chai = require('chai');

const graph = new program.Node('A');
graph.addChild('B').addChild('C').addChild('D');
graph.children[0].addChild('E').addChild('F');
graph.children[2].addChild('G').addChild('H');
graph.children[0].children[1].addChild('I').addChild('J');
graph.children[2].children[0].addChild('K');

console.log('result: ', graph.breadthFirstSearch([]))

//console.log(chai.expect(graph.breadthFirstSearch([])).to.deep.equal(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']))
