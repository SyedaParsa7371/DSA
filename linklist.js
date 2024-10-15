// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }
// class linkedlist {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//        let node = new Node(value)
//         if (this.isEmpty) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('List is Empty')
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while (curr) {
//                 listValues += `${curr.value}`
//                 curr = curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }

// const list = new linkedlist()
// console.log('list is empty', list.isEmpty())
// console.log('List size', list.getSize())
// list.print()

// list.prepend(10)
// list.print()

// list.prepend(20)
// list.print()
// list.prepend(30)

// list.print()


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail=null
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        let node = new Node(value); 
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        let node = new Node(value)
        if (index === 0) {
            this.prepend(value);
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }
    remove(index){
        if(index  <0 || index>=this.size){
            return null
        }
        let removeNode
        if (index===0) {
            removeNode=this.head
            this.head=this.head.next
        }else{
            let prev = this.head
            for(let i= 0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removevalue(value){
        if(this.isEmpty()){
            return null
        }
        if (this.head.value===value) {
            this.head=this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while (prev.next && prev.next.value!==value) {
                prev=prev.next
            }
            if (prev.next) {
                let removeNode = prev.next
                prev.next=removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i= 0
        let curr = this.head
        while (curr) {
            if (curr.value===value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }


    print() {
        if (this.isEmpty()) {
            console.log('List is Empty');
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value}  `;
                curr = curr.next;
            }

            console.log(listValues);
        }
    }
}

// Example usage:
const list = new LinkedList();
console.log('list is empty:', list.isEmpty()); 
console.log('List size:', list.getSize());   
list.print(); 

list.insert(10, 0)
list.print()

list.insert(20, 1)
list.print()

list.insert(80000, 0)
list.print()

console.log(list.getSize())
// console.log(list.remove(1))
list.print()

list.insert(78,1)
list.print()

console.log(list.search(80000))
