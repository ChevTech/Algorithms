
// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST 
function BinarySearchTree() {
  this.root = null;
}
/*
func(20, 17) => func(9, 17) => func(12, 17) => func(18, 17)
     
*/
BinarySearchTree.prototype.findLargestSmallerKey = function(node, num) {
  console.log(func(node, num));
  
  // result = 0;
  // while (node !== null) {
  //   if(node.key < num) {
  //     result = node.key;
  //     node = node.right;
  //   } else {
  //     node = node.left;
  //   }
  // }

  // return result;
}

function func(node, num){
  console.log(num);
  if(node.left === null && node.right === null){
    return 0;
  }

  if(num < node.key){
    func(node.left, num);
  }

  if(num > node.key){
    var min = node.key;
    func(node.right, num);
  }

  return min;
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if(!root) {
      this.root = new Node(key);
      return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  var currentNode = root;
  var newNode = new Node(key);

  while(currentNode !== null) {
      if(key < currentNode.key) {
          if(!currentNode.left) {
              currentNode.left = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.left;
          }
      } else {
          if(!currentNode.right) {
              currentNode.right = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.right;
          }
      }
  }
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(18);
bst.insert(16);

var result = bst.findLargestSmallerKey(bst.root, 17);

console.log("Largest smaller number is " + result);
