import React from 'react'
import MarketingLayout from '../../components/marketing/layout/MarketingLayout'
import MarketingMainHeader from '../../components/marketing/marketingHeader/MarketingMainHeader'
import Link from "next/link";

const dashboard = () => {
  return (
    <div>
      <div className="business-panel-container">
        <div className="grid grid-cols-12 business-panel-cols bg-slate-100">
          <MarketingLayout/>
          <div className="relative col-span-12 overflow-hidden shadow-lg business-panel-mainbar md:col-span-10 shadow-slate-100">
            <MarketingMainHeader/>
            <div className="mainbar-content mt-10 md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-4">
              داشبورد 
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard
