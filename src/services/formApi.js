const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Start a new form or get existing
export const startForm = async (email, projectType) => {
  try {
    const response = await fetch(`${API_BASE_URL}/form/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, projectType }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to start form');
    }

    return data;
  } catch (error) {
    console.error('Error starting form:', error);
    throw error;
  }
};

// Update Step 1
export const updateStep1 = async (formId, projectType) => {
  try {
    const response = await fetch(`${API_BASE_URL}/form/${formId}/step1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ projectType }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to update step 1');
    }

    return data;
  } catch (error) {
    console.error('Error updating step 1:', error);
    throw error;
  }
};

// Update Step 2
export const updateStep2 = async (formId, formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/form/${formId}/step2`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to update step 2');
    }

    return data;
  } catch (error) {
    console.error('Error updating step 2:', error);
    throw error;
  }
};

// Update Step 3
export const updateStep3 = async (formId, trackSpecificData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/form/${formId}/step3`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackSpecificData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to update step 3');
    }

    return data;
  } catch (error) {
    console.error('Error updating step 3:', error);
    throw error;
  }
};

// Update Step 4
export const updateStep4 = async (formId, formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/form/${formId}/step4`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to update step 4');
    }

    return data;
  } catch (error) {
    console.error('Error updating step 4:', error);
    throw error;
  }
};

// Update Step 5 (Final submission)
export const updateStep5 = async (formId, additionalNotes) => {
  try {
    const response = await fetch(`${API_BASE_URL}/form/${formId}/step5`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ additionalNotes }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit form');
    }

    return data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};

// Get form by ID
export const getFormById = async (formId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/form/${formId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch form');
    }

    return data;
  } catch (error) {
    console.error('Error fetching form:', error);
    throw error;
  }
};

// Get all forms (admin use)
export const getAllForms = async (page = 1, limit = 10, filters = {}) => {
  try {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...filters,
    });

    const response = await fetch(`${API_BASE_URL}/form?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch forms');
    }

    return data;
  } catch (error) {
    console.error('Error fetching forms:', error);
    throw error;
  }
};
