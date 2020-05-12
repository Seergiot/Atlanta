export default class HttpUtil{
    static httpBuildQuery(
        obj: any,
        numPrefix?: any,
        tempKey?: any,
      ): string {
        let output_string: any = []
        Object.keys(obj).forEach(function(val) {
          let key = val
          numPrefix && !isNaN(+key) && (key = numPrefix + key)
          key = encodeURIComponent(String(key).replace(/[!'()*]/g, encodeURI))
          tempKey && (key = tempKey + "[" + key + "]")
      
          if (typeof obj[val] === "object") {
            let query = HttpUtil.httpBuildQuery(obj[val], null, key)
            output_string.push(query)
          } else {
            let value = encodeURIComponent(
              String(obj[val]).replace(/[!'()*]/g, encodeURI),
            )
            output_string.push(key + "=" + value)
          }
        })
        return output_string.join("&")
      }

      static httpBuildQuery2(
        obj: any,
        numPrefix?: any,
        tempKey?: any,
      ): string {
        let output_string: any = []
        Object.keys(obj).forEach(function(val) {
          let key = val
          numPrefix && !isNaN(+key) && (key = numPrefix + key)
          key = String(key)
          tempKey && (key = tempKey + "[" + key + "]")
      
          if (typeof obj[val] === "object") {
            let query = HttpUtil.httpBuildQuery2(obj[val], null, key)
            output_string.push(query)
          } else {
            let value = String(obj[val])
      
            output_string.push(key + "=" + value)
          }
        })
        return output_string.join("&")
      }
}