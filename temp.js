const temp = [1,1,1,1,1,1,1,1,1,1]
   temp.reduce((acc, arrayItem)=>{
        // accum being processed
        console.log(acc)
        return acc+arrayItem
   }, 0)