"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const AgencyPartnershipContext = createContext();

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const AgencyPartnershipProvider = ({ children }) => {
  const [formId, setFormId] = useState(null);
  const [formData, setFormData] = useState({
    // Step 1: Agency Details
    agencyName: '',
    websiteUrl: '',
    socialMedia: '',
    location: '',
    teamSize: '',
    
    // Step 2: Partnership Fit
    specializations: [],
    whatNotDo: '',
    workedWithDevPartners: '',
    collaborationType: '',
    
    // Step 3: Project Examples
    recentProjects: '',
    portfolio: null,
    
    // Step 4: Collaboration
    engagementModels: [],
    timeZone: '',
    howFoundUs: '',
    
    // Step 5: Final
    agreedToTerms: false,
    
    currentStep: 1,
  });
  
  const [loading, setLoading] = useState(false);

  // Load formId from localStorage on mount
  useEffect(() => {
    const savedFormId = localStorage.getItem('agencyPartnershipFormId');
    if (savedFormId) {
      setFormId(savedFormId);
      fetchFormData(savedFormId);
    }
  }, []);

  // Fetch existing form data
  const fetchFormData = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/agency-partnership/${id}`);
      const result = await response.json();
      
      if (result.success) {
        const data = result.data;
        setFormData({
          agencyName: data.agencyName || '',
          websiteUrl: data.websiteUrl || '',
          socialMedia: data.socialMedia || '',
          location: data.location || '',
          teamSize: data.teamSize || '',
          specializations: data.specializations || [],
          whatNotDo: data.whatNotDo || '',
          workedWithDevPartners: data.workedWithDevPartners || '',
          collaborationType: data.collaborationType || '',
          recentProjects: data.recentProjects || '',
          portfolio: null,
          engagementModels: data.engagementModels || [],
          timeZone: data.timeZone || '',
          howFoundUs: data.howFoundUs || '',
          agreedToTerms: data.agreedToTerms || false,
          currentStep: data.currentStep || 1,
        });
      }
    } catch (error) {
      console.error('Error fetching form data:', error);
    }
  };

  // Start a new form
  const startForm = async (agencyName = '') => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/agency-partnership/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ agencyName }),
      });

      const result = await response.json();

      if (result.success) {
        const id = result.data._id;
        setFormId(id);
        localStorage.setItem('agencyPartnershipFormId', id);
        return id;
      } else {
        toast.error(result.message || 'Failed to start form');
        return null;
      }
    } catch (error) {
      console.error('Error starting form:', error);
      toast.error('Failed to start form');
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Update Step 1: Agency Details
  const updateStep1 = async (data) => {
    try {
      setLoading(true);
      
      let currentFormId = formId;
      if (!currentFormId) {
        currentFormId = await startForm(data.agencyName);
        if (!currentFormId) return false;
      }

      const response = await fetch(`${API_BASE_URL}/agency-partnership/${currentFormId}/step1`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormData(prev => ({ ...prev, ...data, currentStep: 2 }));
        toast.success('Agency details saved!');
        return true;
      } else {
        toast.error(result.message || 'Failed to save agency details');
        return false;
      }
    } catch (error) {
      console.error('Error updating step 1:', error);
      toast.error('Failed to save agency details');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update Step 2: Partnership Fit
  const updateStep2 = async (data) => {
    try {
      setLoading(true);
      
      if (!formId) {
        toast.error('Form not initialized');
        return false;
      }

      const response = await fetch(`${API_BASE_URL}/agency-partnership/${formId}/step2`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormData(prev => ({ ...prev, ...data, currentStep: 3 }));
        toast.success('Partnership fit saved!');
        return true;
      } else {
        toast.error(result.message || 'Failed to save partnership fit');
        return false;
      }
    } catch (error) {
      console.error('Error updating step 2:', error);
      toast.error('Failed to save partnership fit');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update Step 3: Project Examples
  const updateStep3 = async (data, portfolioFile) => {
    try {
      setLoading(true);
      
      if (!formId) {
        toast.error('Form not initialized');
        return false;
      }

      const formDataObj = new FormData();
      formDataObj.append('recentProjects', data.recentProjects);
      
      if (portfolioFile) {
        formDataObj.append('portfolio', portfolioFile);
      }

      const response = await fetch(`${API_BASE_URL}/agency-partnership/${formId}/step3`, {
        method: 'PUT',
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        setFormData(prev => ({ ...prev, ...data, currentStep: 4 }));
        toast.success('Project examples saved!');
        return true;
      } else {
        toast.error(result.message || 'Failed to save project examples');
        return false;
      }
    } catch (error) {
      console.error('Error updating step 3:', error);
      toast.error('Failed to save project examples');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update Step 4: Collaboration
  const updateStep4 = async (data) => {
    try {
      setLoading(true);
      
      if (!formId) {
        toast.error('Form not initialized');
        return false;
      }

      const response = await fetch(`${API_BASE_URL}/agency-partnership/${formId}/step4`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormData(prev => ({ ...prev, ...data, currentStep: 5 }));
        toast.success('Collaboration details saved!');
        return true;
      } else {
        toast.error(result.message || 'Failed to save collaboration details');
        return false;
      }
    } catch (error) {
      console.error('Error updating step 4:', error);
      toast.error('Failed to save collaboration details');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update Step 5: Final Step & Submit
  const submitApplication = async (agreedToTerms) => {
    try {
      setLoading(true);
      
      if (!formId) {
        toast.error('Form not initialized');
        return false;
      }

      const response = await fetch(`${API_BASE_URL}/agency-partnership/${formId}/step5`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ agreedToTerms }),
      });

      const result = await response.json();

      if (result.success) {
        setFormData(prev => ({ ...prev, agreedToTerms }));
        toast.success('Partnership application submitted successfully!');
        clearForm();
        return true;
      } else {
        toast.error(result.message || 'Failed to submit application');
        return false;
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update local form data
  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  // Clear form data
  const clearForm = () => {
    setFormId(null);
    setFormData({
      agencyName: '',
      websiteUrl: '',
      socialMedia: '',
      location: '',
      teamSize: '',
      specializations: [],
      whatNotDo: '',
      workedWithDevPartners: '',
      collaborationType: '',
      recentProjects: '',
      portfolio: null,
      engagementModels: [],
      timeZone: '',
      howFoundUs: '',
      agreedToTerms: false,
      currentStep: 1,
    });
    localStorage.removeItem('agencyPartnershipFormId');
  };

  return (
    <AgencyPartnershipContext.Provider
      value={{
        formId,
        formData,
        loading,
        updateFormData,
        startForm,
        updateStep1,
        updateStep2,
        updateStep3,
        updateStep4,
        submitApplication,
        clearForm,
      }}
    >
      {children}
    </AgencyPartnershipContext.Provider>
  );
};

export const useAgencyPartnership = () => {
  const context = useContext(AgencyPartnershipContext);
  if (!context) {
    throw new Error('useAgencyPartnership must be used within AgencyPartnershipProvider');
  }
  return context;
};
