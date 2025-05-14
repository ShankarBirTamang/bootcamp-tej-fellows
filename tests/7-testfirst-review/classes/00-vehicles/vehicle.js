/* eslint-disable no-unused-vars */
class Vehicle {
  constructor([wheelTotal, energySource, manufacturer]) {
    this.wheelTotal = wheelTotal;
    this.energySource = energySource;
    this.manufacturer = manufacturer;
    this.isOn = false;
  }
  getSpec(key) {
    if (key === "getSpec") return undefined;
    return this[key];
  }
}

class Tesla extends Vehicle {
  constructor([
    milesPerCharge,
    model,
    chargePercentage,
    minutesToCharge,
    vehicleArguments,
  ]) {
    super(vehicleArguments[0]);
    this.milesPerCharge = milesPerCharge;
    this.model = model;
    this.chargePercentage = chargePercentage;
    this.minutesToCharge = minutesToCharge;
  }

  minutesToFullCharge(currentChargePercent) {
    const minutesNeeded =
      this.minutesToCharge * (1 - currentChargePercent / 100);
    return `${Math.round(minutesNeeded)} minutes until the charge is full!`;
  }
}
