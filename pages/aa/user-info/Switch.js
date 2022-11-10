// import React, { useState } from "react";
// import axios from "axios";
// import Cookies from "universal-cookie";
// import { toast } from "react-toastify";

// const Switch = (props) => {
//   const [link, setLink] = useState("");
//   const cookies = new Cookies();
//   const handleSubmitSocial = (e) => {
//     e.preventDefault();
//     console.log(link);
//     console.log(type);
//     axios
//       .post(
//         url + "api/businesses/" + cookies.get("b-Id") + "/social-networks",
//         {
//           link: props.link,
//           type: type,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${cookies.get("token")}`,
//           },
//         }
//       )
//       .then(function (response) {
//         const data = response.data();

//         toast.success("اطلاعات با موفقیت ثبت شد!");
//       })
//       .catch((error) => {
//         toast.error("ثبت اطلاعات با مشکل مواجه شد. لطفا دوباره سعی نمایید!");
//         console.log(error.message);
//       });
//   };

//   switch (props.type) {
//     case "whatsapp":
//       return (
//         <>
//           {/* <div className="social-input mt-3">
//             <label className="text-xs text-slate-500 mb-2 ">واتساپ</label>
//             <div className="social-input-group input-group mb-3 placeholder-slate-300">
//               <input
//                 onChange={(e) =>
//                   setLink("https://wa.me/+98" + e.target.value.toString())
//                 }
//                 type="number"
//                 className="form-control"
//                 id="basic-url"
//                 aria-describedby="basic-addon3"
//                 placeholder="شماره همراه خود را بدون صفر وارد کنید"
//               />

//               <div
//                 className="input-group-text input-group-text-whatsapp bg-slate-50 text-xs text-slate-400 flex relative"
//                 id="basic-addon3"
//               >
//                 <div className="absolute right-[-36px]">۹۸ +</div>
//                 <span className="text-slate-500">whatsapp</span>

//                 <button className="text-danger me-2 fs-6">
//                   <i class="bi bi-trash"></i>
//                 </button>
//               </div>
//             </div>
//           </div> */}
//           <div className="save-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
//             <button
//               onClick={(e) => handleSubmitSocial}
//               type="submit"
//               className="btn btn-primary mt-3"
//             >
//               ثبت
//             </button>
//           </div>
//         </>
//       );
//       break;
//     case "instagram":
//       return (
//         <>
//           {/* <div className="social-input mt-3">
//             <label className="text-xs text-slate-500 mb-2">اینستاگرام</label>
//             <div className="social-input-group input-group mb-3 placeholder-slate-300">
//               <input
//                 onChange={(e) =>
//                   setLink("https://www.instagram.com/" + e.target.value)
//                 }
//                 type="text"
//                 className="form-control"
//                 id="basic-url"
//                 aria-describedby="basic-addon3"
//                 placeholder="نام کاربری اینستاگرام خود را وارد فرمایید"
//               />

//               <div
//                 className="input-group-text bg-slate-50 text-xs text-slate-400 flex relative"
//                 id="basic-addon3"
//               >
//                 <span className="text-slate-500">instagram</span>

//                 <button className="text-danger me-2 fs-6">
//                   <i class="bi bi-trash"></i>
//                 </button>
//               </div>
//             </div>
//           </div> */}
//           <div className="save-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
//             <button
//               onClick={(e) => {
//                 handleSubmitSocial;
//               }}
//               type="submit"
//               className="btn btn-primary mt-3"
//             >
//               ثبت
//             </button>
//           </div>
//         </>
//       );
//       break;
//     case "linkedin":
//       return (
//         <>
//           {/* <div className="social-input mt-3">
//             <label className="text-xs text-slate-500 mb-2">لینکداین</label>
//             <div className="social-input-group input-group mb-3 placeholder-slate-300">
//               <input
//                 onChange={(e) => setLink(e.target.value)}
//                 type="text"
//                 className="form-control"
//                 id="basic-url"
//                 aria-describedby="basic-addon3"
//                 placeholder="لینک پروفایل Linkedin خود را وارد فرمایید"
//               />
//               <div
//                 className="input-group-text bg-slate-50 text-xs text-slate-400  flex relative"
//                 id="basic-addon3"
//               >
//                 <span className="text-slate-500 mr-[22px]">linkdin</span>

