import axios from "axios";
import Cookies from "universal-cookie";
import config from "../../utils/config";

const fetchDeleteFilesAndFolderRequest = () => {
  return {
    type: "FETCH_DELETE_FILES_AND_FOLDER_REQUEST",
  };
};
const fetchDeleteFilesAndFolderSuccess = (province) => {
  return {
    type: "FETCH_DELETE_FILES_AND_FOLDER_SUCCESS",
    payload: province,
  };
};

const fetchDeleteFilesAndFolderFailure = (error) => {
  return {
    type: "FETCH_DELETE_FILES_AND_FOLDER_FAILURE",
    payload: error,
  };
};
//`${process.env.NEXT_APP_BASE_URL}`
const fetchDeleteFilesAndFolder = (id_item) => {
  const cookies = new Cookies();
  const tokenId = cookies.get("token");
  const businessId = cookies.get("b-Id");

  return async (dispatch) => {
    console.log({ id_item });
    dispatch(fetchDeleteFilesAndFolderRequest());
    await axios({
      method: "post",
      url: `${config.api_url}/businesses/${businessId}/filemanager/delete-item/${id_item}`,
      data: {
        _method: "delete",
      },
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + tokenId,
      },
    })
      .then((response) => {
        const dataFiles = response.data;
        dispatch(fetchDeleteFilesAndFolderSuccess(dataFiles));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDeleteFilesAndFolderFailure(errorMsg));
      });
  };
};

export { fetchDeleteFilesAndFolder };
