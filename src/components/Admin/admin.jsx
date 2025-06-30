import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/appContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Admin() {
  const context = useContext(AppContext);
  const { signIn } = context;
  const history = useHistory();

  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false); // Spinner state
  const color = "#151ed3";

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("admin-token");
    if (token) {
      history.push("/admin-dashboard");
    }
  }, [history]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn(credentials.username, credentials.password);
    setLoading(false);
    if (result.success) {
      history.push("/admin-dashboard");
    } else {
      alert(result.error || "Login failed");
    }
  };

  return (
    <div className='my-5'>
      <div className="pt-5">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column pt-5">
            <div className="card mx-3 shadow-sm" style={{ width: '400px', backgroundColor: "#fff", border: `1px solid ${color}` }}>
              <h1 className="text-center my-3" style={{ fontFamily: 'Montserret', color: color }}>Admin Panel</h1>
              
              <form onSubmit={handleLogin}>
                <div className="mb-3 mx-3">
                  <input
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    style={{ color: color, backgroundColor: '#fff', borderColor: color }}
                    type="text"
                    className="form-control my-2"
                    placeholder="Username"
                  />
                  <input
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    style={{ color: color, backgroundColor: '#fff', borderColor: color }}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="d-flex justify-content-center mt-2 mb-4">
                  <button
                    type="submit"
                    className="btn d-flex align-items-center justify-content-center"
                    style={{ color: color, borderColor: color, backgroundColor: '#fff', minWidth: '120px' }}
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="spinner-border spinner-border-sm text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      'Login'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
