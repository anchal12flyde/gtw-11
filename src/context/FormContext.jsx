// context/FormContext.js
"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    formId: null,
    projectType: '',
    name: '',
    email: '',
    companyName: '',
    companyType: '',
    startTime: '',
    currentStep: 1,
  });

  useEffect(() => {
    const savedFormId = localStorage.getItem('gtwFormId');
    if (savedFormId) {
      setFormData(prev => ({ ...prev, formId: savedFormId }));
    }
  }, []);

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
    
    // Save formId to localStorage
    if (newData.formId) {
      localStorage.setItem('gtwFormId', newData.formId);
    }
  };

  const clearFormData = () => {
    setFormData({
      formId: null,
      projectType: '',
      name: '',
      email: '',
      companyName: '',
      companyType: '',
      startTime: '',
      currentStep: 1,
    });
    localStorage.removeItem('gtwFormId');
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, clearFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);