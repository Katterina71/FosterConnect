// FormContext.js
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
    const [formState, setFormState] = useState({});

    const updateFormData = (section, data) => {
        setFormState(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                ...data
            }
        }));
    };

    const submitForm = () => {
        console.log("Submitting Form:", formState);
        // Add logic to handle form submission such as API calls.
    };

    return (
        <FormContext.Provider value={{ formState, updateFormData, submitForm }}>
            {children}
        </FormContext.Provider>
    );
};
