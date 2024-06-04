// FormContext.js
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {

    const [formData, setFormData] = useState({
        userInfo: {},
        petPreferences: {}
    });


     // Method to update general form data
     const updateFormData = (section, data) => {
        if (section === 'petPreferences') {
            // Append to the array for pet preferences
            setFormData(prev => ({
                ...prev,
                [section]: [data]  // Check if it's an array, if not, start a new array
            }));
        } else {
            // Handle other updates for non-array types
            setFormData(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    ...data
                }
            }));
        }
    };

    const submitForm = () => {
        console.log("Submitting Form:", formData);
        // setFormData( () => ({
        //     userInfo: {},
        //     petPreferences: []
        // }));
        // Add logic to handle form submission such as API calls.
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData, submitForm }}>
            {children}
        </FormContext.Provider>
    );
};
