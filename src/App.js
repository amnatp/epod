import logo from "./logo.svg";
import "./App.css";
import JobList from "./components/JobList";
import OrderDetail from "./OrderDetail";
import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const jobs = [
  {
    shipmentId: "1",
    drops: [
      {
        dropNumber: 1,
        receivedBy: "",
        orders: [
          {
            customer: "Central Ram II - Man department",
            orderNumber: "202105001",
            orderDetail: [
              { line: 1, product: "Foot01", descrption: "big Foot", qty: 10 },
              { line: 2, product: "Foot02", descrption: "small Foot", qty: 10 }
            ]
          },
          {
            customer: "Central Ram II - Super Sport",
            orderNumber: "202105001",
            orderDetail: [
              { line: 1, product: "Shoes01", descrption: "Big Shoe", qty: 10 },
              {
                line: 2,
                product: "Shoes02",
                descrption: "Small Foot",
                qty: 10
              },
              {
                line: 3,
                product: "Shoes03",
                descrption: "Medium Foot",
                qty: 10
              }
            ]
          },
          {
            customer: "Central Ram II - Event hall",
            orderNumber: "S02105001",

            orderDetail: [
              { line: 1, product: "Foot", descrption: "big Foot", qty: 10 }
            ]
          },
          {
            customer: "Central Ram II - Event hall",
            orderNumber: "Memo001",

            orderDetail: [
              { line: 1, product: "Foot", descrption: "big Foot", qty: 10 }
            ]
          }
        ]
      },
      {
        dropNumber: 2,
        orders: [
          {
            customer: "Big C Extra",
            orderNumber: "202105008",
            orderDetail: [
              { line: 1, product: "Foot", descrption: "big Foot", qty: 10 }
            ]
          },
          {
            customer: "Big C Extra",
            orderNumber: "202105018",

            orderDetail: [
              { line: 1, product: "Foot", descrption: "big Foot", qty: 10 }
            ]
          }
        ]
      },
      {
        dropNumber: 3,
        orders: [
          {
            customer: "Tesco Ram II",
            orderNumber: "202105020",

            orderDetail: [
              { line: 1, product: "Foot", descrption: "big Foot", qty: 10 }
            ]
          }
        ]
      }
    ]
  }
  /*
  {
    shipmentId: "2",

    drops: [
      {
        dropNumber: 1,
        orders: [
          { customer: "Central RamaII", orderNumber: "1" },
          { customer: "Central RamaII plaza Sun", orderNumber: "2" },
          { customer: "D2", orderNumber: "3" },
          { customer: "D3", orderNumber: "4" }
        ]
      },
      {
        dropNumber: 2,
        orders: [
          { customer: "E1", orderNumber: "5" },
          { customer: "E1", orderNumber: "6" }
        ]
      },
      { dropNumber: 3, orders: [{ customer: "F1", orderNumber: "7" }] }
    ]
  }
*/
];

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const findItems = jobs.filter(item =>
    item.shipmentId.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <JobList list={findItems} />
      <OrderDetail />
      <SignatureCanvas
        penColor="green"
        backgroundColor="ivory"
        canvasProps={{
          width: 300,
          height: 200,
          className: "sigCanvas"
        }}
      />
    </div>
  );
}

export default App;
