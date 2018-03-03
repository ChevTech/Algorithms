class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var n1 = new Node(1);
var n2 = new Node(2);
// var n3 = new Node(4);
// var n4 = new Node(2);
// var n5 = new Node(5);

n2.next = n1;

var sortList = function(head) {
    if(head === null || head.next === null){
        return head;
    }
    
    var len = 0;
    var headPtr = head;
    while(headPtr !== null){
        len++;
        headPtr = headPtr.next;
    }
    
    function quickSort(head, left, right){
        if(left < right){
            var p = partition(head, left, right);
            quickSort(head, left, p-1);
            quickSort(head, p+1, right);
        }
    }
    
    function partition(head, left, right){
        var firstHigh = getNodeAt(head, left);
        var p = getNodeAt(head, right);
        
        while(head.next !== null){
            if(head.val < p.val){
                swap(head, firstHigh);
                firstHigh = head.next;
                left += 1;
            }
            head = head.next;
        }
        
        swap(firstHigh, p);
        return left;
    }
    
    quickSort(head, 0, len);
};

function swap(node1, node2){
    var tmp = node1.val;
    node1.val = node2.val;
    node2.val = tmp;
}

function getNodeAt(head, index){
    var tmp = head;
    while(index > 1){
        tmp = tmp.next;
        index--;
    }
    
    return tmp;
}

sortList(n2);