class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        let newnode = new Node(value)
        if (this.isEmpty()) {
            this.root = newnode
        } else {
            this.insertnode(this.root, newnode)
        }
    }
    insertnode(root, newnode) {
        if (newnode.value < root.value) {
            if (root.left == null) {
                root.left = newnode
            } else {
                this.insertnode(root.left, newnode)
            }
        } else {
            if (root.right === null) {
                root.right = newnode
            } else {
                this.insertnode(root.right, newnode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }


    levelOrder() {

        let queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }


    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root= this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root== null){
            return root
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left&& !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right= this.deleteNode(root.right,root.value)
        }
        return root
    }
}

let bst = new BinaryTree()
console.log('Tree is Empty ', bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

// console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 15))
//  console.log(bst.search(bst.root, 12))



// console.log("Pre Order")
// bst.preOrder(bst.root)

// console.log("In Order")
// bst.inOrder(bst.root)

// console.log("Post Order")
// bst.postOrder(bst.root)

// console.log("Breath first Search")
// bst.levelOrder()

// console.log("Maximum Value")
// console.log(bst.max(bst.root))

// console.log("Minmum Value")
// console.log(bst.min(bst.root))

bst.levelOrder()


console.log("After Deleting The Value")

bst.delete(15)
bst.levelOrder()