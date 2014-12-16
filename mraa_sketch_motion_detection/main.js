//Type Node.js Here :)
var mraa = require('mraa');
console.log('MRAA Version: '+mraa.getVersion());

var ledOutPin = new mraa.Gpio(8);
var pirSensor = new mraa.Gpio(6);

ledOutPin.dir(mraa.DIR_OUT);
pirSensor.dir(mraa.DIR_IN);

loop();

function loop(){
    var pirSensorInput = pirSensor.read();
    ledOutPin.write(pirSensorInput);
    setTimeout(loop,1000);
}

