 Karma-Mocha-BrowserStack Example
=========

Sample to test parallel runs of Karma JS using Mocha and Chai frameworks with BrowserStack. This example contains advanced reporting features to report test session statuses on BrowserStack using karma-browserstack-launcher (branch: reporting_enhancements) (https://github.com/samirans89/karma-browserstack-launcher/tree/reporting_enhancements).

### Prerequisites
Node and npm

### Clone this repository
`git clone https://github.com/samirans89/karma-mocha-browserstack-example.git`

### Install dependencies

Navigate to appropriate directory for testing and then install the dependencies by running

`npm install`

### BrowserStack Configuration

Export the environment variables for the username and access key of your BrowserStack account.
These can be found on the automate accounts page on [BrowserStack](https://www.browserstack.com/accounts/automate).

`export BROWSERSTACK_USERNAME=<browserstack-username>`

`export BROWSERSTACK_KEY=<browserstack-access-key>`

You can further customize configuration in karma.conf.js. For detailed reference, visit karma-browserstack-launcher github repository [here](https://github.com/samirans89/karma-browserstack-launcher).

#### Run the tests

Execute the following command to run the karma tests:

`npm test`
