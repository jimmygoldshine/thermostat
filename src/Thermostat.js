const DEFAULT_TEMP = 20;
var Thermostat = function() {
  this.currentTemperature = DEFAULT_TEMP;
  this.isInPowerSaverMode = true;
};

Thermostat.prototype.up = function(number=1) {
   this.currentTemperature += number;
   if(this.isInPowerSaverMode && this.currentTemperature > 25){
     this.currentTemperature = 25;
     return this.currentTemperature;
   } else if(this.isInPowerSaverMode === false && this.currentTemperature > 32){
      this.currentTemperature = 32;
      return this.currentTemperature;
    } else {
   return this.currentTemperature;
 }
};

Thermostat.prototype.down = function(number=1) {
  this.currentTemperature -= number;
  if(this.currentTemperature < 10) {
    this.currentTemperature = 10;
    return this.currentTemperature;
  } else {
  return this.currentTemperature;
  }
};

Thermostat.prototype.reset = function() {
  this.currentTemperature = DEFAULT_TEMP;
  return this.currentTemperature;
};

Thermostat.prototype.energyReport = function() {
  if(this.currentTemperature < 18){
    return 'low-usage';
  } else if(this.currentTemperature > 24 ) {
    return 'high-usage';
  } else {
    return 'medium-usage';
  }
};

Thermostat.prototype.powerSaverMode = function() {
  if(this.isInPowerSaverMode){
    this.isInPowerSaverMode = false;
    return "off"
  } else {
      if(this.currentTemperature > 25){
        this.currentTemperature = 25;
        this.isInPowerSaverMode = true;
        return "on"
      } else {
        this.isInPowerSaverMode = true;
        return "on"
    }
  }
};
