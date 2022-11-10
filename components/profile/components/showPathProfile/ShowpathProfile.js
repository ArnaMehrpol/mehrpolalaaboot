import React from 'react'

const ShowpathProfile = () => {
  return (
    <>
      {/* start breadcrumb  */}
      <div className="bg-white">
        <nav aria-label="profile-breadcrumb breadcrumb">
          <div className="breadcrumb rounded p-3 d-flex align-items-center">
            <div className="profile-breadcrumb-item breadcrumb-item">
              <i className="bi bi-house text-muted me-2"></i>
              <a href="#" className="text-decoration-none text-muted active">
                صفحه اصلی
              </a>
            </div>
            <div
              className="profile-breadcrumb-item breadcrumb-item text-muted"
              aria-current="page"
            >
              پروفایل
            </div>
            <div
              className="profile-breadcrumb-item breadcrumb-item text-muted"
              aria-current="page"
            >
              اطلاعات حساب کاربری
            </div>
          </div>
        </nav>
      </div>
      {/* end breadcrumb  */}
    </>
  )
}

export default ShowpathProfile
