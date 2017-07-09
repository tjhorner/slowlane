var jul12 = new Date(2017, 6, 12)
var today = new Date()

var seen = document.cookie.split(";").map(cookie => cookie.split("=")).filter(cookie => cookie[0].trim() === "slowlane_seen")[0]

if((!seen && today.getFullYear() === jul12.getFullYear() &&
             today.getMonth() === jul12.getMonth() &&
             today.getDate() === jul12.getDate()) || location.hash.indexOf("slowlanedebug") !== -1){
  var iframe = document.createElement("iframe")

  iframe.src = "https://tjhorner.com/slowlane/"
  iframe.id = "slowlane-notice"
  iframe.frameBorder = false
  iframe.style.width = "100%"
  iframe.style.height = "100%"
  iframe.style.position = "fixed"
  iframe.style.top = "0"
  iframe.style.left = "0"
  iframe.style.background = "white"
  iframe.style.zIndex = 9999

  window.addEventListener("message", e => {
    if(e.data === "slowlane-close") document.getElementById("slowlane-notice").style.display = "none"
    document.cookie = "slowlane_seen=1"
  })

  document.body.appendChild(iframe)
}