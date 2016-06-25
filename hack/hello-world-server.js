   var request = require("request");
   

   var status = "";
   var SerialPort = require("serialport").SerialPort;
   var serialPort = new SerialPort("/dev/ttyACM0", {
      baudrate: 9600
    });
    
    serialPort.on("open", function () {
      console.log('open');
      
      serialPort.on('data', function(data) {
    	  
    		  /*
    	  request({
			  uri: "http://52.79.138.81/saint/worker/update",
			  method: "POST",
			  form: {
				  id: "Bob",
				  status: "Bob",
				  img_cctv: "Bob",
				  helmet: "Bob",
			  }
			}, function(error, response, body) {
				
			});*/
    	  
    	  if( status == "+panic" ) {
    		  console.log('data received: ' + status);  
    		  status = "";
    	  } else {
    		  status += data;
    	  }

    	  if( status == "+fall" ) {
    		  console.log('data received: ' + status);  
    		  status = "";
    	  } else {
    		  status += data;
    	  }

    		  
      });
      
      serialPort.write(new Buffer('4','ascii'), function(err, results) {
        console.log('err ' + err);
        console.log('results ' + results);
      });
    });