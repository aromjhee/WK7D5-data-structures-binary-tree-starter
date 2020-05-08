function inOrderArray(root) {
  // if the root is null, return an empty array
  if (!root) return [];
  // get the array for visiting the left node
  // get the array for visiting the right node
  let leftArr = inOrderArray(root.left);
  let rightArr = inOrderArray(root.right);

  // return the left array concatenated with the root value
  //   concatenated with the right array
  return [...leftArr, root.val, ...rightArr];
}

function postOrderArray(root) {
  // if the root is null, return an empty array
  if (!root) return [];
  // get the array for visiting the left node
  // get the array for visiting the right node
  let leftArr = postOrderArray(root.left);
  let rightArr = postOrderArray(root.right);

  // return the left array concatenated with the right array
  //   concatenated with the root value
  return [...leftArr, ...rightArr, root.val]
}


module.exports = {
  inOrderArray,
  postOrderArray
};
