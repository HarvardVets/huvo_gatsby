/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


const AWS = require('aws-sdk')

exports.handler = function(event, context) {
  AWS.config.update({ region: 'us-east-1' })
  console.log('Handling confirmation email to', event)

  // {event.name = String, event.email = String, event.message = String}

  // check that email is formatted correctly

  if (!event.email.match(/^[^@]+@[^@]+$/)) {
    console.log('Not sending: invalid email address', event)
    context.done(null, 'Failed')
    return
  }

  const name = event.name.substr(0, 40).replace(/[^\w\s]/g, '')

  const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <p>Message from ${event.name} -- ${event.email}</p>
        <p>${event.message}</p>
      </body>
    </html>
  `

  const textBody = `
Message from ${event.name} -- ${event.email} \n
${event.message}
  `

  // Create sendEmail params
  const params = {
    Destination: {
      ToAddresses: ['harvardvets@gmail.com']
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: htmlBody
        },
        Text: {
          Charset: 'UTF-8',
          Data: textBody
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Harvardvets.com message from ${event.name}`
      }
    },
    Source: 'harvardvets@gmail.com'
  }

  // Create the promise and SES service object
  const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' })
    .sendEmail(params)
    .promise()

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(data => {
      console.log(data.MessageId)
      context.done(null, 'Success')
    })
    .catch(err => {
      console.error(err, err.stack)
      context.done(null, 'Failed')
    })
}
