"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const JoinTeamContext = createContext();

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const JoinTeamProvider = ({ children }) => {
  const [formId, setFormId] = useState(null);
  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    name: '',
    email: '',
    phone: '',
    linkedinProfile: '',
    portfolioOrGithub: '',
    currentLocation: '',
    willingToRelocate: '',
    
    // Step 2: Role & Skills
    role: '',
    experience: '',
    skills: [],
    resume: null,
    
    // Step 3: Intent & Fit
    whyJoinGTW: '',
    proudProject: '',
    
    // Step 4: Availability
    startTime: '',
    openToFreelance: '',
    
    // Step 5: Final
    agreedToTerms: false,
    
    currentStep: 1,
  });
  
  const [loading, setLoading] = useState(false);

  // Load formId from localStorage on mount
  useEffect(() => {
    const savedFormId = localStorage.getItem('joinTeamFormId');
    if (savedFormId) {
      setFormId(savedFormId);
      fetchFormData(savedFormId);
    }
  }, []);

  // Fetch existing form data
  const fetchFormData = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/join-team/${id}`);
      const result = await response.json();
      
      if (result.success) {
        const data = result.data;
        setFormData({
          name: data.name || '',
          email: data.email || '',
          phone: data.phone || '',
          linkedinProfile: data.linkedinProfile || '',
          portfolioOrGithub: data.portfolioOrGithub || '',
          currentLocation: data.currentLocation || '',
          willingToRelocate: data.willingToRelocate || '',
          role: data.role || '',
          experience: data.experience || '',
          skills: data.skills || [],
          resume: null,
          whyJoinGTW: data.whyJoinGTW || '',
          proudProject: data.proudProject || '',
          startTime: data.startTime || '',
          openToFreelance: data.openToFreelance || '',
          agreedToTerms: data.agreedToTerms || false,
          currentStep: data.currentStep || 1,
        });
      }
    } catch (error) {
      console.error('Error fetching form data:', error);
    }
  };

  // Start a new form
  const startForm = async (email = '') => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/join-team/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        const id = result.data._id;
        setFormId(id);
        localStorage.setItem('joinTeamFormId', id);
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

  // Update Step 1: Personal Details
  const updateStep1 = async (data) => {
    try {
      setLoading(true);
      
      let currentFormId = formId;
      if (!currentFormId) {
        currentFormId = await startForm(data.email);
        if (!currentFormId) return false;
      }

      const response = await fetch(`${API_BASE_URL}/join-team/${currentFormId}/step1`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormData(prev => ({ ...prev, ...data, currentStep: 2 }));
        toast.success('Personal details saved!');
        return true;
      } else {
        toast.error(result.message || 'Failed to save personal details');
        return false;
      }
    } catch (error) {
      console.error('Error updating step 1:', error);
      toast.error('Failed to save personal details');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update Step 2: Role & Skills
  const updateStep2 = async (data, resumeFile) => {
    try {
      setLoading(true);
      
      if (!formId) {
        toast.error('Form not initialized');
        return false;
      }

      const formDataObj = new FormData();
      formDataObj.append('role', data.role);
      formDataObj.append('experience', data.experience);
      formDataObj.append('skills', JSON.stringify(data.skills));
      
      if (resumeFile) {
        formDataObj.append('resume', resumeFile);
      }

      const response = await fetch(`${API_BASE_URL}/join-team/${formId}/step2`, {
        method: 'PUT',
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        setFormData(prev => ({ ...prev, ...data, currentStep: 3 }));
        toast.success('Role & skills saved!');
        return true;
      } else {
        toast.error(result.message || 'Failed to save role & skills');
        return false;
      }
    } catch (error) {
      console.error('Error updating step 2:', error);
      toast.error('Failed to save role & skills');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update Step 3: Intent & Fit
  const updateStep3 = async (data) => {
    try {
      setLoading(true);
      
      if (!formId) {
        toast.error('Form not initialized');
        return false;
      }

      const response = await fetch(`${API_BASE_URL}/join-team/${formId}/step3`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormData(prev => ({ ...prev, ...data, currentStep: 4 }));
        toast.success('Intent & fit saved!');
        return true;
      } else {
        toast.error(result.message || 'Failed to save intent & fit');
        return false;
      }
    } catch (error) {
      console.error('Error updating step 3:', error);
      toast.error('Failed to save intent & fit');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update Step 4: Availability
  const updateStep4 = async (data) => {
    try {
      setLoading(true);
      
      if (!formId) {
        toast.error('Form not initialized');
        return false;
      }

      const response = await fetch(`${API_BASE_URL}/join-team/${formId}/step4`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormData(prev => ({ ...prev, ...data, currentStep: 5 }));
        toast.success('Availability saved!');
        return true;
      } else {
        toast.error(result.message || 'Failed to save availability');
        return false;
      }
    } catch (error) {
      console.error('Error updating step 4:', error);
      toast.error('Failed to save availability');
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

      const response = await fetch(`${API_BASE_URL}/join-team/${formId}/step5`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ agreedToTerms }),
      });

      const result = await response.json();

      if (result.success) {
        setFormData(prev => ({ ...prev, agreedToTerms }));
        toast.success('Application submitted successfully!');
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
      name: '',
      email: '',
      phone: '',
      linkedinProfile: '',
      portfolioOrGithub: '',
      currentLocation: '',
      willingToRelocate: '',
      role: '',
      experience: '',
      skills: [],
      resume: null,
      whyJoinGTW: '',
      proudProject: '',
      startTime: '',
      openToFreelance: '',
      agreedToTerms: false,
      currentStep: 1,
    });
    localStorage.removeItem('joinTeamFormId');
  };

  return (
    <JoinTeamContext.Provider
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
    </JoinTeamContext.Provider>
  );
};

export const useJoinTeam = () => {
  const context = useContext(JoinTeamContext);
  if (!context) {
    throw new Error('useJoinTeam must be used within JoinTeamProvider');
  }
  return context;
};