//                 <button className="text-danger me-2 fs-6">
//                   <i class="bi bi-trash"></i>
//                 </button>
//               </div>
//             </div>
//           </div> */}
//           <div className="save-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
//             <button
//               onClick={(e) => {
//                 handleSubmitSocial;
//               }}
//               type="submit"
//               className="btn btn-primary mt-3"
//             >
//               ثبت
//             </button>
//           </div>
//         </>
//       );
//       break;
//     case "telegram":
//       return (
//         <>
//           <div className="social-input mt-3">
//             <label className="text-xs text-slate-500 mb-2">تلگرام</label>
//             <div className="social-input-group input-group mb-3 placeholder-slate-300">
//               <input
//                 onChange={(e) => setLink(e.target.value)}
//                 type="text"
//                 className="form-control"
//                 id="basic-url"
//                 aria-describedby="basic-addon3"
//                 placeholder="ID تلگرام خود را وارد نمایید"
//               />

//               <div
//                 className="input-group-text bg-slate-50 text-xs text-slate-400  flex relative"
//                 id="basic-addon3"
//               >
//                 <span className="text-slate-500 mr-[8px]">telegram</span>

//                 <button className="text-danger me-2 fs-6">
//                   <i class="bi bi-trash"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="save-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
//             <button
//               onClick={(e) => {
//                 handleSubmitSocial;
//               }}
//               type="submit"
//               className="btn btn-primary mt-3"
//             >
//               ثبت
//             </button>
//           </div>
//         </>
//       );
//       break;
//     case "facebook":
//       return (
//         <>
//           {/* <div className="social-input mt-3">
//             <label className="text-xs text-slate-500 mb-2">فیس بوک</label>
//             <div className="social-input-group input-group mb-3 placeholder-slate-300">
//               <input
//                 onChange={(e) => setLink(e.target.value)}
//                 type="text"
//                 className="form-control"
//                 id="basic-url"
//                 aria-describedby="basic-addon3"
//                 placeholder=" لینک پیج فیس بوک خود را وارد نمایید"
//               />

//               <div
//                 className="input-group-text bg-slate-50 text-xs text-slate-400 flex relative"
//                 id="basic-addon3"
//               >
//                 <span className="text-slate-500">facebook</span>

//                 <button className="text-danger me-2 fs-6">
//                   <i class="bi bi-trash"></i>
//                 </button>
//               </div>
//             </div>
//           </div> */}
//           <div className="save-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
//             <button
//               onClick={(e) => {
//                 handleSubmitSocial;
//               }}
//               type="submit"
//               className="btn btn-primary mt-3"
//             >
//               ثبت
//             </button>
//           </div>
//         </>
//       );
//       break;
//     case "aparat":
//       return (
//         <>
//           <div className="social-input mt-3">
//             <label className="text-xs text-slate-500 mb-2">آپارات</label>
//             <div className="social-input-group input-group mb-3 placeholder-slate-300">
//               <input
//                 onChange={(e) => setLink(e.target.value.toUpperCase)}
//                 type="text"
//                 className="form-control"
//                 id="basic-url"
//                 aria-describedby="basic-addon3"
//                 placeholder="نام کانال آپارت خود را وارد فرمایید"
//               />

//               <div
//                 className="input-group-text bg-slate-50 text-xs text-slate-400 flex relative"
//                 id="basic-addon3"
//               >
//                 <span className="text-slate-500">aparat</span>

