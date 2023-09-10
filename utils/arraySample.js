export const arraySample = (arr) => {
    const length = arr.length

    const index = Math.floor(length * Math.random())
    return arr[index]
}