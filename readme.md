# AWS Lambda

AWS Lambda is a serverless compute service that enables you to run code in response to events without the need to provision or manage servers. Lambda automatically scales your applications and charges you only for the compute time consumed.

## Running Lambda on AWS

To learn how to deploy and run Lambda functions on AWS, follow this tutorial:

### Watch the video tutorial:
[AWS Lambda by Rahul Wagh](https://youtu.be/XFGSuj83wdc?si=DKYSch3pbxEjAhDV)

## Running Lambda Locally

To run AWS Lambda locally, follow these steps:

### 1. Install the Serverless Framework

First, install the Serverless Framework globally using npm:

```bash
npm i -g serverless
```

### 2. Install Dependencies for Your Project

Navigate to your project directory and install the necessary dependencies:

```bash
npm install -D serverless-offline
```

### 3. Configure serverless.yaml

Create a `serverless.yaml` file in your project’s root directory and add the following configuration:

```yaml
service: image-resizer

provider:
  name: aws
  runtime: nodejs14.x

functions:
  app:
    handler: index.handler # 'index' is the name of the main file
    events:
      - http:
          path: resize-image
          method: post # Add other routes if present

plugins:
  - serverless-offline
```

Make sure to adjust the function names and event paths according to your application.

### 4. Run Lambda Locally

Run the following command to start the AWS Lambda function locally using the Serverless Framework:

```bash
serverless offline
```

After running the command, your Lambda function will be available locally on `http://localhost:3000` or another port as indicated in the terminal.

---

### Hurray! 🎉

Your AWS Lambda function is now running locally! You can test and interact with it before deploying to AWS.
