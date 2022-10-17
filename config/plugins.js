// module.exports = () => {
//   return {
//     ckeditor: true,
//   };
// };

module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 587),

        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "hello@eztiec.com",
        defaultReplyTo: "hello@eztiec.com",
      },
    },
  },
  // ...
});
