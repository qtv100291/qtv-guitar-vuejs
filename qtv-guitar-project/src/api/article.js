import axios from "./index";

const apiEndpoint = "/article";

export async function getArticle(id) {
  const articleData = await axios.get(apiEndpoint + "/" + id);
  return articleData;
}
