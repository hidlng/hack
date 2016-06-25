   var request = require("request");
   var status = "";
   var id = "";
   var img_cctv="";
   var helmet = "";
   var SerialPort = require("serialport").SerialPort;
   SerialPort.list(function (err, ports) {
	   ports.forEach(function(port) {
	     console.log(port.comName);
	   });
	 });

   /*
   var serialPort = new SerialPort("/dev/ttyUSB0", {
      baudrate: 9600

    });
    
    serialPort.on("open", function () {
      console.log('open');
      
      serialPort.on('data', function(data) {
    	  console.log('data received: ' + data); 
    	 request({
			  uri: "http://52.79.138.81/saint/worker/update?id="+id+"&status="+status+"&img_cctv="+img_cctv+"&helmet="+helmet,
			  method: "GET"
			  }, function(error, response, body) {
				 console.log(response); 
			});
    	 
    	  if( status.replace(/ /gi, "").replace(/\n/gi, "")  == "+panic" ) {
    		  console.log('data received: ' + status);  
    		  status = "";
    	  } else {
    		  if( status.indexOf(data) < 0 ) {
    			  status += data;
    			  console.log('data yet: ' + status); 
    		  }
    	  }

    	  if( status.replace(/ /gi, "").replace(/\n/gi, "") == "+fall" ) {
    		  console.log('data received: ' + status);  
    		  status = "";
    	  } else {
    		  if( status.indexOf(data) < 0 ) {
    			  status += data;
    			  console.log('data yet: ' + status); 
    		  }
    	  }
    	  
    	  if( status.replace(/ /gi, "").replace(/\n/gi, "") == "+rise" ) {
    		  console.log('data received: ' + status);  
    		  status = "";
    	  } else {
    		  if( status.indexOf(data) < 0 ) {
    			  status += data;
    			  console.log('data yet: ' + status); 
    		  }
    	  }
    	  
    	 
    		  
      });
      

    });*/