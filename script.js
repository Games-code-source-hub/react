let arr = [1,2,3,4,5,6,7,8,9,10]
arr.forEach(  (item, id) => {
    console.log(item)
})
console.log("-----------------")

arr.forEach( (item, id) => {
    if (id==4) {
        console.log(item)
    }
})
console.log("-----------------")

arr.forEach( (item, id) => {
    if (item%2) {
        console.log(item)
    }
})
console.log("-----------------")


