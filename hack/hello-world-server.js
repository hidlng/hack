   var request = require("request");
   var express = require('express');
   var app = express();
   var fs = require('fs');

   var exec = require('child_process').exec;
   var cmd = 'fswebcam /home/pi/photo/now.jpg';
   var SerialPort = require("serialport").SerialPort;
   var state = "0";
   
   var serialPort = new SerialPort("/dev/ttyS0", {
      baudrate: 115200
    });

   app.get('/take', function (req, res) {
     exec(cmd, function(error, stdout, stderr) {
       fs.readFile('/home/pi/photo/now.jpg', function (err, data) {
         if (err) throw err;
         res.write(data);
         res.end();
       });
     });
   });

   app.listen(8000, function() {
     console.log("listening 8000");
   });
   
    serialPort.on("open", function (data) {
      console.log('open');
      console.log('data open: ' + data);

	  
      serialPort.on('data', function(data) {
    	 
    	  if( data == "+panic" ) {
    		  console.log('data received: ' + data);
    	 	  /*
    	      request({
    			  uri: "http://192.168.43.26:8080/?id="+id+"&status=2&img_cctv="+img_cctv+"&helmet="+helmet,
    			  method: "GET"
    			  }, function(error, response, body) {
    				 console.log(response); 
    			});*/
       	  }
    	  
    	  if( data == "+fall" ) {
    		  console.log('data received: ' + data);
    	 	  /*
    	      request({
    			  uri: "http://192.168.43.26:8080/?id="+id+"&status=2&img_cctv="+img_cctv+"&helmet="+helmet,
    			  method: "GET"
    			  }, function(error, response, body) {
    				 console.log(response); 
    			});*/
       	  }

    	  
    	  if( data == "+wakeup" ) {
    		  console.log('data received: ' + data);
    	 	  /*
    	      request({
    			  uri: "http://192.168.43.26:8080/?id="+id+"&status=2&img_cctv="+img_cctv+"&helmet="+helmet,
    			  method: "GET"
    			  }, function(error, response, body) {
    				 console.log(response); 
    			});*/
       	  }
    	  
    	
    		  
      });
      
      serialPort.write(new Buffer('10','ascii'), function(err, results) {
        console.log('err ' + err);
        console.log('results ' + results);
      });

    });