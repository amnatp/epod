import React, { useContext, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function JobList(props) {
  return (
    <div>
      {props.list.map(item => (
        <div>
          <h1>Trip Number: {item.shipmentId}</h1>
          <DropList drops={item.drops} />
        </div>
      ))}
    </div>
  );
}
function DropList(props) {
  return (
    <div>
      {props.drops.map(item => (
        <div>
          <h4>Drop Point: {item.dropNumber}</h4>
          <OrderList orders={item.orders} />
          <div style={{ border: "solid" }}>
            <p>
              {" "}
              <strong>Receive all in this drop point</strong>
            </p>
            <div>
              <label>Received by </label>
              <input type="text" value={item.receivedBy} />
            </div>
            <SignatureCanvas
              penColor="green"
              backgroundColor="ivory"
              canvasProps={{
                width: 300,
                height: 200,
                className: "sigCanvas"
              }}
            />
            <div>
              <button>clear</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
function OrderList(props) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        {props.orders.map(item => (
          <tr>
            <td>{item.customer}</td>
            <td>{item.orderNumber}</td>
            <td>
              <button>Receive this order</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
