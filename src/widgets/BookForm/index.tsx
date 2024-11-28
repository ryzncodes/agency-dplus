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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid:', form);
      // Process form submission
    } else {
      console.log('Form validation failed');
      return; // Stop here if validation fails
    }
  };

  return (
    <div className="mx-auto max-w-[70vw] md:max-w-[85vw] px-[4vw] ">
      <div className="relative">
        <button
          className=" group absolute left-0 top-[25%] z-10 box-content rounded-full bg-stone-800 p-[0.5vw] hover:bg-stone-800"
          onClick={() => push('/')}
        >
          <svg
            focusable="false"
            className="h-[1.5vw] w-[1.5vw] md:h-[2.25vw] md:w-[2.25vw] fill-stone-400 transition group-hover:fill-stone-300"
            viewBox="0 0 24 24"
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
          </svg>
        </button>
        <h1 className="mb-[1.75vw] md:text-[4.6vw] md:mb-[2.25vw] text-center text-[3.5vw] font-bold leading-[100%]">Submit a Request</h1>
      </div>
      <form className="flex h-full flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          {RADIO_FIELDS.map((item) => (
            <RadioGroup
              onValueChange={(value) => setForm((prev) => ({ ...prev, [item.formKey]: value }))}
              key={item.title}
              className={`mb-[1.75vw] inline-block w-[calc(50%-1.75vw)] ${item.classes}`}
            >
              <h4 className="mb-[0.2vw] md:mb-[0.5vw] text-[1.3vw] md:text-[1.6vw] font-medium">{item.title}</h4>
              {item.radioArray.map((radio) => (
                <div key={radio.value} className="flex items-center space-x-[0.65vw] md:space-x-[1vw] md:space-y-[0.3vw] font-[400]">
                  <RadioGroupItem value={radio.value} id={radio.name} />
                  <label htmlFor={radio.name} className="text-[1vw] md:text-[1.25vw] leading-[1.75vw]">
                    {radio.name}
                  </label>
                </div>
              ))}
              {errors[item.formKey] && (
                <p className="text-red-500 text-[0.9vw] mt-[0.5vw] block">{errors[item.formKey]}</p>
              )}
            </RadioGroup>
          ))}

          <div className="w-full space-y-[2vw] text-[1.1vw]">
            {INPUT_FIELDS.map((item) => (
              <div key={item.label} className={`w-full ${item.classes}`}>
                <label htmlFor={item.label} className="leading-[1.5] mb-[0.4vw] text-[1.2vw] md:text-[1.5vw] inline-block">
                  {item.label}
                </label>
                <input
                  onChange={({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }))}
                  type={item.type || 'text'}
                  name={item.name}
                  id={item.label}
                  className="h-[3vw] md:h-[4vw] w-full appearance-none rounded-[0.25vw] border-[0.125vw] border-primary/80 bg-transparent px-[1vw] py-[0.8vw]"
                />
                {errors[item.name] && (
                  <p className="text-red-500 text-[0.9vw] mt-[0.5vw] block">{errors[item.name]}</p>
                )}
              </div>
            ))}
            <div className="w-full">
              <label className="leading-[1.5] mb-[0.4vw] text-[1.2vw] md:text-[1.5vw] inline-block" htmlFor="message">
                Tell us about your project.
              </label>
              <textarea
                minLength={20}
                maxLength={500}
                onChange={({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }))}
                id="message"
                name="message"
                className="min-h-[10vw] w-full resize-none border-[0.125vw] rounded-[0.125vw] text-[1.2vw] md:text-[1.5vw] border-primary/80 bg-transparent px-[0.8vw] py-[0.6vw]"
              />
              {errors.message && (
                <p className="text-red-500 text-[0.9vw] mt-[0.5vw] block">{errors.message}</p>
              )}
            </div>
          </div>

          <Button
            title="Submit"
            type="submit"
            classes="py-[1.2vw] px-[5vw] md:py-[1.6vw] md:px-[8vw] text-[1.1vw] md:text-[1.5vw] bg-bg-1/90 hover:bg-bg-1/80"
            btnClasses="p-[0.2vw] md:p-[0.25vw] capitalize self-start mt-[2.5vw]"
          />
        </div>
      </form>
    </div>
  );
};
export default Index;
