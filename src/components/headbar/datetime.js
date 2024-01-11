import React from 'react'

const datetime = () => {
   var showdate=new Date();
   var displaytodaysdate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
//    var dt=showdate.toDateString();


  return (
    <div>
        <center>
            <input type="text" value={displaytodaysdate} readOnly="true" />
            {/* {dt} */}
        </center>
    </div>
  )
}

export default datetime