//bytes to string

const bytes = new Uint8Array([72, 101, 108,108,111])

const str = new TextDecoder().decode(bytes)
console.log(str)


//asci to byte
const ascii = "Hello";
let arr = ascii.split("").map((char)=>{
    return char.charCodeAt(0)
})

console.log(arr)

//byte to hex
const byteArray = new Uint8Array([72, 101, 108, 108, 111]); 
let hex=""
byteArray.map((bit)=>{
    
    hex+= bit.toString(16).padStart(2, '0')
})
console.log(hex)

//byte to base64
const base64 = Buffer.from(byteArray).toString("base64")
console.log(base64)