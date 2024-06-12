
import React, { useState } from "react";
import { Modal } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 

const UserModal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    group: "open", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({
      name: "",
      group: "open", 
    });
  };

  return (
    <div className="container">
      <Modal
        isOpen={open}
        toggle={onClose}
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div className="modal-header">
          <h1 className="text-center" id="modalTitle">
            Add Task
          </h1>
        </div>
        <div className="modal-body" id="modalDescription">
          <form onSubmit={handleSubmit} id="submit">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="form-control my-2"
              value={form.name}
              onChange={handleChange}
            />
            <select
              name="group"
              className="form-control my-2"
              value={form.group}
              onChange={handleChange}
            >
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="inprog">In Progress</option>
              <option value="complete">Complete</option>
            </select>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-success" type="submit" form="submit">
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UserModal;
