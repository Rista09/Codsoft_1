import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';

const Order = () => {
  const [orders, setOrders] = useState([]); // Initialize orders as an empty array
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(SummaryApi.getMyOrder.url, {
          method: SummaryApi.getMyOrder.method,
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
          setOrders(data.orders); // Set orders state if data is successfully fetched
        } else {
          console.error('Error fetching orders:', data.message); // Log error message from API
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false); // Always set loading to false after fetching (whether success or error)
      }
    };

    fetchOrders();
  }, []); // Empty dependency array ensures fetchOrders runs only once on component mount

  if (loading) {
    return <p>Loading...</p>; // Display a loading message or spinner while fetching data
  }

  // Ensure orders is an array and has length before mapping over it
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
            {/* Add more order details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
