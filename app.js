import bcrypt from "bcryptjs"
async function hash() {
    let password="muzammil"
    let hashpass=await bcrypt.hash(password,10)
    console.log(hashpass);
    
}
hash()