"use client";

import { createContext, useContext, useState, useEffect } from "react";
import api from "@/utils/api"; 
import axios from "axios";

const AuditFormContext = createContext();

export const AuditFormProvider = ({ children }) => {
  const [formId, setFormId] = useState(null);
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // ⭐ Ensure session id is created
  useEffect(() => {
    const session = sessionStorage.getItem("audit_session");
    if (!session) {
      sessionStorage.setItem("audit_session", crypto.randomUUID());
    }
  }, []);

  // ---------------------------------------------------
  // START FORM
  // ---------------------------------------------------
  const startForm = async (email = "") => {
    try {
      setLoading(true);

      const sessionId =
        sessionStorage.getItem("audit_session") || crypto.randomUUID();

      const res = await api.post(`/audit/start`, {
        email,
        sessionId,
      });

      setFormId(res.data.data._id);
      setFormData(res.data.data);
      setCurrentStep(res.data.data.currentStep);

      return res.data.data;
    } catch (err) {
      console.error("Start form error:", err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------------------
  // UPDATE ANY STEP
  // ---------------------------------------------------
  const updateStep = async (stepNum, payload, id = formId) => {
    const finalId = id || formId;
    if (!finalId) return null;

    try {
      setLoading(true);

      const res = await api.put(`/audit/${finalId}/step/${stepNum}`, payload);

      setFormData(res.data.data);
      setCurrentStep(res.data.data.currentStep);

      return res.data.data;
    } catch (err) {
      console.error("Update step error:", err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <AuditFormContext.Provider
      value={{
        startForm,
        updateStep,
        formId,
        formData,
        currentStep,
        loading,
      }}
    >
      {children}
    </AuditFormContext.Provider>
  );
};

export const useAuditForm = () => useContext(AuditFormContext);
