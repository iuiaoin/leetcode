function levelOrder(root) {
  if(!root) return [];
  let queue = [ root ];
  let res = [];
  while(queue.length) {
    let node = queue.shift();
    res.push(node.val);
    if(node.left) res.push(node.left);
    if(node.right) res.push(node.right);
  }
  return res;
}

function preOrder(root) {
  if(!root) return [];
  let stack = [ root ];
  let res = [];
  while(stack.length) {
    let node = stack.pop();
    res.push(node.val);
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }
  return res;
}

function inOrder(root) {
  if(!root) return [];
  let res = [];
  while(stack.length || root) {
    if(root) {
      stack.push(root);
      root = root.left;
    } else {
      let node = stack.pop();
      res.push(node.val);
      root = node.right;
    }
  }
  return res;
}

function postOrder(root) {
  if(!root) return [];
  let res = [];
  let stack = [root];
  while(stack.length) {
    let node = stack.pop();
    res.unshift(node.val);
    if(node.left) stack.push(node.left);
    if(node.right) stack.push(node.right);
  }
  return res;
}