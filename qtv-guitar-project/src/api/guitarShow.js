import axios from "./index";

const apiEndpoint = "/guitarShow";

export async function getGuitarShow(id) {
  const guitarShowData = await axios.get(apiEndpoint + "/" + id);
  return guitarShowData;
}

export async function getGuitarShowList() {
  const guitarShowListData = await axios.get(apiEndpoint);
  return guitarShowListData;
}
