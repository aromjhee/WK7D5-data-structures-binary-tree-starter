// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    
    if (preorder.length === 0 && inorder.length === 0) return null;

    let root = new TreeNode(preorder[0]);
    let rootIdx = inorder.indexOf(preorder[0])

    let leftInorder = inorder.slice(0, rootIdx)
    let rightInorder = inorder.slice(rootIdx + 1)

    let leftPreorder = preorder.filter( val => leftInorder.includes(val));
    let rightPreorder = preorder.filter( val => rightInorder.includes(val));

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;

}

let preorder = [3, 9, 20, 15, 7]
let inorder = [9, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder));
