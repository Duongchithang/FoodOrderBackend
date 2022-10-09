module.exports = {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;
    let html = ``;
    if (result) {
      const data = await strapi.query("api::order.order").findOne({
        where: { id: result.id },
        populate: true,
      });
      console.log(data);
      const cusName = data.users_permissions_user.FullName;
      const address = data.users_permissions_user.Address;
      const phoneNumber = data.users_permissions_user.PhoneNumber;
      const carts = data.category_order_cards;

      html = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SendMail</title>
    
</head>
<body>
     <div style="display:flex ; justify-content:center; flex-direction: column; align-items: center;">
             <h2>Cám ơn bạn đã đặt tiệc</h2>
             <p  style="color: rgba(0, 0, 0, 0.6); width:500px; text-align: center;">Chào ${cusName}, cám ơn bạn đã tin tưởng và đặt tiệc ở EzTiec, chúng tôi chân thành cảm ơn và chúc bạn có những trải nghiệm
                tuyệt vời với dịch vụ của chúng tôi!</p>
          <div class="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Menu</th>
                            <th>Số Lượng</th>
                            <th>Đơn giá</th>
                            <th>Tổng giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        
                            
                        </tr>
                     
                    </tbody>
                </table>
                <div class="row justify-content-end">
                    <div class="col-2">
                        <h6>Tổng cộng</h6>
                    </div>
                    <div class="col-3">
                        <h6>Value</h6>
                    </div>
                </div>
          </div>
     </div>
</div>
</body>
</html>`;
      //   carts.forEach((e) => {
      //     html =
      //       html +
      //       `

      //         `;
      //   });
    }

    try {
      await strapi.plugins["email"].services.email.send({
        to: "lol2002xxx@gmail.com",
        from: "tungle3001.itfreelancer@gmail.com", // e.g. single sender verification in SendGrid
        cc: "tungle3001.itfreelancer@gmail.com",
        bcc: "tungle3001.itfreelancer@gmail.com",
        replyTo: "tungle3001.itfreelancer@gmail.com",
        subject: "Send from EzTiec",
        text: `Hi User`, // Replace with a valid field ID
        html: html,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
