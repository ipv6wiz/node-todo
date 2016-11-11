module.exports = {
    //remoteUrl : 'mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu',
    remote: {
        Url: 'mongodb://ec2-54-183-160-10.us-west-1.compute.amazonaws.com:27017',
        Options: {
            user: 'madmin',
            pass: 'Plethy1320#dev2016',
            authMechanism: 'SCRAM-SHA-1',
            db: {
                databaseName: 'meanstacktutorials',
                options: {
                    authSource: 'admin'
                }
            }
        }
    }
    ,local: {
        Url: 'mongodb://localhost/meanstacktutorials',
        Options: {}
    }
};
