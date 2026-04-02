import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import Button from './Button';
import { Card, CardHeader, CardContent, CardFooter } from './Card';

const MultiStepForm = ({ onSubmit, steps = [], title = '' }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(() => {
    const initial = {};
    steps.forEach(step => {
      step.fields?.forEach(field => {
        initial[field.name] = '';
      });
    });
    return initial;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  return (
    <Card>
      {/* Header */}
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
        </div>
        
        {/* Progress Indicator */}
        <div className="mt-4 flex gap-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`h-2 flex-1 rounded-full ${
                index <= currentStep
                  ? 'bg-primary'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="py-8">
        <AnimatePresence mode="wait">
          <motion.form
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Step Title & Description */}
            <div>
              <h4 className="text-lg font-semibold mb-2">
                {currentStepData?.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {currentStepData?.description}
              </p>
            </div>

            {/* Step Icon */}
            {currentStepData?.icon && (
              <motion.div
                className="text-5xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {currentStepData.icon}
              </motion.div>
            )}

            {/* Form Fields */}
            <div className="space-y-4">
              {currentStepData?.fields?.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium mb-2">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      rows={field.rows || 4}
                      required={field.required}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                    />
                  ) : field.type === 'select' ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required={field.required}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                    >
                      <option value="">Select {field.label}</option>
                      {field.options?.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type || 'text'}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                    />
                  )}
                  {field.hint && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {field.hint}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.form>
        </AnimatePresence>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={isFirstStep}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        {!isLastStep ? (
          <Button
            variant="primary"
            onClick={handleNext}
            className="gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={handleSubmit}
            className="gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            Submit
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MultiStepForm;
