// 导入 crypto-js 包
const CryptoJS = require('crypto-js')
const crypto = require('crypto')
const constants = require('constants')

var getYmmoaForwardRequest = function (appid, sec) {

  // 定义加/解密的 key(key都放这里了, 加密还有啥意义!^_^)
  const initKey = sec
  /**
   * 定义加密函数
   * @param {string} data - 需要加密的数据, 传过来前先进行 JSON.stringify(data)
   * @param {string} key - 加密使用的 key
   */
  const aesEncrypt = (data, key) => {
    /**
     * CipherOption, 加密的一些选项:
     *   mode: 加密模式, 可取值(CBC, CFB, CTR, CTRGladman, OFB, ECB), 都在 CryptoJS.mode 对象下
     *   padding: 填充方式, 可取值(Pkcs7, AnsiX923, Iso10126, Iso97971, ZeroPadding, NoPadding), 都在 CryptoJS.pad 对象下
     *   iv: 偏移量, mode === ECB 时, 不需要 iv
     * 返回的是一个加密对象
     */
    const cipher = CryptoJS.AES.encrypt(data, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
      iv: ''
    })
    // 将加密后的数据转换成 Base64
    const base64Cipher = cipher.ciphertext.toString(CryptoJS.enc.Base64)
    // 处理 Android 某些低版的BUG
    return base64Cipher
  }
  // 获取填充后的key
  const key = CryptoJS.enc.Utf8.parse(initKey)
  // 定义需要加密的数据

  const data = `${new Date()-0}#${ parseInt(Math.random()*100000)}`
  console.log(data)
  // 调用加密函数
  const encrypted = aesEncrypt(data, key)
  return `${appid}@${encrypted}`
}
console.log(getYmmoaForwardRequest('gointerface', '1qaz2wsx3edc4rfv'))

// RSA公钥解密

const aesDecrypt = (encrypted, key) => {
  // 先将 Base64 还原一下, 因为加密的时候做了一些字符的替换
  const restoreBase64 = encrypted.replace(/\-/g, '+').replace(/_/g, '/')
  // 这里 mode, padding, iv 一定要跟加密的时候完全一样
  // 返回的是一个解密后的对象
  const decipher = CryptoJS.RSA.decrypt(restoreBase64, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
    iv: ''
  })
  // 将解密对象转换成 UTF8 的字符串
  const resultDecipher = CryptoJS.enc.Utf8.stringify(decipher)
  // 返回解密结果
  return resultDecipher
}

const privateKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCClI7NJ+4YeSiVjp6cy5R6x9zGRSdrX06ZrEXy
kDvqBAus+luQvkfcpfU5mLgMeNEjyvTK5Om74fm0NDsoLZ6Y7xeDARgEFMoQ4h1M8cReDszFUUPV
uBAU3akQpGYd7wLMMY+ND7/Hn8GjDk5qyjwlBKUsG6/bJ4hlzej9xORE5wIDAQAB
-----END PUBLIC KEY-----
`
var b = 'LQXUJSa7mES3D5uxt89RA2nFlggR4u4ObllRxLSc4ItA1PSjv6zP6XLpCgnwuAr9KYl4r3yUtALOwAOpXWwKsUYa9axRc9Z08-Z6fybUixhI9GtF867hjRzRR_TNmf-XMI5BjQUz3moQQrh5Ul-I7rqFIxWB-aA5dm9fwk9iwTY'

function getSSoInfo (session) {

 
    /**
     * RSA最大加密明文大小
     */
    let MAX_ENCRYPT_BLOCK = 117 - 31
    
        /**
         * RSA最大解密密文大小
         */
        let MAX_DECRYPT_BLOCK = 128
    
        /**
         * 公钥解密
         * @param date
         * @returns {string}
         */
        function publicDecrypt (date) {
    
          // 得到私钥  
          let publicPem = privateKey; // 替换你自己的路径  
          let publicKey = publicPem.toString()
          // 经过base64编码的密文转成buf  
          let buf = new Buffer(date, 'base64')
    
          // buf转byte数组  
          // let inputLen = bytes(buf, "base64");  
          let inputLen = buf.byteLength
          // 密文  
          let bufs = []
          // 开始长度  
          let offSet = 0
          // 结束长度  
          let endOffSet = MAX_DECRYPT_BLOCK
          // 分段加密  
          while (inputLen - offSet > 0) {
            if (inputLen - offSet > MAX_DECRYPT_BLOCK) {
              let bufTmp = buf.slice(offSet, endOffSet)
              bufs.push(crypto.publicDecrypt({ key: publicKey, padding: crypto.RSA_PKCS1_PADDING }, bufTmp))
            } else {
              let bufTmp = buf.slice(offSet, inputLen)
              bufs.push(crypto.publicDecrypt({ key: publicKey, padding: crypto.RSA_PKCS1_PADDING }, bufTmp))
            }
            offSet += MAX_DECRYPT_BLOCK
            endOffSet += MAX_DECRYPT_BLOCK
          }
          let result = Buffer.concat(bufs).toString()
          console.log(result)
          return result
        }
    
        let tinfo = publicDecrypt(session) || ''
        tinfo = tinfo.split(',')
        if (tinfo.length == 3) {
          return {
            id: tinfo[ 0 ],
            session: tinfo[ 1 ],
            createTime: tinfo[ 2 ]
          }
        } else {
          return {}
        }
}
console.log(getSSoInfo(b))
