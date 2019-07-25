# strapi-provider-email-nodemailer-gmail-oauth2

## Note
This package is a fork of the [strapi-provider-email-nodemailer-gmail-oauth2](https://www.npmjs.com/package/strapi-email-nodemailer-gmail-oauth2). This is an exact copy but with the [required name change for Strapi Beta](https://strapi.io/documentation/3.0.0-alpha.x/guides/email.html#usage).

## Usage

1) [Create a service account](https://console.cloud.google.com/iam-admin/serviceaccounts/)
2) Use your Client (Unique) id and a (new) Private key 
3) Use an exiting gmail username (within your domain/project)
4) Use your username as 'From' and 'Reply-To'

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
