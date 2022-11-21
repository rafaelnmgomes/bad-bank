import React from "react";
import { UserContext, HistoryContext } from "./Contexts";

function CreateAccount() {
  const [form, setForm] = React.useState({});
  const [errors, setErrors] = React.useState(null);
  const { setUser } = React.useContext(UserContext);
  const { history, setHistory } = React.useContext(HistoryContext);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const validateForm = () => {
    const { name, password, email } = form;
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (password.length < 8) {
      newErrors.password =
        "Password is too short, please enter at least 8 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      alert("User created successfully");

      const newUser = {
        name: form.name,
        password: form.password,
        email: form.email,
        balance: 0,
      };

      const newHistory = [...history, { action: "create", name: form.name }];

      setUser(newUser);
      setHistory(newHistory);
      handleClear();
    }
  };

  const handleClear = () => {
    setForm({});
    setErrors(null);
  };

  return (
    <div>
      <div>Create account</div>
      <form>
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter name"
            onChange={(e) => setField("name", e.target.value)}
            value={form.name || ""}
          />
          {errors && errors.name && (
            <small id="nameHelp" className="form-text text-danger">
              {errors.name}
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="InputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setField("email", e.target.value)}
            value={form.email || ""}
          />
          {errors && errors.email && (
            <small id="emailHelp" className="form-text text-danger">
              {errors.email}
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="InputPassword"
            placeholder="Password"
            required
            onChange={(e) => setField("password", e.target.value)}
            value={form.password || ""}
          />
          {errors && errors.password && (
            <small id="passwordHelp" className="form-text text-danger">
              {errors.password}
            </small>
          )}
        </div>
        <button
          type="reset"
          className="btn btn-secondary"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={form.name && form.password && form.email ? false : true}
        >
          Create account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
