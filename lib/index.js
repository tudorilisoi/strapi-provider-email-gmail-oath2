"use strict"

/**
 * Module dependencies
 */

/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-template */
// Public node modules.
const nodemailer = require("nodemailer")
const { google } = require("googleapis")
const { removeUndefined } = require('strapi-utils')

/* eslint-disable no-unused-vars */
module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    const auth = {
      type: "oauth2",
      user: providerOptions.username,
      clientId: providerOptions.clientId,
      clientSecret: providerOptions.clientSecret,
      refreshToken: providerOptions.refreshToken,  
    }


    return {
      send: async options => {
        const accessToken = await getGmailAccessToken(auth.clientId, auth.clientSecret, auth.refreshToken)
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            ...auth,
            accessToken,
          },
        })

        // return new Promise((resolve, reject) => {
        const { from, to, cc, bcc, replyTo, subject, text, html, ...rest } = options

        let msg = {
          from: from || settings.defaultFrom,
          to,
          cc,
          bcc: bcc || settings.bcc,
          replyTo: replyTo || settings.defaultReplyTo,
          subject,
          text,
          html,
          ...rest,
        }
        // console.log(`sending mail....`, removeUndefined(msg))
        transporter.sendMail(removeUndefined(msg), function (err) {
          if (err) {
            console.log(err)
            throw ([{
              messages: [
                { id: 'Auth.form.error.email.invalid' },
                { mailer_error: err.message },
              ]
            }])
          } else {
            console.log(`mail sent`, msg)
          }
        })
        // })
      },
    }
  },
}

// see https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1
async function getGmailAccessToken(clientId, clientSecret, refreshToken) {
  const cache = getGmailAccessToken.CACHE
  if (cache) {
    if (cache.expires > new Date().getTime()) {
      console.log(`cached token`)
      return cache.token
    } else {
      console.log(`expired token`)
    }
  }

  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    clientId, // ClientID
    clientSecret, // Client Secret
    // "https://mail.google.com" // Redirect URL
    "https://developers.google.com/oauthplayground" // Redirect URL, seems irrelevant
  );
  oauth2Client.setCredentials({
    refresh_token: refreshToken
  });
  const res = await oauth2Client.getAccessToken()
  console.log(`getGmailAccessToken -> accessToken`, res.token)

  getGmailAccessToken.CACHE = {
    // TODO change expiry to actual token expiration
    expires: new Date().getTime() + 3000 * 1000, //3k seconds
    token: res.token,
  }
  console.log(`got token`, getGmailAccessToken.CACHE)

  return res.token

}
