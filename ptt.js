var net = require('net');
var accounts = require('./accounts.json').accounts;

accounts.forEach(function(account) {
  var client = net.connect(23, 'ptt.cc', function() {
    client.setEncoding('utf-8');
    setTimeout(function() {
      client.write(account.username + '\r\n');
      client.write(account.password + '\r\n');
      setTimeout(function() {
        client.write('y\r\n');
        setTimeout(function() {
          console.log('done with', account.username);
          client.destroy();
        }, 1000);
      }, 1000);
    }, 1000);

    // client.on('data', function(data) {
    //   console.log(data.toString());
    // });
  });
});
