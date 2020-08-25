var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.nextNode = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        this.head = head;
    }
    LinkedList.prototype.size = function () {
        var count = 0;
        var node = this.head;
        while (node) {
            count++;
            node = node.nextNode;
        }
        return count;
    };
    LinkedList.prototype.clear = function () {
        this.head = null;
    };
    LinkedList.prototype.getLast = function () {
        var node = this.head;
        while (node) {
            if (node.nextNode == null) {
                return node.data;
            }
            node = node.nextNode;
        }
    };
    LinkedList.prototype.getFirst = function () {
        return this.head;
    };
    return LinkedList;
}());
//Creating Nodes
var familyMember1 = new ListNode("Father");
var familyMember2 = new ListNode("Mother");
var familyMember3 = new ListNode("Kid 1");
var familyMember4 = new ListNode("Kid 2");
familyMember1.nextNode = familyMember2;
familyMember2.nextNode = familyMember3;
familyMember3.nextNode = familyMember4;
var familyList = new LinkedList(familyMember1);
console.log(familyList.head.data);
console.log("Family members: " + familyList.size());
console.log("last Member: " + familyList.getLast());
//Reversing a linked list
var printList = function (linkedList) {
    var node = linkedList.head;
    while (node) {
        console.log(node.data);
        node = node.nextNode;
    }
};
var reverseList = function (linkedList) {
    var previous = null, current = linkedList.head, next = null;
    while (current) {
        next = current.nextNode;
        current.nextNode = previous;
        previous = current;
        current = next;
    }
    linkedList.head = previous;
};
var addItem = function (listNode, linkedList) {
    var node = linkedList.head;
    while (node) {
        console.log("Current Node: " + node.data);
        if (node.nextNode == null) {
            node.nextNode = listNode;
            break;
        }
        node = node.nextNode;
    }
};
// printList(familyList);
console.log("Adding item");
var newFamilyMember = new ListNode("kid 4");
addItem(newFamilyMember, familyList);
console.log("Reversed");
reverseList(familyList);
printList(familyList);
