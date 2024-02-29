import "./Action.css";
import Product from "../Product/Product";
import { actions } from "../../data";
export default function Action() {
  return (
    <>
      <div className="container">
        <div className="action" id="actions">
          {actions.map((actions, id) => (
            <Product key={id} {...actions} />
          ))}
        </div>
      </div>
    </>
  );
}
