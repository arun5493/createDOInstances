var needle = require("needle");
var os   = require("os");

var config = {};
config.token = process.env.DOTOKEN;
console.log("Your token is:", config.token);



var headers =
{
	'Content-Type':'application/json',
	Authorization: 'Bearer ' + config.token
};

// Documentation for needle:
// https://github.com/tomas/needle

var client =
{
	createDroplet: function (dropletName, region, imageName, onResponse)
	{
		var data =
		{
			"name": dropletName,
			"region":region,
			"size":"512mb",
			"image":imageName,
			// Id to ssh_key already associated with account.
			// "ssh_keys":[5949695],
			"ssh_keys":null,
			"backups":false,
			"ipv6":false,
			"user_data":null,
			"private_networking":null
		};

		console.log("Attempting to create: "+ JSON.stringify(data) );

		needle.post("https://api.digitalocean.com/v2/droplets", data, {headers:headers,json:true}, onResponse );
	},

	printIP: function (dropletId, onResponse)
	{
		console.log("Obtaining IP Address...")
		needle.get("https://api.digitalocean.com/v2/droplets/"+dropletId, {headers:headers,json:true}, onResponse );

	}

};


// #############################################
// #1 Create an droplet with the specified name, region, and image
// Comment out when completed. ONLY RUN ONCE!!!!!
// Write down/copy droplet id.

var name = "ajagana";
var region = "nyc1"; // Fill one in from #1
var image = "ubuntu-16-04-x64"; // Fill one in from #2
var dropletId = "1231231234";
client.createDroplet(name, region, image, function(err, resp, body)
{
	// console.log(body.droplet.id);
	// StatusCode 202 - Means server accepted request.
	if(!err && resp.statusCode == 202)
	{
		//console.log( JSON.stringify( body, null, 3 ) );
		//console.log( JSON.stringify( body.droplet.id, null, 3 ) );
		dropletId = body.droplet.id;
	}

	console.log('Printing the dropletId: ',dropletId);

	setTimeout(function () {
 		client.printIP(dropletId,function(err, resp, body)
		{
 			console.log("The droplet's ip address is: ",body.droplet.networks.v4[0].ip_address);
	 		// StatusCode 202 - Means server accepted request.
	 		if(!err && resp.statusCode == 201)
	 		{
	 		console.log("(INSIDE IF) The droplet's ip address is: ",body.droplet.networks.v4[0].ip_address);
	 		}
	}
	)}, 8000)

});
