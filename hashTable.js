// Hash Table
// used to store key value pairs
// similar to arrays but keys are not ordered


// Hush fuction
    // converts keys into valid array indices
    // a good hash:
        // constant time
        // doesn't cluster, outputs at specific indices, but distributes uniformly
        // deterministic (same input yields same output)

        // example
        // works on string only
        const hash = (key, arrLen) => {
            let total = 0
            for(let char of key){
                // map a to 1, b to 2, c to 3, ...
                let val = char.charCodeAt(0) - 96
                total = (total + val ) % arrLen
            }
            return total
        }
        
        // improved version
        const impHash = (key, arrLen) => {
            let total = 0
            let weirdPrime = 31
            for(let i = 0; i < Math.min(key.length, 100); i++){
                let char = key[i]
                let value = char.charCodeAt(0) - 96
                total = (total * weirdPrime + value) % arrLen
            }
            return total
        }

        // dealing with collisions
            // collisions are inevitable
            // two ways to deal with them: 
                // 1. separating chaning
                    // at each index in our array we store values using a more sophisticated data structure(array || linked list)
                    // this allows as to store multiple key-value pairs at the same index
                // 2. linear probing
                    // searchthrough the array  to find the next empty slot
                    // we store a single key-value pair at each index

        // hash table set and get
            // set
                // accept a key and value
                // hashes the key
                // store key-value pair in a hash table array via separating chaning
            // get 
                // accepts a key
                // hashes the key
                // retrieves the key-value pair in the hash table
                // if the key isn't found, returns undefined
        
        class HashTable {
            constructor(size = 53){
                this.keyMap = new Array(size)
            }
            _hash = (key) => {
                let total = 0
                let weirdPrime = 31

                for(let i = 0; i < Math.min(key.length, 100); i++){
                    let char = key[i]
                    let value = char.charCodeAt(0) - 96
                    total = (total * weirdPrime + value) % this.keyMap.length
                }

                return total
            }
            // set implementation

            get = (key, value) => {
                let index = this._hash(key)
                if(this.keyMap[index]){
                    for(let i = 0; i < Math.min(this.keyMap[index].length); i ++){
                        if(this.keyMap[index][i][0] === key){
                            return this.keyMap[index][i][1]
                        }
                    }
                }
                return undefined
            }
        }