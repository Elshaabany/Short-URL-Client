import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";

const ShortLinkList = () => {
  const [shortLinks, setShortLinks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchShortLinks();
  }, []);

  const fetchShortLinks = async () => {
    try {
      const response = await axios.get(" http://localhost:5000/shortlink");
      setShortLinks(response.data.links);
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  const handleEdit = (slug) => {
    const linkData = shortLinks.find((link) => link.slug === slug);
    navigate(`/link/${slug}`, { state: linkData });
  };

  return (
    <div className="container">
      <h2>Short Links</h2>
      <div className="d-flex justify-content-between mb-3">
        <Link to="/link" className="btn btn-primary">
          Create New Link
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Slug</th>
            <th>iOS</th>
            <th>Android</th>
            <th>Web</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shortLinks.map((link) => (
            <tr key={link.slug}>
              <td>
                <a
                  href={`http://localhost:5000/${link.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.slug}
                </a>
              </td>
              <td>
                <strong>Primary:</strong> {link.ios.primary}
                <br />
                <strong>Fallback:</strong> {link.ios.fallback}
              </td>
              <td>
                <strong>Primary:</strong> {link.android.primary}
                <br />
                <strong>Fallback:</strong> {link.android.fallback}
              </td>
              <td>{link.web}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(link.slug)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShortLinkList;
