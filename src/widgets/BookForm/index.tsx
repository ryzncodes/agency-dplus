'use client';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useState } from 'react';

import { BOOK_FORM_DEFAULT_STATE, INPUT_FIELDS, RADIO_FIELDS } from '@/data';

//components
import Button from '@/components/ui/Button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

interface Props {}

interface FormErrors {
  [key: string]: string;
}

interface FormState {
  [key: string]: string | null;
  _service: null;
  _budget: null;
  _pages: null;
  _quickness: null;
  first: string;
  phone: string;
  email: string;
  company: string;
  websiteUrl: string;
  message: string;
}

const Index: FC<Props> = () => {
  const [form, setForm] = useState<FormState>(BOOK_FORM_DEFAULT_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const { push } = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    // Validate radio fields
    RADIO_FIELDS.forEach((field) => {
      if (!form[field.formKey]) {
        newErrors[field.formKey] = `Please select a ${field.title.toLowerCase()}`;
      }
    });

    // Validate input fields
    INPUT_FIELDS.forEach((field) => {
      // Skip validation for optional fields
      if (field.name === 'company' || field.name === 'websiteUrl') return;
      
      // Validate required fields
      if (!form[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (field.type === 'email' && form[field.name] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form[field.name] as string)) {
        newErrors[field.name] = 'Please enter a valid email address';
      }
    });

    // Validate message
    if (!form.message) {
      newErrors.message = 'Message is required';
    } else if (form.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        setShowSuccessModal(true);
      } catch (error) {
        // Optionally show an error message to the user
      }
    } else {
      return;
    }
  };

  return (
    <div className="mx-auto w-[90%] sm:w-[85%] px-4 sm:px-[4vw] relative">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-bg-2 p-6 sm:p-[2vw] rounded-lg shadow-lg text-center relative">
            <button 
              onClick={() => {
                setShowSuccessModal(false);
                setForm(BOOK_FORM_DEFAULT_STATE); // Reset form when closing modal
              }}
              className="absolute top-2 right-2 sm:top-[0.5vw] sm:right-[0.5vw] p-2 sm:p-[0.5vw] hover:bg-stone-800 rounded-full"
            >
              <svg 
                className="w-4 h-4 sm:w-[1.2vw] sm:h-[1.2vw] md:w-[1.8vw] md:h-[1.8vw] fill-stone-400 hover:fill-stone-300" 
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <h2 className="text-xl sm:text-[2vw] md:text-[3vw] font-medium mb-3 sm:mb-[1vw]">Thank You!</h2>
            <p className="text-base sm:text-[1.2vw] md:text-[2vw] text-gray-300">Your request has been submitted successfully.</p>
          </div>
        </div>
      )}

      <div className="relative">
        <button
          className="group absolute left-0 top-[25%] z-10 box-content rounded-full bg-stone-800 p-2 sm:p-[0.5vw] hover:bg-stone-800"
          onClick={() => push('/')}
        >
          <svg
            focusable="false"
            className="h-6 w-6 sm:h-[1.5vw] sm:w-[1.5vw] md:h-[2.25vw] md:w-[2.25vw] fill-stone-400 transition group-hover:fill-stone-300"
            viewBox="0 0 24 24"
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
          </svg>
        </button>
        <h1 className="mb-6 sm:mb-[1.75vw] text-2xl sm:text-[3.5vw] md:text-[4.6vw] text-center font-bold leading-[100%]">Submit a Request</h1>
      </div>
      <form className="flex h-full flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          {RADIO_FIELDS.map((item) => (
            <RadioGroup
              onValueChange={(value) => setForm((prev) => ({ ...prev, [item.formKey]: value }))}
              key={item.title}
              className={`mb-6 sm:mb-[1.75vw] inline-block w-full sm:w-[calc(50%-1.75vw)] ${item.classes}`}
            >
              <h4 className="mb-2 sm:mb-[0.2vw] md:mb-[0.5vw] text-lg sm:text-[1.3vw] md:text-[3vw] font-medium">{item.title}</h4>
              {item.radioArray.map((radio) => (
                <div 
                  key={radio.value} 
                  className="flex items-center mb-3 sm:mb-[1vw] md:mb-[2vw] space-x-2 sm:space-x-[0.65vw] md:space-x-[1vw] font-[400]"
                >
                  <RadioGroupItem value={radio.value} id={radio.name} />
                  <label 
                    htmlFor={radio.name} 
                    className="text-lg sm:text-[1.1vw] md:text-[3vw] leading-normal"
                  >
                    {radio.name}
                  </label>
                </div>
              ))}
              {errors[item.formKey] && (
                <p className="text-red-500 text-sm sm:text-[0.9vw] mt-2 sm:mt-[0.5vw] block">{errors[item.formKey]}</p>
              )}
            </RadioGroup>
          ))}

          <div className="w-full space-y-6 sm:space-y-[2vw] text-base sm:text-[1.1vw]">
            {INPUT_FIELDS.map((item) => (
              <div key={item.label} className={`w-full ${item.classes}`}>
                <label className="leading-[1.5] mb-2 sm:mb-[0.4vw] text-lg sm:text-[1.2vw] md:text-[3vw] inline-block">
                  {item.label}
                </label>
                <input
                  onChange={({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }))}
                  type={item.type || 'text'}
                  name={item.name}
                  id={item.label}
                  className="h-12 sm:h-[3vw] md:h-[4vw] w-full appearance-none rounded-[0.25vw] border-[0.125vw] border-primary/80 bg-transparent px-4 sm:px-[1vw] py-4 sm:py-[1.8vw]"
                />
                {errors[item.name] && (
                  <p className="text-red-500 text-sm sm:text-[0.9vw] mt-2 sm:mt-[0.5vw] block">{errors[item.name]}</p>
                )}
              </div>
            ))}
            <div className="w-full">
              <label className="leading-[1.5] mb-2 sm:mb-[0.4vw] text-lg sm:text-[1.2vw] md:text-[3vw] inline-block" htmlFor="message">
                Tell us about your project.
              </label>
              <textarea
                minLength={20}
                maxLength={500}
                onChange={({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }))}
                id="message"
                name="message"
                className="min-h-[150px] sm:min-h-[10vw] w-full resize-none border-[0.125vw] rounded-[0.125vw] text-base sm:text-[1.2vw] md:text-[3vw] border-primary/80 bg-transparent px-4 sm:px-[0.8vw] py-2 sm:py-[0.6vw]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm sm:text-[0.9vw] mt-2 sm:mt-[0.5vw] block">{errors.message}</p>
              )}
            </div>
          </div>

          <Button
            title="Submit"
            type="submit"
            classes="py-4 px-8 sm:py-[1.2vw] sm:px-[5vw] md:py-[1.6vw] md:px-[8vw] text-base sm:text-[1.1vw] md:text-[3vw] bg-bg-1/90 hover:bg-bg-1/80"
            btnClasses="p-1 sm:p-[0.2vw] md:p-[0.25vw] capitalize self-start mt-8 sm:mt-[2.5vw]"
          />
        </div>
      </form>
    </div>
  );
};
export default Index;
