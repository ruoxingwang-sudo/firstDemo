function multi(n) {
  if (n<=9) {
    for (let i = 1; i <= n; i++) {
      let m = i*n
      let multi_format = `${i}x${n}=${m} `
      document.write("<span>"+multi_format+"</span>")
    }
    document.write("<br/>")
    multi(n+1)
  }
}
var body = null;
multi(1)