# strapi-provider-email-gmail-oauth2

## Note
This package is a fork of the [strapi-provider-email-nodemailer-gmail-oauth2](https://www.npmjs.com/package/strapi-email-nodemailer-gmail-oauth2). This is to meet the [new required name for Strapi Beta](https://strapi.io/documentation/3.0.0-alpha.x/guides/email.html#usage). Also changed the OAuth from 2LO Service to 3LO client.

## Usage

1) [Enable Gmail API](https://console.developers.google.com/apis/library/gmail.googleapis.com)
2) [Create OAuth Credential](https://console.developers.google.com/apis/credentials)
3) Set the Authorized Redirect to [https://developers.google.com/oauthplayground](https://developers.google.com/oauthplayground)
4) Take note of your Client ID and Client Secret.
4) Navigate to [https://developers.google.com/oauthplayground](https://developers.google.com/oauthplayground). 
5) In settings, activate "Use your own OAuth credentials". Copy your Client ID and Client Secret.
6) Set scopes to [https://mail.google.com](https://mail.google.com).
7) Exchange Authorization Code.
8) Take note of Refresh and Access Token.
9) Copy credentials in [your host]/admin/plugins/email/configurations/.

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
