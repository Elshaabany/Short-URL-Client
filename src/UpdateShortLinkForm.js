import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UpdateShortLinkForm = () => {
  const location = useLocation();
  const linkData = location.state;

  // Destructure the linkData object
  const { slug, ios, android, web } = linkData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedLinkData = {
      ios: {
        primary: e.target.iosPrimary.value,
        fallback: e.target.iosFallback.value,
      },
      android: {
        primary: e.target.androidPrimary.value,
        fallback: e.target.androidFallback.value,
      },
      web: e.target.web.value,
    };

    try {
      await axios.put(
        `http://localhost:5000/shortlink/${slug}`,
        updatedLinkData
      );
      // Handle success
      console.log("Short link updated successfully");
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <div className="container">
      <h2>Edit Short Link</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="slug" className="form-label">
            Slug
          </label>
          <input
            type="text"
            className="form-control"
            id="slug"
            value={slug}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="iosPrimary" className="form-label">
            iOS Primary
          </label>
          <input
            type="text"
            className="form-control"
            id="iosPrimary"
            defaultValue={ios.primary}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="iosFallback" className="form-label">
            iOS Fallback
          </label>
          <input
            type="text"
            className="form-control"
            id="iosFallback"
            defaultValue={ios.fallback}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="androidPrimary" className="form-label">
            Android Primary
          </label>
          <input
            type="text"
            className="form-control"
            id="androidPrimary"
            defaultValue={android.primary}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="androidFallback" className="form-label">
            Android Fallback
          </label>
          <input
            type="text"
            className="form-control"
            id="androidFallback"
            defaultValue={android.fallback}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="web" className="form-label">
            Web
          </label>
          <input
            type="text"
            className="form-control"
            id="web"
            defaultValue={web}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateShortLinkForm;
