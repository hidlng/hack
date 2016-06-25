var serialport = require('serialport') ; 
var SerialPort = require('serialport').SerialPort; 

var serial = new SerialPort('/dev/ttyACM1', { 
	baudrate : 9600,
	parser: serialport.parsers.readline("\n")
}) ; 


serial.on('data', function(data) { 
	console.log(data.toString()) ; 
}) ; 
