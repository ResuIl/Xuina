var superJumpToggle             = false
var fastRunToggle               = false
var thermalVisionToggle         = false
var nightVisionToggle           = false
var crossHairToggle             = false
var noClipToggle                = false
var rainbowVehicleToggle        = false
var aimbotToggle                = false
var aimbotOnlyPlayersToggle     = true
var aimbotIgnoreVehiclesToggle  = false

// Connect to XUI backend
const socket = new WebSocket('ws://localhost:3724');

// Connection ready
socket.addEventListener('open', function (event) {
  socket.send(JSON.stringify({
    xuinaFrontendActive: true
  }))
});

// Listen for messages
socket.addEventListener('message', function (event) {
    if(JSON.parse(event.data)) {
      //setMessageDiv(JSON.parse(event.data).randomMsg)
    }
});

/*
  ON - OFF MENU
*/
function superJump() {
  superJumpToggle = !superJumpToggle
  socket.send(JSON.stringify({
    superJump: superJumpToggle
  }))
  document.getElementById("superJumpToggle").innerHTML = superJumpToggle
}
function fastRun() {
  fastRunToggle = !fastRunToggle
  socket.send(JSON.stringify({
    fastRun: fastRunToggle
  }))
  document.getElementById("fastRunToggle").innerHTML = fastRunToggle
}
function thermalVision() {
  thermalVisionToggle = !thermalVisionToggle
  socket.send(JSON.stringify({
    thermalVision: thermalVisionToggle
  }))
  document.getElementById("thermalVisionToggle").innerHTML = thermalVisionToggle
}
function nightVision() {
  nightVisionToggle = !nightVisionToggle
  socket.send(JSON.stringify({
    nightVision: nightVisionToggle
  }))
  document.getElementById("nightVisionToggle").innerHTML = nightVisionToggle
}
function crossHair() {
  crossHairToggle = !crossHairToggle
  socket.send(JSON.stringify({
    crossHair: crossHairToggle
  }))
  document.getElementById("crossHairToggle").innerHTML = crossHairToggle
}
function noClip() {
  noClipToggle = !noClipToggle
  socket.send(JSON.stringify({
    noClip: noClipToggle
  }))
  document.getElementById("noClipToggle").innerHTML = noClipToggle
}
function rainbowVehicle() {
  rainbowVehicleToggle = !rainbowVehicleToggle
  socket.send(JSON.stringify({
    rainbowVehicle: rainbowVehicleToggle
  }))
  document.getElementById("rainbowVehicleToggle").innerHTML = rainbowVehicleToggle
}
async function spawnSingleWeapon() {
  const { value: WEAPON_NAME } = await Swal.fire({
    input: 'text',
    inputPlaceholder: 'Weapon name: ',
    confirmButtonText: 'Spawn'
  })

  if (WEAPON_NAME) {
    Swal.fire(
      'Success!',
      `${WEAPON_NAME} spawned successfully!`,
      'success'
    )
    socket.send(JSON.stringify({
      spawnSingleWeapon: WEAPON_NAME
    }))
  }
}
function giveAllWeapons() {
  Swal.fire(
    'Success!',
    `All weapons spawned successfully!`,
    'success'
  )
  socket.send(JSON.stringify({
    giveAllWeapons: true
  }))
}
function removeAllWeapons() {
  Swal.fire(
    'Success!',
    `All weapons removed successfully!`,
    'success'
  )
  socket.send(JSON.stringify({
    removeAllWeapons: true
  }))
}
function changeCarColor(color) {
  color = color.substring(4, color.length-1)
         .replace(/ /g, '')
         .split(',');
  socket.send(JSON.stringify({
    newCarColor: {
      r: color[0],
      g: color[1],
      b: color[2]
    }
  }))
}
function changeCarSecondaryColor(color) {
  color = color.substring(4, color.length-1)
         .replace(/ /g, '')
         .split(',');
  socket.send(JSON.stringify({
    newCarSecondaryColor: {
      r: color[0],
      g: color[1],
      b: color[2]
    }
  }))
}
function teleportToWaypoint() {
  socket.send(JSON.stringify({
    teleportToWaypoint: true
  }))
}
function teleportToNearestVehicle() {
  socket.send(JSON.stringify({
    teleportToNearestVehicle: true
  }))
}
function teleportToNearestPed() {
  socket.send(JSON.stringify({
    teleportToNearestPed: true
  }))
}
function repairVehicle() {
  socket.send(JSON.stringify({
    repairVehicle: true
  }))
}
function repairEngineOnly() {
  socket.send(JSON.stringify({
    repairEngineOnly: true
  }))
}
function glifeAutoFarm() {
  socket.send(JSON.stringify({
    glifeAutoFarm: true
  }))
}
function glifeXpBot() {
  socket.send(JSON.stringify({
    glifeXpBot: true
  }))
}
function mitoticDivision() {
  socket.send(JSON.stringify({
    mitoticDivision: true
  }))
}
function mitoticDivisionCrash() {
  socket.send(JSON.stringify({
    mitoticDivision: true
  }))
}
function aimbotIgnoreVehicles() {
  aimbotIgnoreVehiclesToggle = !aimbotIgnoreVehiclesToggle
  socket.send(JSON.stringify({
    aimbotIgnoreVehicles: aimbotIgnoreVehiclesToggle
  }))
  document.getElementById("aimbotIgnoreVehiclesToggle").innerHTML = aimbotIgnoreVehiclesToggle
}
function aimbotOnlyPlayers() {
  aimbotOnlyPlayersToggle = !aimbotOnlyPlayersToggle
  socket.send(JSON.stringify({
    aimbotOnlyPlayers: aimbotOnlyPlayersToggle
  }))
  document.getElementById("aimbotOnlyPlayersToggle").innerHTML = aimbotOnlyPlayersToggle
}
function aimbot() {
  aimbotToggle = !aimbotToggle
  socket.send(JSON.stringify({
    aimbot: aimbotToggle
  }))
  document.getElementById("aimbotToggle").innerHTML = aimbotToggle
}
function aimbotRange(range) {
  socket.send(JSON.stringify({
    aimbotRange: range
  }))
  document.getElementById("aimbotRange").innerHTML = range
}
function aimbotX(axis) {
  socket.send(JSON.stringify({
    aimbotYAxis: axis
  }))
  document.getElementById("aimbotX").innerHTML = axis
}
function aimbotY(axis) {
  socket.send(JSON.stringify({
    aimbotYAxis: axis
  }))
  document.getElementById("aimbotY").innerHTML = axis
}
function aimbotZ(axis) {
  socket.send(JSON.stringify({
    aimbotZAxis: axis
  }))
  document.getElementById("aimbotZ").innerHTML = axis
}
/*
  Maybe keyboard navigation later ?
*/
window.onkeydown = function(e) {

    e = e || window.event;

    if (e.keyCode == '88' && e.ctrlKey) {
      if(document.getElementById("main-container").style.display === 'none') {
        document.getElementById("main-container").style.display = 'block'
      } else {
        document.getElementById("main-container").style.display = 'none'
      }
    }

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }

}

$('#main-container').draggable();
