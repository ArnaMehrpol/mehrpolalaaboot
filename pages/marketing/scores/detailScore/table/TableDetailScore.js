import React from 'react'

const TableDetailScore = () => {
  return (
    <div className="table-responsive bg-white" style={{borderRadius: '20px'}}>
      <table className="table table-bordered align-middle text-center" style={{margin: '0px', borderRadius: '20px'}} >
        <thead className="bg-[#7daef4] bg-opacity-25 align-middle">
          <tr className='text-[#585858]'>
            <th scope="col">ردیف</th>
            <th scope="col">سفارش دهنده</th>
            <th scope="col">شماره سفارش</th>
            <th scope="col">تاریخ سفارش</th>
            <th colspan="3" >
              <th className="table text-[#585858]">
                <tr className="table table-bordered text-[#585858]">
                  <th scope="col">
                    امتیاز
                  </th>
                </tr>
                <tr className="d-flex justify-content-around table-bordered">
                  <th scope="col">قیمت</th>
                  <th scope="col">تحویل به موقع</th>
                  <th scope="col">ارزش خرید</th>
                </tr>
                </th>
            </th>
            <th scope="col">معدل</th>
          </tr>
        </thead>
        <tbody className="justify-middle">
          <tr>
            <th scope="row">۱</th>
            <td>فروشگاه تهیه و توزیع</td>
            <td>۱۲۶۵۶۵۶۳</td>
            <td>۱۴۰۱/۰۶/۰۲</td>
            <td>۲۵</td>
            <td>۲۵</td>
            <td>۲۵</td>
            <td>۳۷</td>
          </tr>
          <tr>
            <th scope="row">۲</th>
            <td>تولیدی کفشی</td>
            <td>۱۲۶۵۶۵۶۳</td>
            <td>۱۴۰۱/۰۶/۰۲</td>
            <td>۲۵</td>
            <td>۲۵</td>
            <td>۲۵</td>
            <td>۳۷</td>
          </tr>
          <tr>
            <th scope="row">۳</th>
            <td>مهرداد باقری</td>
            <td>۱۲۶۵۶۵۶۳</td>
            <td>۱۴۰۱/۰۶/۰۲</td>
            <td>۲۵</td>
            <td>۲۵</td>
            <td>۲۵</td>
            <td>۳۷</td>
          </tr>
          <tr>
            <th scope="row">۴</th>
            <td>ابزارآلات کریمی</td>
            <td>۱۲۶۵۶۵۶۳</td>
            <td>۱۴۰۱/۰۶/۰۲</td>
            <td>۲۵</td>
            <td>۲۵</td>
            <td>۲۵</td>
            <td>۳۷</td>
          </tr>
          <tr>
            <th scope="row">۵</th>
            <td>ابزارآلات کریمی</td>
            <td>۱۲۶۵۶۵۶۳</td>
            <td>۱۴۰۱/۰۶/۰۲</td>
            <td>۲۵</td>
            <td>۲۵</td>
            <td>۲۵</td>
            <td>۳۷</td>
          </tr>
          <tr>
            <th scope="row">۶</th>
            <td>ابزارآلات کریمی</td>
            <td>۱۲۶۵۶۵۶۳</td>
            <td>۱۴۰۱/۰۶/۰۲</td>
            <td>۲۵</td>
            <td>۲۵</td>
            <td>۲۵</td>
            <td>۳۷</td>
          </tr>
          <tr>
            <td colspan="4">معدل کل</td>
            <td>۷۷%</td>
            <td>۷۷%</td>
            <td>۷۷%</td>
            <td>۷۷%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableDetailScore
