// YOUR CODE BELOW
function allSystemsGo(sysObject) {
  for (let key in sysObject) {
    let value = sysObject[key];
    // Check if value is an object
    if (typeof value === "object") {
      if (!allSystemsGo(value)) {
        return false;
      }
    } else if (value !== true) {
      return false;
    }
  }
  return true;
}

let systems = {
  power: {
    batteries: true,
    solarCells: true,
    generator: true,
    fuelCells: true,
  },
  telecoms: {
    antennas: {
      highGain: true,
      mediumGain: true,
      lowGain: true,
    },
    transmitter: true,
    receiver: true,
  },
  attitudeControl: {
    stabilization: {
      spin: true,
      threeAxis: true,
    },
  },
  propulsion: {
    engines: {
      engine1: true,
      engine2: true,
      engine3: false,
    },
    thrusters: true,
    propellant: true,
  },
  environment: {
    cooling: true,
    heating: true,
    lifeSupport: true,
  },
};

console.log(allSystemsGo(systems));
// => false
