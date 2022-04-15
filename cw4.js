function ConcatenatingUnevenArrays(arr) {
    arr.map(function (item, index) {

        console.log(`" ${arr[index]}" \n`);
    })
}
    ConcatenatingUnevenArrays([
        ["The", "red", "horse"],
        ["Plane", "over", "the", "ocean"],
        ["Chocolate", "ice", "cream", "is", "awesome"],
        ["this", "is", "a", "long", "sentence"]]);

// Write a Program to Concatenating uneven arrays : (use reduce )
// example :
// data = [
// ["The","red", "horse"],
// ["Plane","over","the","ocean"],
// ["Chocolate","ice","cream","is","awesome"],
// ["this","is","a","long","sentence"]
// ]
// Result :
// ['The red horse',
// 'Plane over the ocean',
// 'Chocolate ice cream is awesome',
// 'this is a long sentence']