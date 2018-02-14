var AWS = require("aws-sdk")



var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;
AWS.config.region =  'us-west-2';

var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});
//update({region: 'us-east-2a'});//,credentials: myCred});



var params = {
   ImageId: 'ami-10fd7020', // amzn-ami-2011.09.1.x86_64-ebs
   InstanceType: 't1.micro',
   MinCount: 1,
   MaxCount: 1
};

// Create the instance
ec2.runInstances(params, function(err, data) {
   if (err) {
      console.log("Could not create instance", err);
      return;
   }
   var instanceId = data.Instances[0].InstanceId;
   console.log("Created instance", instanceId);
   params = {Resources: [instanceId], Tags: [
      {
         Key: 'Name',
         Value: 'SampleInstance'
      }
   ]};
   ec2.createTags(params, function(err) {
      console.log("Tagging instance", err ? "failure" : "success");
   });
   //
   setTimeout(function() {
   ec2.describeInstances({InstanceIds: [instanceId]}, function(err, data) {
     if (err) {
       console.log("Error", err.stack);
     } else {
       console.log("Success.. The EC2's IP Address is: ",data.Reservations[0].Instances[0].PublicIpAddress);
     }
   });
   },10000)

});
