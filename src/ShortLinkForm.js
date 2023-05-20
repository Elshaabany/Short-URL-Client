import React, { useState } from "react";

const ShortLinkForm = ({ onSubmit, buttonText }) => {
  const [slug, setSlug] = useState("");
  const [iosPrimary, setIosPrimary] = useState("");
  const [iosFallback, setIosFallback] = useState("");
  const [androidPrimary, setAndroidPrimary] = useState("");
  const [androidFallback, setAndroidFallback] = useState("");
  const [web, setWeb] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const shortLinkData = {
      slug,
      ios: { primary: iosPrimary, fallback: iosFallback },
      android: { primary: androidPrimary, fallback: androidFallback },
      web,
    };

    try {
      await onSubmit(shortLinkData);
      // Reset form fields
      setSlug("");
      setIosPrimary("");
      setIosFallback("");
      setAndroidPrimary("");
      setAndroidFallback("");
      setWeb("");
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Slug</label>
        <input
          type="text"
          className="form-control"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>iOS Primary URL</label>
        <input
          type="text"
          className="form-control"
          value={iosPrimary}
          onChange={(e) => setIosPrimary(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>iOS Fallback URL</label>
        <input
          type="text"
          className="form-control"
          value={iosFallback}
          onChange={(e) => setIosFallback(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Android Primary URL</label>
        <input
          type="text"
          className="form-control"
          value={androidPrimary}
          onChange={(e) => setAndroidPrimary(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Android Fallback URL</label>
        <input
          type="text"
          className="form-control"
          value={androidFallback}
          onChange={(e) => setAndroidFallback(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Web URL</label>
        <input
          type="text"
          className="form-control"
          value={web}
          onChange={(e) => setWeb(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {buttonText}
      </button>
    </form>
  );
};

export default ShortLinkForm;
