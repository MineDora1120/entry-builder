exports.html = function(url, files) {
  console.log("* ENTRY BUILDER HTML - Ready Module.")
const fs = require("fs")
    const content = `
<body style="overflow:hidden;">
<script>window.location.href = "${url}"</script> 
</body>
`
fs.writeFile(files, content, err => {
        if(err) return console.log("등록 도중 오류가 발생했습니다.");
      })
      console.log("* ENTRY BUILDER HTML - SUSSESSFUL!")
}
