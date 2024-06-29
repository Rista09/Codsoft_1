import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';

const AllOrder = () => {
  const [orders, setOrders] = useState([]); // Initialize orders as an empty array
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(SummaryApi.getAllOrder.url, {
          method: SummaryApi.getAllOrder.method,
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success && Array.isArray(data.orders)) {
          setOrders(data.orders); 
        } else {
          console.error('Error fetching orders:', data.message); 
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading...</p>; 
  }

  
  if (!Array.isArray(orders) || orders.length === 0) {
    return <p>No orders found.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 p-5">My Orders</h2>
      <div className="grid grid-cols-1 gap-4">
        {orders.map(order => (
          <div key={order._id} className="bg-white shadow-lg rounded-lg p-4">
            <p><span className="font-bold">Order ID:</span> {order._id}</p>
            <p><span className="font-bold">Total Amount:</span> {order.totalAmount}</p>
            <p><span className="font-bold">Status:</span> {order.status}</p>
            <div className="mt-2 border-t pt-2">
              <p className="font-bold">User Details:</p>
              <p><span className="font-bold">Name:</span> {order.user.name}</p>
              <p><span className="font-bold">Email:</span> {order.user.email}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrder;
