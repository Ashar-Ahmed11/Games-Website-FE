import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/appContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import AllUser from './allUser';

const Dashboard = () => {
  const context = useContext(AppContext);
  const { loadingNumber ,adminToken, setAdminToken, siteData, setSiteData, editSiteInfo, editLoader, updateNumberData } = context;
  const history = useHistory();

  const token = localStorage.getItem("admin-token");
  if (!token) {
    history.push("/admin");
  }

  useEffect(() => {
    if(siteData.length !== 0){
      console.log(siteData)
    }
  }, []);
 const handleLogOut = () => {
  localStorage.removeItem("admin-token"); // Remove token
  // setAdminToken(null);                    // Clear token from context/state
  history.push("/admin");                 // Redirect to login page
};

  const [currentView, setCurrentView] = useState("Basic");

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Admin Panel</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <button onClick={handleLogOut} className="btn btn-outline-danger">
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container my-3">
        {/* Navigation Tabs */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${currentView === "Basic" ? "active" : ""}`}
              onClick={() => setCurrentView("Basic")}
            >
              Basic Settings
            </button>
          </li>
          {/* <li className="nav-item">
            <button
              className={`nav-link ${currentView === "AllUser" ? "active" : ""}`}
              onClick={() => setCurrentView("AllUser")}
            >
              All Users
            </button>
          </li> */}
        </ul>
      </div>
{loadingNumber && (
    <div className="text-center my-4">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )}
      <div className="container my-5">
        {currentView === "Basic" && siteData && (
          <div className="my-3">
            <h4>Site Whatsapp Number</h4>
            <input
              value={siteData.whatsappNo}
              onChange={(e) => setSiteData({ ...siteData, whatsappNo: e.target.value })}
              type="text"
              placeholder="Site Whatsapp Number"
              className="form-control my-2"
            />
            <h4>Site Phone Number</h4>
            <input
              value={siteData.contactNo}
              onChange={(e) => setSiteData({ ...siteData, contactNo: e.target.value })}
              type="text"
              placeholder="Site Phone Number"
              className="form-control my-2"
            />
            <h4>Home Page Title</h4>
            <input
              value={siteData.pageTitle}
              onChange={(e) => setSiteData({ ...siteData, pageTitle: e.target.value })}
              type="text"
              placeholder="Site Easypaisa Number"
              className="form-control my-2"
            />
            {/* <h4>All Links</h4> */}
            <h4>All Links</h4>

<table className="table table-bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>Link</th>
      {/* <th>Actions</th> */}
    </tr>
  </thead>
  <tbody>
    {siteData.links && siteData.links.length > 0 ? (
      siteData.links.map((link, index) => (
        <tr key={index}>
          <td>
         
              <input
                type="text"
                className="form-control"
                value={link.name}
                onChange={(e) => {
                  const updated = [...siteData.links];
                  updated[index].name = e.target.value;
                  setSiteData({ ...siteData, links: updated });
                }}
              />
           
          </td>
          <td>
          
              <input
                type="text"
                className="form-control"
                value={link.link}
                onChange={(e) => {
                  const updated = [...siteData.links];
                  updated[index].link = e.target.value;
                  setSiteData({ ...siteData, links: updated });
                }}
              />
          
              {/* <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.link}
              </a> */}
         
          </td>
          <td className="text-center">
            {/* <button
              className="btn btn-sm btn-outline-primary me-2"
              onClick={() => {
                const updated = [...siteData.links];
                updated[index].editing = !updated[index].editing;
                setSiteData({ ...siteData, links: updated });
              }}
            >
              <i className={`fas ${link.editing ? 'fa-save' : 'fa-edit'}`}></i>
            </button> */}

            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => {
                const updated = siteData.links.filter((_, i) => i !== index);
                setSiteData({ ...siteData, links: updated });
              }}
            >
              <i className="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="3" className="text-center">
          No links added yet.
        </td>
      </tr>
    )}
  </tbody>
</table>

<div className="d-flex flex-column align-items-center my-4">
  <button
    className="btn rounded-circle d-flex align-items-center justify-content-center"
    style={{ width: '50px', height: '50px', fontSize: '24px' }}
    onClick={() =>
      setSiteData({
        ...siteData,
        links: [...siteData.links, { name: '', link: '', editing: true }]
      })
    }
  >
    <i className="fas fa-plus"></i>
  </button>
  <span className="mt-2">Add Link</span>
</div>

            {/* <h4>Loan Fee</h4>
            <input
              value={siteData.loanfee}
              onChange={(e) => setSiteData({ ...siteData, loanfee: e.target.value })}
              type="text"
              placeholder="Loan Fee"
              className="form-control my-2"
            /> */}

            <div className="d-flex align-items-center gap-3">
  <button
    disabled={editLoader}
    onClick={updateNumberData}
    className="btn btn-primary px-4 py-2"
  >
    {editLoader ? (
      <div className="spinner-border spinner-border-sm text-light" role="status">
        <span className="visually-hidden">Saving...</span>
      </div>
    ) : (
      "Save Changes"
    )}
  </button>
</div>
          </div>
        )}

        {/* {currentView === "AllUser" && <AllUser />} */}
      </div>
    </div>
  );
};

export default Dashboard;
