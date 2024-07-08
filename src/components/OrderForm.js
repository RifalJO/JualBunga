// components/OrderForm.js
"use client";
import { useState } from "react";
import FlowerCatalog from "./FlowerCatalog";

const flowers = [
  { code: "101", name: "Blue Spider Lily", size: "Medium", price: 750000 },
  { code: "102", name: "Red Rose", size: "Large", price: 1500000 },
  { code: "103", name: "White Lily", size: "Small", price: 500000 },
  // Tambahkan lebih banyak bunga sesuai kebutuhan
];

const OrderForm = () => {
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [recipient, setRecipient] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [flowerCode, setFlowerCode] = useState(flowers[0].code);
  const [discount, setDiscount] = useState(0.1);
  const [downPayment, setDownPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [orderDate, setOrderDate] = useState("2024-06-01");
  const [deliveryDate, setDeliveryDate] = useState("2024-06-05");

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedFlower = flowers.find((flower) => flower.code === flowerCode);
    const order = {
      customer,
      recipient,
      flowerArrangement: selectedFlower,
      discount,
      downPayment,
      totalPayment,
      orderDate,
      deliveryDate,
    };
    console.log(order);
    
    const message = `
Customer Info:
Name: ${customer.name}
Address: ${customer.address}
Phone: ${customer.phone}
Email: ${customer.email}
      
Receipt Info:
Name: ${recipient.name}
Address: ${recipient.address}
Phone: ${recipient.phone}
    `;
    
    const whatsappLink = `https://api.whatsapp.com/send?phone=62895606107795&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappLink, '_blank');
    alert("Pesanan Akan Segera Diproses");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Customer Information</h2>
      <label>Name: </label>
      <input
        type="text"
        value={customer.name}
        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        required
      />
      <br />
      <label>Address: </label>
      <input
        type="text"
        value={customer.address}
        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
        required
      />
      <br />
      <label>Phone: </label>
      <input
        type="text"
        value={customer.phone}
        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
        required
      />
      <br />
      <label>Email: </label>
      <input
        type="email"
        value={customer.email}
        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        required
      />
      <br />
      <h2>Recipient Information</h2>
      <label>Name: </label>
      <input
        type="text"
        value={recipient.name}
        onChange={(e) => setRecipient({ ...recipient, name: e.target.value })}
        required
      />
      <br />
      <label>Address: </label>
      <input
        type="text"
        value={recipient.address}
        onChange={(e) => setRecipient({ ...recipient, address: e.target.value })}
        required
      />
      <br />
      <label>Phone: </label>
      <input
        type="text"
        value={recipient.phone}
        onChange={(e) => setRecipient({ ...recipient, phone: e.target.value })}
        required
      />
      <br />
      <FlowerCatalog flowers={flowers} onSelect={setFlowerCode} />
      <br />
      {/* <h2>Order Details</h2>
      <label>Discount: </label>
      <input
        type="number"
        step="0.01"
        value={discount}
        onChange={(e) => setDiscount(parseFloat(e.target.value))}
        required
      />
      <br />
      <label>Down Payment: </label>
      <input
        type="number"
        value={downPayment}
        onChange={(e) => setDownPayment(parseFloat(e.target.value))}
        required
      />
      <br />
      <label>Total Payment: </label>
      <input
        type="number"
        value={totalPayment}
        onChange={(e) => setTotalPayment(parseFloat(e.target.value))}
        required
      />
      <br />
      <label>Order Date: </label>
      <input
        type="date"
        value={orderDate}
        onChange={(e) => setOrderDate(e.target.value)}
        required
      />
      <br />
      <label>Delivery Date: </label>
      <input
        type="date"
        value={deliveryDate}
        onChange={(e) => setDeliveryDate(e.target.value)}
        required
      /> */}
      <br />
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
