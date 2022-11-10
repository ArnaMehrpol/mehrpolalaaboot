import React, { useState } from "react";
import ChooseFile from "./share/ChooseFile";

import styleMainRoot from "./MainRoot.module.css";

//کامپوننت ها برای انجام اعمال فراخوانی و ایجاد تغییرات در دیتابیس(Redux)
import { Provider } from "react-redux";
import store from "../redux/store";
import { useEffect } from "react";

const chooseFiles = [];
const MainRoot = ({
  closeMainRoot,
  rootFilesAddress,
  chooseFileFromMainRoot,
}) => {
  const [chooseFile, setChooseFile] = useState(false);
  const [addressRoot, setAddressRoot] = useState();

  const closeChooseFile = () => {
    setChooseFile((prevChooseFile) => (prevChooseFile = false));
  };

  const ChooseFileHandler = () => {};

  const chooseFileForSendInMainRootFunc = (chooseFilesFromChild) => {
    chooseFiles = chooseFilesFromChild;
  };

  const addressFilesRootFunc = (addressRootFiles) => {
    setAddressRoot(addressRootFiles);
  };

  useEffect(() => {}, []);

  console.log({ chooseFiles });
  console.log({ addressRoot });

  return (
    <Provider store={store}>
      <div hidden={!chooseFile}>
        <ChooseFile
          closeChooseFile={closeChooseFile}
          addressFilesRoot={addressFilesRootFunc}
          chooseFileForSendInMainRoot={chooseFileForSendInMainRootFunc}
        />
      </div>
      <span className={styleMainRoot.gh_containerSpan}>
        <div className={styleMainRoot.gh_containerDiv}>
          <div className="bg-[#ffffff] p-5 rounded-lg">
            <div className="flex justify-start items-center w-100 h-[100px] mb-4 border-2 rounded-lg bg-[#ffffff]">
              {chooseFiles &&
                chooseFiles.map((files) => (
                  <div className="border-2 rounded-lg mx-2" key={files.id}>
                    {files.type.search("folder") !== -1 ? (
                      <i className="bi bi-folder"></i>
                    ) : files.name.search(".png") !== -1 ||
                      files.name.search(".jpeg") !== -1 ||
                      files.name.search(".jpg") !== -1 ||
                      files.name.search(".svg") !== -1 ||
                      files.name.search(".svg") !== -1 ? (
                      addressRoot && (
                        <img
                          className="w-[70px]"
                          src={`${addressRoot}/${files.name}`}
                          alt={files.name}
                        />
                      )
                    ) : // <i className="bi bi-file-earmark-ppt"></i> :
                    files.name.search(".doc") !== -1 ||
                      files.name.search(".docx") !== -1 ||
                      files.name.search(".dot") !== -1 ||
                      files.name.search(".dotx") !== -1 ? (
                      <i className="bi bi-file-earmark-word"></i>
                    ) : files.name.search(".xlsx") !== -1 ||
                      files.name.search(".xml") !== -1 ||
                      files.name.search(".xls") !== -1 ||
                      files.name.search(".xla") !== -1 ? (
                      <i className="bi bi-file-earmark-excel"></i>
                    ) : files.name.search(".pdf") !== -1 ? (
                      <i className="bi bi-file-earmark-pdf"></i>
                    ) : files.name.search(".mp3") !== -1 ? (
                      <i className="bi bi-file-earmark-music"></i>
                    ) : files.name.search(".mp4") !== -1 ? (
                      <i className="bi bi-filetype-mp4"></i>
                    ) : files.name.search(".exe") !== -1 ? (
                      <i className="bi bi-filetype-exe"></i>
                    ) : files.name.search(".txt") !== -1 ? (
                      <i className="bi bi-filetype-txt"></i>
                    ) : files.name.search(".html") !== -1 ? (
                      <i className="bi bi-filetype-html"></i>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
            </div>
            <div className={styleMainRoot.gh_chosenArea}>
              <div className={styleMainRoot.gh_buttonArea}>
                <button
                  onClick={() =>
                    setChooseFile((prevChooseFile) => (prevChooseFile = true))
                  }
                >
                  مدیریت فایل
                </button>
                <i className="bi bi-cloud-plus mr-2"></i>
              </div>
              <button
                className="bg-red-600 px-8 py-1 rounded-md text-[#ffffff] cursor-pointer hover:bg-red-700"
                onClick={() => {
                  closeMainRoot();
                  rootFilesAddress(addressRoot);
                  chooseFileFromMainRoot(chooseFiles);
                }}
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      </span>
    </Provider>
  );
};

export default MainRoot;
