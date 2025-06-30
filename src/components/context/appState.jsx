import React, {useEffect} from 'react'
import AppContext from './appContext'
import { useState } from 'react'

const AppState = (props) => {
    const [helloworld, setHelloworld] = useState("Helloworld")
    const [siteData, setSiteData] = useState({})
    const [editLoader, setEditLoader] = useState(false)
    const [adminToken, setAdminToken] = useState()
    const [homeLoader, setHomeLoader] = useState(false)



const signIn = async (username, password) => {
  try {
    const response = await fetch("https://gaming-app-eight.vercel.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const json = await response.json();

    if (json.succes) {
      // ✅ Save token to localStorage
      localStorage.setItem("admin-token", json.authtoken);
      setAdminToken(json.authtoken)
      console.log("Login successful");
      return { success: true };
    } else {
      console.error("Login failed:", json.errors);
      return { success: false, error: json.errors };
    }
  } catch (err) {
    console.error("Error during login:", err);
    return { success: false, error: "Something went wrong" };
  }
};




const fetchNumberData = async () => {
    setHomeLoader(true)
  try {
    const response = await fetch('https://gaming-app-eight.vercel.app/api/number/all-numbers'); // update URL if needed

    if (!response.ok) {
      throw new Error('Failed to fetch number data');
    }

    const data = await response.json();
    setSiteData(data)
    return data;
  } catch (error) {
    console.error('Error fetching number data:', error);
    return null;
  }
  finally{
    setHomeLoader(false)
  }
};

useEffect(() => {
    fetchNumberData()
}, []);


const updateNumberData = async () => {
    setEditLoader(true)
  try {
    const response = await fetch('https://gaming-app-eight.vercel.app/api/number/edit-number', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(siteData)
    });

    if (!response.ok) {
      throw new Error('Failed to update number');
    }

    const data = await response.json();
    console.log('Updated Number:', data);
    return data;
  } catch (error) {
    console.error('Error updating number:', error);
    return null;
  }
  finally{
    setEditLoader(false)
  }
};

console.clear()
    
    return (
        <AppContext.Provider value={{homeLoader, setHomeLoader,adminToken, setAdminToken, helloworld,editLoader,  fetchNumberData, siteData, setSiteData, updateNumberData, signIn}}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppState