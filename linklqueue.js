let LinkedList = require('./linklist_tail.js')

class LinkedListQueue{
    constructor(){
        this.list=new LinkedList()
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
        return this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return this.list.print()
    }
}

let queue = new LinkedListQueue()
console.log(queue.isEmpty())
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(5)
queue.enqueue(10)
queue.print()
console.log(queue.getSize())
console.log(queue.dequeue())
console.log(queue.peek())
queue.print()