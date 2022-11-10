import { combineReducers } from "redux";

import dataReducer from "./loadData/LoadDataReducer";
import postFolderReducer from "./postFolder/PostFolderReducer";
import deleteFilesAndFolderReducer from "./deleteFilesAndFolder/DeleteFilesAndFolderReducer";
import postFilesReducer from "./postFiles/PostFilesReducer";

const rootReducer = combineReducers({
  loadData: dataReducer,
  postCreateFolder: postFolderReducer,
  deleteFilesAndFolder: deleteFilesAndFolderReducer,
  sendFilesToDataBase: postFilesReducer
})

export default rootReducer