import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SummaryApi from '../common';

const OrderBill = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Initialize billDetails with default values or empty object
  const [billDetails, setBillDetails] = useState({
    pidx: '',
    transaction_id: '',
    amount: '',
    total_amount: '',
    mobile: '',
    status: '',
    purchase_order_id: '',
    purchase_order_name: ''
  });

  useEffect(() => {
    const fetchBillDetails = async () => {
      const pidx = queryParams.get('pidx');
      if (!pidx) return; 

      try {
        const response = await fetch(`${SummaryApi.manageOrder.url}/?pidx=${pidx}`, {
          method: SummaryApi.manageOrder.method,
          credentials: "include",
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response data>>>",data);

        setBillDetails({
            pidx: data.data.pidx,
            transaction_id: data.data.transaction_id,
            amount: data.data.amount,
            total_amount: data.data.total_amount, 
            mobile: data.data.mobile, 
            status: data.data.status,
            purchase_order_id: data.data.purchase_order_id, 
            purchase_order_name: data.data.purchase_order_name, 
          });
          
      } catch (error) {
        console.error('Error fetching bill details:', error);
        // Handle error gracefully (e.g., show error message to user)
      }
    };

    fetchBillDetails();
  }, [location.search]); // Execute fetchBillDetails when location.search changes

  return (
<div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg my-10">
  <div className="relative">
    {billDetails.status === 'Completed' && (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    )}
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-2 text-center">Order Bill</h2>
      
      <div className="mb-6">
        <div className="flex mb-2">
          <p className="w-1/2"><span className="font-bold">PIDX:</span></p>
          <p className="w-1/2">{billDetails.pidx}</p>
        </div>
        <div className="flex mb-2">
          <p className="w-1/2"><span className="font-bold">Transaction ID:</span></p>
          <p className="w-1/2">{billDetails.transaction_id}</p>
        </div>
        <div className="flex mb-2">
          <p className="w-1/2"><span className="font-bold">Status:</span></p>
          <p className="w-1/2">{billDetails.status}</p>
        </div>
        <div className="flex mb-2">
          <p className="w-1/2"><span className="font-bold">Total Amount:</span></p>
          <p className="w-1/2">{billDetails.total_amount}</p>
        </div>
      </div>
      
      {billDetails.status === 'Completed' && (
        <div className="mb-6 text-green-500">
          <p className="text-center mb-2">Thanks for shopping with us.</p>
          <p className="text-center">Your package will be delivered within 2 working days.</p>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Print Bill
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default OrderBill;
