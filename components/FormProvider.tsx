import React, { createContext, useEffect, useState } from 'react';

export const FormContext = createContext({});

function FormProvider({ children }: any) {
  const [formData, setFormData] = useState({});
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const storedInventory = window.localStorage.getItem('inventory');
    if (storedInventory !== null) {
      setInventory(JSON.parse(storedInventory));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.localStorage.setItem('inventory', JSON.stringify(inventory));
    }, 500);
  }, [inventory]);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        inventory,
        setInventory
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;