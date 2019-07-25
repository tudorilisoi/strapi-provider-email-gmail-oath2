# strapi-provider-email-gmail-oauth2

## Note
This package is a fork of the [strapi-provider-email-nodemailer-gmail-oauth2](https://www.npmjs.com/package/strapi-email-nodemailer-gmail-oauth2). This is to meet the [new required name for Strapi Beta](https://strapi.io/documentation/3.0.0-alpha.x/guides/email.html#usage). (Note: This package uses a Client ID and Client Secret instead of a Private Key)

## Usage

1) [Create a new project](https://console.developers.google.com)
2) [Enable Gmail API](https://console.developers.google.com/apis/library/gmail.googleapis.com)
3) [Create OAuth client ID](https://console.developers.google.com/apis/api/gmail.googleapis.com/credentials)
4) Use your Client ID and Client Secret in [Strapi](https://strapi.io/documentation/3.0.0-alpha.x/guides/email.html#usage)

- Optional: Use an alias as 'From' or 'Reply-To'

## Resources

- [MIT License](LICENSE.md)

## Links

- [Strapi website](http://strapi.io/)
- [Strapi community on Slack](http://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)

## Installation

```bash
npm i strapi-provider-email-gmail-oauth2
```
