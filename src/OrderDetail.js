export default function OrderDetail() {
  return (
    <div>
      <h1>Order Detail</h1>
      <p>Order: xxxx</p>
      <form>
        <table>
          <thead>
            <tr>
              <th>Line</th>
              <th>product</th>
              <th>Qty</th>
              <th>deliver</th>
              <th>Reject code</th>
            </tr>
          </thead>
          <tbody>
            <td>1</td>
            <td>product ID/Description</td>
            <td>20</td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
          </tbody>
        </table>
      </form>
    </div>
  );
}
