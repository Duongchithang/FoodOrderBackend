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

  name: "strapi::body",
  config: {
    formLimit: "256mb", // modify form body
    jsonLimit: "256mb", // modify JSON body
    textLimit: "256mb", // modify text body
    formidable: {
      maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
    },
  },

  // ...
});
