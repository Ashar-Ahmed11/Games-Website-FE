import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from './components/context/appContext';
import Navbar from './components/Navbar';
import { Switch, Route,Link } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Admin from './components/Admin/admin'
import Dashboard from './components/Admin/dashboard'

function App() {
  const context = useContext(AppContext)
  const { helloworld, siteData } = context
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/admin');
  console.log(helloworld);

  return (
    <>
{siteData && (
  <>
    {/* WhatsApp Floating Button (Left) */}
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <p className='fw-bold  mb-1' style={{ fontSize: '14px', color:"#151ed3"}}>Live Support</p>
      <a
        href={`https://wa.me/${siteData.contactNo?.replace(/\s/g, '').replace(/^0/, '92')}?text=اخوت فاؤنڈیشن کی طرف سے ہم اپ کی کیا مدد کر سکتے ہیں`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '28px' }}
      >
        <i className="fab fa-whatsapp text-success" style={{ fontSize: '56px'}}></i>
      </a>
    </div>

    {/* Phone Floating Button (Right) */}
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <p className='fw-bold  mb-1' style={{ fontSize: '14px', color:'#151ed3' }}>Head Office No.</p>
      <a
        href={`tel:${siteData.whatsappNo?.replace(/\s/g, '').replace(/^0/, '92')}`}
        style={{ fontSize: '28px' }}
      >
        <i className="fa fa-phone-square text-success" style={{ fontSize: '56px'}}></i>
      </a>
    </div>
  </>
)}

{!hideNavbar && <Navbar />}
      {/* <div className="d-flex py-3 justify-content-center">

       <Link to="/"> <div className="btn btn-outline-primary px-2 mx-2">Home</div></Link>
       <Link to="/about"> <div className="btn btn-outline-primary px-2 mx-2">About</div></Link>
       <Link to="/users"> <div className="btn btn-outline-primary px-2 mx-2">Users</div></Link>
      </div> */}
      <div>


        <Switch>

          <Route path="/" exact>
          <Home/>
            {/* <h1 className="text-center">Home Component</h1> */}
          </Route>
          <Route path="/admin" exact>
            <Admin/>
          </Route>
          <Route path="/admin-dashboard" exact>
            <Dashboard/>

            {/* <h1 className="text-center">Users Component</h1> */}
          </Route>
        </Switch>
      </div>

    </>

  );
}

export default App;
