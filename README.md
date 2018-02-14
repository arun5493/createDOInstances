CSC-519-HW1-A
===================
Using NodeJS to create instances of AWS and Digital Ocean and printing out their IP Address

 **Unity ID:**  ajagana
 **Name:**  Arun Jaganathan

### Setup

1. Make sure you have [git](http://git-scm.com/) installed, as well as [node.js](http://nodejs.org/)
2. Start with **forking** this repository.
3. Clone local copy 

`git clone https://github.ncsu.edu/HW1-A`

##### Using package manager, install dev dependencies

`npm install`

##### Set your token for Digital Ocean 

```
# Mac/Linux
export DOTOKEN="xxx"
# Windows
setx DOTOKEN xxx
```



#### 1. Provisioning Servers

Code for creating Amazon EC2 instance: aws.js

Code for creating Droplet: do.js

Code that calls both the files: index.js

#### 2. Configuration Management 

The required packages and dependencies are installed via the package.json file.

We need to set the required environment variables such as DOTOKEN.

#### For Amazon AWS:

Create a shared credentials file in the following location:
```
Linux, Unix, and macOS users: ~/.aws/credentials
Windows users: C:\Users\USER_NAME\.aws\credentials
```

In that file, write the following:

```
[default]
aws_access_key_id = <YOUR_ACCESS_KEY_ID>
aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
```

AWS_ACCESS_KEY_ID specifies the Access Key ID of  Amazon EC2.
AWS_SECRET_ACCESS_KEY specifies the Secret Access Key of Amazon EC2.

DOTOKEN specifies the token of droplet in Digital Ocean.


#### 3. Concepts

##### Idempotency

Idempotency is the property where a particular operation can be performed multiple times without altering the initial state. This term was devised by Benjamin Pierce in the context of algebras. The word literally means "quality of having the same power".

Example of an idempotent operation includes:

```
a = 10;
```
Example of non-idempotent operation includes:

```
b--;
```

In the first example, it does not matter how many times the statement gets executed. The value of a will still remain 10 always.

However, in the second example, if the command is executed twice, the value of b will become b-2. It will be altered. Hence this is an example of non-idempotent operation.

##### Issues related to management of Inventory

###### Inaccurate Needs Analysis

Identifying what is needed by a particular software or product is very important. If this requirement analysis is not done properly, the analysis ends up being too narrow and it causes a huge problem eventually.

###### Decentralized Design

A decentralized design can be thought of as inexpensive initially, but ultimately it causes a problem as the softwares might involve dependencies and they may cause bottlenecks while runnning the code.

###### No System Optimization

Optimization helps in cost-control and without this, the product will not be planned in a proper way and can involve sudden costs and end up becoming very expensive. Proper system optimization is needed so the product is well-planned and the required elements are all present.

##### Configuration Models

The two configuration models are Push and Pull. 

Push Model

This model is easy to manage. It also involves less stage enforcement. ASSET management is done centrally. There is high inventory and it is producer-centric. It can also forecast demand.

Pull Model

This model is better at ensuring whether given ASSETS stay in synchronization. However, the disadvantage is that it is more complex. One other thing is that, the ASSET can register itself.
There is limited inventory and the model is consumer-centric. 

##### Consequences of not having proper Configuration Management

When configuration management is  applied over the life cycle of a system, it provides visibility and control of its performance. It also provides physical and functional attributes. It also ensures that a product is developed as it is mentioned in the requirements and keeps up with the needs and changes. Vulnerability is avoided using CM. System changes are handled very well using configuration management and it improves performance, capability, maintainability, reliability. Extra costs that might occur eventually are avoided using CM.




#### 4. Screencast

Here is a [link](https://www.youtube.com/watch?v=CBsy5xRmXpg) for the screencast video showing the required steps.







