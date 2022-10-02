// module.exports = () => {
//   return {
//     ckeditor: true,
//   };
// };

module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "tungle3001.itfreelancer@gmail.com",
        defaultReplyTo: "tungle3001.itfreelancer@gmail.com",
      },
    },
  },
  // ...
});
