var iframe = document.createElement("iframe")

iframe.src = "https://tjhorner.com/slowlane"
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
})

document.body.appendChild(iframe)