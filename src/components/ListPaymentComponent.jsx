import React, { useEffect, useState } from 'react'
import { ListPayments } from '../services/PaymentService';

const ListPaymentComponent = () => {
   const [payment,setPayment]=useState([]);

   useEffect(()=>{
    ListPayments().then((response)=>{
        setPayment(response.data);
    }).catch(error=>{
        console.error(error);
    })
   },[])

  return (
<div className='container'>
<h1 className='text-center'>List of Payments</h1>
<table className='table table-striped table-bordered'>
<thead>
<tr>
<th>Payment Id</th>
<th>Card Number</th>
<th>Name OnCard</th>
<th>Fare</th>
</tr>
</thead>
<tbody>
{
    payment.map(payment=>
<tr key={payment.id}>
    <td>{payment.id}</td>
<td>{payment.cardNumber}</td>
<td>{payment.nameOnCard}</td>
<td>{payment. price}</td>
</tr>)
}
</tbody>
</table>
    </div>
  )
}

export default ListPaymentComponent;