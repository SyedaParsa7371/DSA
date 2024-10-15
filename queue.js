// class Queue{
//     constructor(){
//         this.items= []
//     }
//     enqueue(element){
//         this.items.push(element)    
//     }
//     dequeue(element){
//         return this.items.shift(element)
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     peek(){
//         if(!this.element) {
//             return this.items[0]           
//         }
//         return null
//     }
//     size(){
//         return this.items.length
//     }
//     print(){
//         console.log(this.items.toString())
//     }
// }
// let queue = new Queue()
// console.log(queue.isEmpty())
// queue.enqueue(5)
// queue.enqueue(10)
// queue.print()
// console.log(queue.size())
// console.log(queue.dequeue())
// console.log(queue.peek())

class Queues{
    constructor(){
        this.items={}
        this.rear=0
        this.front=0
    }
    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }
    dequeue(){
        let items = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return items
    }
    isEmpty(){
        return this.rear - this.front ===0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear-this.front
    }
    print(){
        console.log(this.items)
    }
}
let queue = new Queues()
console.log(queue.isEmpty())
queue.enqueue(5)
queue.enqueue(10)
queue.print()
console.log(queue.size())
console.log(queue.dequeue())
console.log(queue.peek())