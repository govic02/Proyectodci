# ICD App

## Contenido
1. [General Info](#general-info)
2. [Local Installation](#local-installation)
3. [AWS Configuration](#aws-configuration)
# General Info
***
This documentation includes the general aspects to consider to run the app in a local environment and how it is deployed in a productive AWS environment.
# Local Installation
***
Instructions for local installation:
```
$ git clone https://github.com/govic/icd.git
$ cd icd
$ npm i
$ npm start
```
In some cases a problem could arise with the installation of deprecated dependencies, a possible solution is to use the ```npm i --legacy-peer-deps``` command.
# AWS Configuration
***
The configuration to deploy to a productive AWS environment is contained in the buildspec.yml file that indicates how AWS should install the dependencies to then be packaged and sent to the EC2 server managed by EBS.

There is also an additional configuration for the NGINX server contained in the root folder structure from .platform, the specific file is app.conf, this includes redefining the NGINX variables to control maximum upload file size and maximum wait time for requests.