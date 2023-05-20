import axios from "./index";

const apiEndpoint = "/guitarData";

export async function getGuitarData(guitarId) {
  let guitarData;
  if (Array.isArray(guitarId)) {
    guitarData = await Promise.all(
      guitarId.map((id) => axios.get(apiEndpoint + "/" + id))
    );
  } else {
    guitarData = await axios.get(apiEndpoint + "/" + guitarId);
  }
  return guitarData;
}

export async function getGuitarDataList(guitarType) {
  const guitarList = await axios.get(apiEndpoint + "/" + guitarType);
  return guitarList;
}
