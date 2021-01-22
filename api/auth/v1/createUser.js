const { get } = require('deep-object-js');
const { getBody } = require('aws-lambda-utils-js');

const processParameters = event => {
  const body = getBody(event);

  return  {
    username: get(body, 'username'),
    password: get(body, 'password')
  }
}

exports.run = event => {
  const parameters = processParameters(event);

  return {
    statusCode: 200,
    body: parameters,
  };
}