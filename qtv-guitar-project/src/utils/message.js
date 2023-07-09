import clientMessage from "../assets/message/clientMessage.json";
import serverMessage from "../assets/message/serverMessage.json";

export function getClientMessage(message) {
  return clientMessage[message] ? clientMessage[message] : "Đã có lỗi xảy ra, xin thử lại";
}

export function getServerMessage(message) {
  return serverMessage[message] ? serverMessage[message] : "Đã có lỗi xảy ra, xin thử lại";
}
