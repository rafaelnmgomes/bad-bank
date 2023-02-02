import React from "react";
import { HistoryContext, UserContext } from "../context/Contexts";

function Withdraw() {
  const [amount, setAmount] = React.useState();
  const [error, setError] = React.useState(null);
  const { user, setUser } = React.useContext(UserContext);
  const { history, setHistory } = React.useContext(HistoryContext);

  console.log(history);

  const validateForm = () => {
    const newErrors = {};

    if (!user.email && !user.name) {
      newErrors.create = "Please create a user before withdrawing";
      return newErrors;
    }

    if (!amount) {
      newErrors.amount = "Amount is required";
      return newErrors;
    }

    if (amount < 0) {
      newErrors.amount = "Please enter a positive amount";
      return newErrors;
    }

    if (user.balance < amount) {
      newErrors.amount = "The amount is over the balance of the account";
      return newErrors;
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
    } else {
      alert("Submitted successfully");

      const newUser = {
        ...user,
        balance: parseInt(user.balance) - parseInt(amount),
      };

      const newHistory = [
        ...history,
        {
          action: "withdraw",
          amount: amount,
          name: user.name,
        },
      ];

      setUser(newUser);
      setHistory(newHistory);
    }
  };

  return (
    <div>
      <div>Withdraw</div>
      <div className="form-group">
        <label htmlFor="Balance">Balance</label>
        <div>{user.balance}</div>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="WithdrawAmount">Withdraw amount</label>
          <input
            type="number"
            className="form-control"
            id="WithdrawAmount"
            placeholder="Withdraw amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          {error && error.amount && (
            <small id="amountHelp" className="form-text text-danger">
              {error.amount}
            </small>
          )}
          {error && error.create && (
            <small id="noUserHelp" className="form-text text-danger">
              {error.create}
            </small>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={!amount}
        >
          Withdraw
        </button>
      </form>
    </div>
  );
}

export default Withdraw;
