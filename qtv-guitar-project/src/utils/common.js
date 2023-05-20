function sortAToZ(array) {
  const arraySorted = array.sort((a, b) => {
    return a.albumName.localeCompare(b.albumName);
  });
  return arraySorted;
}

function sortZToA(array) {
  const arraySorted = sortAToZ(array).reverse();
  return arraySorted;
}

function sortPriceMinToMax(array) {
  return array.sort((a, b) => {
    return (
      parseInt(a.price.replace(/\D/g, "")) -
      parseInt(b.price.replace(/\D/g, ""))
    );
  });
}

function sortPriceMaxToMin(array) {
  return array.sort((a, b) => {
    return -(
      parseInt(a.price.replace(/\D/g, "")) -
      parseInt(b.price.replace(/\D/g, ""))
    );
  });
}

function productSortBy(albumList, sortOrderBy = "Name A To Z") {
  let sortedAlbum;
  switch (sortOrderBy) {
    case "Name A To Z":
      sortedAlbum = sortAToZ(albumList);
      break;
    case "Name Z To A":
      sortedAlbum = sortZToA(albumList);
      break;
    case "Price Up":
      sortedAlbum = sortPriceMinToMax(albumList);
      break;
    case "Price Down":
      sortedAlbum = sortPriceMaxToMin(albumList);
      break;
    default:
      break;
  }
  return sortedAlbum;
}

function separator1000(num) {
  // 1000 separator
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function getAlbumId(path) {
  const pathArray = path.split("-");
  const albumId = pathArray[pathArray.length - 1];
  return albumId;
}

function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

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

function getCssStyle(element, cssProperty) {
  const cssObj = window.getComputedStyle(element, null);
  let dimension = cssObj.getPropertyValue(cssProperty);
  return Number(dimension.replace("px", ""));
}

function setLocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

function getLocalStorage(name) {
  const data = JSON.parse(localStorage.getItem(name));
  return data;
}

function composeFunction(input, ...funcArray) {
  let text = "";
  for (let i = 0; i < funcArray.length; i++) {
    text = funcArray[i](input);
    if (text) return text;
  }
}

function checkEmpty(input) {
  if (input.length) return "";
  return "Bạn phải điền vào mục này";
}

function checkEmailValidation(input) {
  // eslint-disable-next-line no-useless-escape
  const MAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.match(MAIL_FORMAT)) return "";
  return "Email không đúng định dạng";
}

function checkRecheckPassword(firstInput, secondInput) {
  if (firstInput === secondInput) return "";
  else return "Mật khẩu không khớp";
}

function onInputOnlyDigit(input) {
  let check = /^\d+$/.test(input);
  if (check) return input;
  else {
    var reInput = input.replace(/\D/g, "");
  }
  return reInput;
}

function limitCharacter(input, limitNumber) {
  if (input.length <= limitNumber) return input;
  else {
    var reInput = input.substring(0, limitNumber);
  }
  return reInput;
}

function outerWidthCal(element) {
  const style = window.getComputedStyle(element);
  const marginRight = style.marginRight;
  const marginLeft = style.marginLeft;
  const elementWidth = element.offsetHeight;
  return elementWidth + parseInt(marginRight) + parseInt(marginLeft);
}

function animate(element, styleObject, time) {
  setTimeout(() => {
    element.style.transition = `${time / 1000}s`;
    for (let style in styleObject) {
      element.style[style] = styleObject[style];
    }
  });
  setTimeout(() => {
    element.style.removeProperty("transition");
  }, time);
}

export {
  sortAToZ,
  sortZToA,
  sortPriceMinToMax,
  sortPriceMaxToMin,
  separator1000,
  productSortBy,
  getAlbumId,
  removeAccents,
  GetPaymentInfo,
  buildHistoryTrade,
  getCssStyle,
  setLocalStorage,
  getLocalStorage,
  composeFunction,
  checkEmpty,
  checkEmailValidation,
  checkRecheckPassword,
  onInputOnlyDigit,
  limitCharacter,
  outerWidthCal,
  animate,
};
