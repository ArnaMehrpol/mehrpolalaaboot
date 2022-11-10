import React from "react";

const Pagination = () => {
    return ( 
        <>
        <div className="page-numbers w-100 d-flex justify-content-between align-items-center mt-4">
          <small className="text-muted">نشان دادن ۱تا ۲۵ از ۷۲ نتیجه</small>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a
                  className="page-link text-slate-400"
                  href="#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a class="page-link text-slate-400" href="#">
                  ۱
                </a>
              </li>
              <li className="page-item">
                <a class="page-link text-slate-400" href="#">
                  ۲
                </a>
              </li>
              <li className="page-item">
                <a class="page-link text-slate-400" href="#">
                  ۳
                </a>
              </li>
              <li className="page-item">
                <a class="page-link text-slate-400" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        </>
     );
}
 
export default Pagination;