class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let nodeC = new ListNode(3);
let nodeB = new ListNode(2, nodeC);
let nodeA = new ListNode(1, nodeB);

console.log("nodeA value:", nodeA.value);
console.log("nodeA next:", nodeA.next);

function traversal(head) {
  let curr = head;
  let result = "";
  while (curr) {
    result += curr.value + "->";
    curr = curr.next;
  }
  result += null;
  console.log(result);
}

traversal(nodeA);

// Insert at head
function insertAtHead(head, value) {
  let newNode = new ListNode(value);
  if (!head) return newNode;
  newNode.next = head;
  return newNode;
}
