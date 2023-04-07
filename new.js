class Queue{
    constructor(){
        this.elements = []
        this.head = 0
        this.tail = 0
    }

    enqueue(element){
        this.elements[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        delete this.elements[this.head]
        this.head++
    }

    peek(){
        return this.element[this.head]
    }

    getLength(){
        return this.tail - this.head
    }

    isEmpty(){
        return this.length === 0
    }


}

let queue = new Queue()

queue.enqueue(4)
queue.enqueue(2)
console.log(queue)
console.log(queue.getLenght())




