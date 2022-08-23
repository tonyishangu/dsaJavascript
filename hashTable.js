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