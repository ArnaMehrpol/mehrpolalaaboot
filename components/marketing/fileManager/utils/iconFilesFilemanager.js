const iconFileFileManager = (nameFile) =>{
  if(nameFile.search(".png") !== -1 || nameFile.search(".jpeg") !== -1 ||
  nameFile.search(".jpg") !== -1 || nameFile.search(".svg") !== -1 || 
  nameFile.search(".svg") !== -1){
    return ('image')
  }else if(nameFile.search(".doc") !== -1 || nameFile.search(".docx") !== -1 ||
  nameFile.search(".dot") !== -1 || nameFile.search(".dotx") !== -1 ){
    return <i className="bi bi-file-earmark-word-fill text-blue-600 bg-white rounded-md"></i> 
  }else if(nameFile.search(".xlsx") !== -1 || nameFile.search(".xml") !== -1 ||
          nameFile.search(".xls") !== -1 || nameFile.search(".xla") !== -1){
            return <i className="bi bi-file-earmark-excel-fill text-green-600 bg-white rounded-md"></i>
  }else if(nameFile.search(".pdf") !== -1){
    return <i className="bi bi-file-earmark-pdf-fill rounded-lg text-red-700 bg-white"></i> 
  }else if(nameFile.search(".mp3") !== -1 ){
    return <i className="bi bi-file-earmark-music"></i>
  }else if(nameFile.search(".mp4") !== -1){
    return <i className="bi bi-filetype-mp4-fill text-blue-400 bg-white"></i>
  }else if(nameFile.search(".exe") !== -1){
    return <i className="bi bi-filetype-exe-fill text-blue-400 bg-white"></i>
  }else if(nameFile.search(".txt") !== -1){
    return <i className="bi bi-filetype-txt-fill text-blue-400 bg-white"></i> 
  }else if(nameFile.search(".html") !== -1 ){
    return <i className="bi bi-filetype-html text-blue-400 bg-white"></i>
  }else if(nameFile.search(".zip") !== -1 || nameFile.search(".rar") !== -1){
    return <i class="bi bi-file-earmark-zip-fill text-orange-600 bg-white rounded-md"></i>
  }else
    return <i class="bi bi-files"></i>
}

export {iconFileFileManager}