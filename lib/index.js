"use strict";

/**
 * Module dependencies
 */

/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-template */
// Public node modules.
const nodemailer = require("nodemailer");
const { removeUndefined } = require('strapi-utils');

/* eslint-disable no-unused-vars */
module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    const auth = {
      type: "oauth2",
      user: providerOptions.username,
      clientId: providerOptions.clientId,
      clientSecret: providerOptions.clientSecret,
      refreshToken: providerOptions.refreshToken,
      // accessToken: providerOptions.accessToken,
      // expires: 1484314697598
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth,
    });

    return {
      send: options => {
        return new Promise((resolve, reject) => {
          const { from, to, cc, bcc, replyTo, subject, text, html, ...rest } = options;

          let msg = {
            from: from || settings.defaultFrom,
            to,
            cc,
            bcc,
            replyTo: replyTo || settings.defaultReplyTo,
            subject,
            text,
            html,
            ...rest,
          };
          // console.log(`sending mail....`, removeUndefined(msg))
          transporter.sendMail(removeUndefined(msg), function (err) {
            if (err) {
              console.log(err)
              reject([{
                messages: [
                  { id: 'Auth.form.error.email.invalid' },
                  { mailer_error: err.message },
                ]
              }]);
            } else {
              resolve();
            }
          });
        });
      },
    };
  },
};
