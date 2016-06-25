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




    serialPort.on("open", function (data) {
      console.log('open');
      serialPort.on('data', function(data) {
    	  var ss = (data + '');
    	  if( ss.replace(/ /gi, "").replace(/\n/gi, "").indexOf("+panic") >= 0 ) {
    		  console.log('data received: ' + data);
    	 	  
    	      request({
    			  uri: "http://52.79.138.81/saint/worker/update/?id=3&status=2",
    			  method: "GET"
    			  }, function(error, response, body) {
    				  console.log("2"); 
    			});
    	      
    	      request({
    			  uri: "http://192.168.43.26:8000/alarm",
    			  method: "GET"
    			  }, function(error, response, body) {
    				  
    			});
       	  }
    	  if( ss.replace(/ /gi, "").replace(/\n/gi, "").indexOf("+fall") >= 0 ) {
    		  console.log('data received: ' + data);
    	 	  
    	      request({
    			  uri: "http://52.79.138.81/saint/worker/update/?id=3&status=3",
    			  method: "GET"
    			  }, function(error, response, body) {
    				  console.log("3");
    			});
    	      
    	      request({
    			  uri: "http://192.168.43.26:8000/alarm",
    			  method: "GET"
    			  }, function(error, response, body) {
    				   
    			});
       	  }

    	  
    	  if( ss.replace(/ /gi, "").replace(/\n/gi, "").indexOf("+wakeup") >= 0 ) {
    		  console.log('data received: ' + data);
    	 	  
    	      request({
    			  uri: "http://52.79.138.81/saint/worker/update/?id=3&status=1",
    			  method: "GET"
    			  }, function(error, response, body) {
    				 console.log("1"); 
    			});
       	  }
    	  
    	
    		  
      });
      
      serialPort.write(new Buffer('10','ascii'), function(err, results) {
        console.log('err ' + err);
        console.log('results ' + results);
      });

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
    
    app.listen(600000, function() {
 	   console.log("listening 8000");
 	 });
    