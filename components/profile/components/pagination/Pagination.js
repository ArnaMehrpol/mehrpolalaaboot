import React from "react";
import { fixNumbers } from "../../../tools/ChangeLanguage";

const Pagination = ({linksData, addressPage, linkPages}) => {
    return ( 
        <>
        <div className="page-numbers w-100 d-flex justify-content-between align-items-center mt-4">
          <small className="text-muted">{`نشان دادن ${linksData && fixNumbers(linksData.from.toString())}تا ${linksData && fixNumbers(linksData.to.toString())} از ${linksData && fixNumbers(linksData.total.toString())} نتیجه`}</small>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <button disabled={linksData && linksData.prev_page_url !== null ? false : true}
                  onClick={()=>addressPage(linksData && linksData.first_page_url)}
                  className="page-link text-slate-400"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              {
                linksData && linksData.links.map((link, index) =>
                  
                    link.url === null ? '' : link.label !== 'pagination.previous' || link.label !== 'pagination.next' ?
                      <li className="page-item">
                        <button onClick={()=>{linkPages(link.url)}} class="page-link text-slate-400">
                          {fixNumbers(index.toString())}
                        </button>
                      </li> : ''
                )
              }
              {/* <li className="page-item">
                <a class="page-link text-slate-400" href="#">
                  ۲
                </a>
              </li>
              <li className="page-item">
                <a class="page-link text-slate-400" href="#">
                  ۳
                </a>
              </li> */}
              <li className="page-item">
                <button disabled={linksData && linksData.next_page_url !== null ? false : true}
                  onClick={()=>addressPage(linksData && linksData.last_page_url)}
                  class="page-link text-slate-400" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        </>
     );
}
 
export default Pagination;