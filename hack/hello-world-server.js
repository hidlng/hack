   var request = require("request");
   var status = "";
   var id = "";
   var img_cctv="";
   var helmet = "";
   var SerialPort = require("serialport").SerialPort;
 /*
   var http = require('http');
   var options = {
     host: '192.168.43.26',
     path: '/',
     port: '8080',
     method: 'POST'
   };*/


   
   var serialPort = new SerialPort("/dev/ttyAMA0", {
      baudrate: 115200
    });
    
    serialPort.on("open", function (data) {
      console.log('open');
      console.log('data open: ' + data);
 	  /*
      request({
		  uri: "http://192.168.43.26:8080/?id="+id+"&status=2&img_cctv="+img_cctv+"&helmet="+helmet,
		  method: "GET"
		  }, function(error, response, body) {
			 console.log(response); 
		});*/
	  
      serialPort.on('data', function(data) {
    	  console.log('data received: ' + data);
    	  
    	  
    	 /* 


    	 
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
    	  
    	 */
    		  
      });
      
      serialPort.write(new Buffer('10','ascii'), function(err, results) {
        console.log('err ' + err);
        console.log('results ' + results);
      });

    });