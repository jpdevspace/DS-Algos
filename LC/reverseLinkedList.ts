class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {

  if (!head) { return new ListNode() };

  let current = head;
  let listArr: number[] = [];
  
  while (current.next !== null) {
    listArr.push(current.val);
    current = current.next;
  }
  
  let reversedList = new ListNode(current.val);
  let currRevList = reversedList;
  
  while (listArr.length > 0) {
    currRevList.next = new ListNode(listArr.pop()); 
    currRevList = currRevList.next;
  }

  return reversedList;
};

const node3 = new ListNode(5);
const node2 = new ListNode(3, node3);
const node1 = new ListNode(1, node2);

console.log(node1);
console.log('=============')
console.log(reverseList(node1));