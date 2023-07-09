const buildHistoryTrade = (shoppingCart) => {
  const dateSave = (function () {
    let date = new Date().getDate().toString();
    if (date < 10) {
      date = `0${date}`;
    }
    return date;
  })();

  const monthSave = (function () {
    let month = (new Date().getMonth() + 1).toString();
    if (month < 10) {
      month = `0${month}`;
    }
    return month;
  })();
  const yearSave = new Date().getFullYear();
  const timeNow = `${dateSave}/${monthSave}/${yearSave}`;
  for (let i = 0; i < shoppingCart.length; i++) {
    shoppingCart[i].time = timeNow;
  }
  return shoppingCart;
};

function GetPaymentInfo(data, shoppingCart) {
  this.receiverName = data.receiverName;
  this.phone = data.receiverPhone;
  this.address = {
    province: data.receiverProvince,
    district: data.receiverDistrict,
    commune: data.receiverCommune,
    street: data.receiverStreet,
  };
  this.note = data.reciverNote;
  this.paymentMethod = data.paymentMethod;
  if (data.paymentMethod === "card") {
    this.cardInfo = {
      cardType: data.cardType,
      cardOwner: data.cardOwner,
      cardExpireDate: data.cardExpireDate,
      cardCvv: data.cardCvv,
    };
  }
  this.orderList = [...shoppingCart];
}

function getTime() {
  const time = new Date();
  const year = time.getFullYear();
  const date = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();
  const month =
    time.getMonth() < 9 ? `0${time.getMonth() + 1}` : time.getMonth() + 1;
  return `${date} - ${month} - ${year}`;
}

module.exports = {
  GetPaymentInfo,
  buildHistoryTrade,
  getTime,
};
