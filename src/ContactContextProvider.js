import axios, { Axios } from 'axios'
import React, { createContext, useState } from 'react'
export const contactContext = createContext()

const ContactContextProvider = ({children}) => {
    const API = "http://localhost:8000/contacts"
    const [contacts, setContact]=useState([])
  
    // !read  
  async  function getContcats () {
      const res = await axios.get(`${API}${window.location.search}`)
      setContact(res.data)
    
    }
    // !Добавление данных в json server 
  async  function addConTACT (newContact) {
        await axios.post(API,newContact)
        getContcats()
    }
    // ! delete

    async function deleteContact (id) {
      await axios.delete(`${API}/${id}`)
      getContcats()
      
    }
  return (
    <div>
        <contactContext.Provider  value={{addConTACT, getContcats, contacts, deleteContact}}>
        {children}
        </contactContext.Provider>
    </div>
  )
}

export default ContactContextProvider