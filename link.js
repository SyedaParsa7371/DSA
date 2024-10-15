class Node{
    constructor(val){
        this.val=val
        this.size=null
    }
        
    
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    empty(){
        return this.size===0
    }
 
    prepend(val) {
        let node = new Node(val); 
        if (this.empty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    reverse() {
        if (this.empty() || this.head === this.tail) {
             return; 
        }
        let prev = null;
        let curr = this.head;
               
        
        this.tail = this.head; 
        
        while (curr ) {
             let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
         }
        
        this.head = prev; 
    }
        

  
    print() {
        if (this.empty()) {
            console.log('List is Empty');
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.val}  `;
                curr = curr.next;
            }

            console.log(listValues);
        }
    }

}

let list = new LinkedList();
list.prepend(45)
list.prepend(5)
list.prepend(15)
list.prepend(35)

list.print()
list.reverse()
list.print()


















// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null; // Initialize next to null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     empty() {
//         return this.size === 0;
//     }

//     prepend(val) {
//         let node = new Node(val);
//         if (this.empty()) {
//             this.head = node;
//             this.tail = node; // Update tail for the first node
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }
    

//     reverse() {
//         if (this.empty() || this.head === this.tail) {
//             return; // No need to reverse if list is empty or has only one node
//         }

//         let prev = null;
//         let curr = this.head;
//         let next = null;

//         this.tail = this.head; // Update tail to previous head

//         while (curr !== null) {
//             next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }

//         this.head = prev; // Update head to the last node
//     }

//     print() {
//         if (this.empty()) {
//             console.log('List is Empty');
//         } else {
//             let curr = this.head;
//             let listValues = '';
//             while (curr) {
//                 listValues += `${curr.val}  `;
//                 curr = curr.next;
//             }
//             console.log(listValues);
//         }
//     }
// }

// let list = new LinkedList();

// list.prepend(5);
// list.prepend(15);
// list.prepend(35);
// list.prepend(45);

// console.log('Original List:');
// list.print(); // Output: 45  35  15  5

// list.reverse();

// console.log('Reversed List:');
// list.print(); // Output: 5  15  35  45
