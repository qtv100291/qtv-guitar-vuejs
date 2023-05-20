import axios from "./index";

const apiEndpoint = "/accessories";

export async function getAccessoriesData(accessoriesId) {
  let accessoriesData;
  if (Array.isArray(accessoriesId)) {
    accessoriesData = await Promise.all(
      accessoriesId.map((id) => axios.get(apiEndpoint + "/" + id))
    );
  } else {
    accessoriesData = await axios.get(apiEndpoint + "/" + accessoriesId);
  }
  return accessoriesData;
}

export async function getAccessoriesList(queryString) {
  const AccessoriesList = await axios.get(
    `${apiEndpoint}${queryString ? `/${queryString}` : ""}`
  );
  return AccessoriesList;
}
