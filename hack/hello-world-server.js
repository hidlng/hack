var serialport = require('serialport') ; 
var SerialPort = serialport.SerialPort; 

var serial = new SerialPort('/dev/ttyUSB0', { 
	baudrate : 9600,
	parser: serialport.parsers.readline("\n")
}) ; 


serial.on('data', function(data) { 
	console.log(data.toString()) ; 
}) ; 