//                 <button className="text-danger me-2 fs-6">
//                   <i class="bi bi-trash"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="save-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
//             <button
//               onClick={(e) => {
//                 handleSubmitSocial;
//               }}
//               type="submit"
//               className="btn btn-primary mt-3"
//             >
//               ثبت
//             </button>
//           </div>
//         </>
//       );
//       break;
//     case "youtube":
//       return (
//         <>
//           {/* <div className="social-input mt-3">
//             <label className="text-xs text-slate-500 mb-2">یوتیوب</label>
//             <div className="social-input-group input-group mb-3 placeholder-slate-300">
//               <input
//                 onChange={(e) => setLink(e.target.value)}
//                 type="text"
//                 className="form-control"
//                 id="basic-url"
//                 aria-describedby="basic-addon3"
//                 placeholder="لینک کانال یوتیوب خود را وارد نمایید"
//               />

//               <div
//                 className="input-group-text bg-slate-50 text-xs text-slate-400  flex relative"
//                 id="basic-addon3"
//               >
//                 <span className="text-slate-500 mr-[8px]">youtybe</span>

//                 <button className="text-danger me-2 fs-6">
//                   <i class="bi bi-trash"></i>
//                 </button>
//               </div>
//             </div>
//           </div> */}
//           <div className="save-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
//             <button
//               onClick={(e) => {
//                 handleSubmitSocial;
//               }}
//               type="submit"
//               className="btn btn-primary mt-3"
//             >
//               ثبت
//             </button>
//           </div>
//         </>
//       );
//       break;
//     case "twitter":
//       return (
//         <>
//           {/* <div className="social-input mt-3">
//             <label className="text-xs text-slate-500 mb-2">توییتر</label>
//             <div className="social-input-group input-group mb-3 placeholder-slate-300">
//               <input
//                 onChange={(e) => setLink(e.target.value)}
//                 type="text"
//                 className="form-control"
//                 id="basic-url"
//                 aria-describedby="basic-addon3"
//                 placeholder="لینک توییتر خود را وارد نمایید"
//               />

//               <div
//                 className="input-group-text bg-slate-50 text-xs text-slate-400  flex relative"
//                 id="basic-addon3"
//               >
//                 <span className="text-slate-500 mr-[8px]">twitter</span>

//                 <button className="text-danger me-2 fs-6">
//                   <i class="bi bi-trash"></i>
//                 </button>
//               </div>
//             </div>
//           </div> */}
//           <div className="save-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
//             <button
//               onClick={(e) => {
//                 handleSubmitSocial;
//               }}
//               type="submit"
//               className="btn btn-primary mt-3"
//             >
//               ثبت
//             </button>
//           </div>
//         </>
//       );
//       break;
//     case "skype":
//       return (
//         <>
//           {/* <div className="social-input mt-3">
//             <label className="text-xs text-slate-500 mb-2">اسکایپ</label>
//             <div className="social-input-group input-group mb-3 placeholder-slate-300">
//               <input
//                 onChange={(e) => setLink(e.target.value)}
//                 type="text"
//                 className="form-control"
//                 id="basic-url"
//                 aria-describedby="basic-addon3"
//                 placeholder="لینک اسکایپ خود را وارد نمایید"
//               />

//               <div
//                 className="input-group-text bg-slate-50 text-xs text-slate-400  flex relative"
//                 id="basic-addon3"
//               >
//                 <span className="text-slate-500 mr-[8px]">skype</span>

//                 <button className="text-danger me-2 fs-6">
//                   <i class="bi bi-trash"></i>
//                 </button>
//               </div>
//             </div>
//           </div> */}
//           <div className="save-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
//             <button
//               onClick={(e) => {
//                 handleSubmitSocial;
//               }}
//               type="submit"
//               className="btn btn-primary mt-3"
//             >
//               ثبت
//             </button>
//           </div>
//           ;
//         </>
//       );
//       break;

//     default:
//       break;
//   }
// };

// export default Switch;
