var m={};

m.parse = function(givenTree){
    if(givenTree.left instanceof Object)
        givenTree.left = this.parse(givenTree.left);
    if(givenTree.right instanceof Object)
        givenTree.right = this.parse(givenTree.right);
    return ["(",givenTree.left,givenTree.parent,givenTree.right,")"].join(" ");
}
module.exports = m;


