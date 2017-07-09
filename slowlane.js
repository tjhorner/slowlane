var isps = {
  comcast: {
    name: "Xfinity",
    color: "D71921",
    identifiers: [
      "Comcast"
    ]
  },
  att: {
    name: "U-Verse",
    color: "009FDB",
    identifiers: [
      "AT&T",
      "SBC Global",
      "SBCGlobal"
    ],
  },
  twc: {
    name: "Spectrum",
    color: "16639D",
    identifiers: [
      "Time Warner Cable",
      "Spectrum",
      "TWC",
      "Charter"
    ],
  },
  cl: {
    name: "CenturyLink",
    color: "8DC63F",
    identifiers: [
      "CenturyLink"
    ],
  },
  vzn: {
    name: "FiOS",
    color: "CD040B",
    identifiers: [
      "Verizon",
      "VZN"
    ],
  },
  cox: {
    name: "Cox",
    color: "0081BF",
    identifiers: [
      "Cox"
    ],
  },
  optimum: {
    name: "Optimum",
    color: "FFB600",
    identifiers: [
      "Optimum"
    ],
  },
  frontier: {
    name: "Frontier",
    color: "D9272C",
    identifiers: [
      "Frontier"
    ],
  },
  sl: {
    name: "SuddenLink",
    color: "7AC142",
    identifiers: [
      "Suddenlink"
    ],
  },
  // earthlink still exists??
  el: {
    name: "EarthLink",
    color: "F78D1E",
    identifiers: [
      "EarthLink"
    ],
  },
  ws: {
    name: "Windstream",
    color: "7FCC28",
    identifiers: [
      "Windstream"
    ],
  },
  c1: {
    name: "Cable One",
    color: "B31B27",
    identifiers: [
      "Cable One"
    ],
  },
  nz: {
    name: "NetZero",
    color: "FE2514",
    identifiers: [
      "NetZero"
    ],
  },
  juno: {
    name: "Juno",
    color: "225092",
    identifiers: [
      "Juno"
    ],
  },
  aol: {
    name: "AOL",
    color: "000000",
    identifiers: [
      "AOL"
    ],
  },
  msn: {
    name: "MSN",
    color: "0078D7",
    identifiers: [
      "MSN"
    ],
  },
  mediacom: {
    name: "Mediacom",
    color: "0062A6",
    identifiers: [
      "Mediacom"
    ],
  },
  bisp: {
    name: "Basic ISP",
    color: "000000",
    identifiers: [
      "Basic ISP"
    ],
  },
  ispcom: {
    name: "ISP.com",
    color: "000000",
    identifiers: [
      "ISP.com"
    ]
  },
  unknown: {
    name: "internet",
    color: "000000",
    identifiers: [ ]
  }
}

var getIsp = orgString => {
  var foundIsp

  for(var isp in isps){
    for(var identifier in isps[isp].identifiers){
      if(orgString.toLowerCase().indexOf(isps[isp].identifiers[identifier].toLowerCase()) !== -1){
        return {
          id: isp,
          details: isps[isp]
        }
      }
    }
  }

  return {
    id: isp,
    details: isps.unknown
  }
}

var show = isp => {
  $(".slowlane").html($(".slowlane").html().replace(/{{service}}/g, isp.details.name))
  $(".slowlane, .packages").fadeIn()
  $(".logo").css("background-image", `url(img/logos/${isp.id}.png)`)
  $(".brand-color, strong").css("color", "#" + isp.details.color)
  $(".package").css("border-color", "#" + isp.details.color)
  $(".package").css("box-shadow", `0px 0px 11px #${isp.details.color}`)
  $(".buy").css("background", "#" + isp.details.color)

  $("body").one("click", () => {
    $(".slowlane, .packages").hide()
    $(".fightforthenet").show()
  })

  $(".cta").one("click", close)
}

var close = () => parent.postMessage("slowlane-close", "*")

$(document).ready(() => {
  $.getJSON("https://ipinfo.io/")
    .done(res => {
      show(getIsp(res.org))
    })
    .fail(() => {
      show({ id: "unknown", details: isps.unknown })
    })
})