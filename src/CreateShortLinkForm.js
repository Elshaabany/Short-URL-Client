import React from "react";
import axios from "axios";
import ShortLinkForm from "./ShortLinkForm";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

const CreateShortLinkForm = () => {
  const navigate = useNavigate();
  const [modaldata, setModalData] = React.useState({
    isVisible: false,
    shownText: "",
  });

  const handleSubmit = async (shortLinkData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/shortlink/",
        shortLinkData
      );
      navigate("/");

      console.log(response.data); // Handle success
    } catch (error) {
      setModalData({ isVisible: true, shownText: error.response.data.message });
      console.error(error); // Handle error
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "400px",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
  };

  function closeModal() {
    setModalData({ ...modaldata, isVisible: false });
  }

  return (
    <div className="container">
      <Modal
        isOpen={modaldata.isVisible}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Modal title</h1>
            <button
              onClick={closeModal}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{modaldata.shownText}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
      <h2>Create Short Link</h2>

      <ShortLinkForm onSubmit={handleSubmit} buttonText="Create" />
    </div>
  );
};

export default CreateShortLinkForm;
