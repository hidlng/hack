var serialport = require('serialport') ; 
var SerialPort = serialport.SerialPort; 

var serial = new SerialPort('/dev/ttyAMA0', { 
	baudrate : 9600,
	parser: serialport.parsers.readline("\n")
}) ; 

console.log(serial.toString());
