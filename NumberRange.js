// Number Range
// Given a range of numbers return the range of the numberas from min to max

let nums = [4, 2, 98, 33, 17]

function numberRange(nums) {
    return nums.lenth === 0 ? "undefined" :
    `${Math.min(...nums)}-${Math.max(...nums)}`
}

console.log(numberRange(nums))

function numberRange(nums) {
    return nums.length === 0 ? "undefined" :
    `${Math.min(...nums)}-${Math.max(...nums)}`
}

console.log(numberRange(nums))