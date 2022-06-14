const { generateTOTP } = require('./src/totp')

const secret = 'BF3QT445LBVKIP676TPCBZYLZYEWGAXX'

const totp = generateTOTP(secret)

console.log(totp)
