<div key={file.id} className="m-1 relative">
  <div
    onClick={() => {
      setDbSlideId(file.id);
      modalHandler();
    }}
    className="absolute mr-2 mt-2 myPointer z-20"
  >
    <i className="bi bi-trash text-danger"></i>
  </div>
  <div className=" myVideoCard overflow-hidden silideScale">
    <video
      controls
      onChange={(e) => {
        setSlideId(file.id);
      }}
      src={file.full_link}
      className="rounded-md myVideoCard"
    ></video>
  </div>
  <h2 className="text-center bold mt-1 ">{file.name}</h2>
  <p className="text-center mt-1 ">{file.description}</p>
</div>;
