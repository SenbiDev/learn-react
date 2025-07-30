import React from 'react';
import {
  ButtonInput, CheckboxInput, ColorInput, DateInput, DateTimeLocalInput,
  EmailInput, FileInput, HiddenInput, ImageInput, MonthInput,
  NumberInput, PasswordInput, RadioInput, RangeInput, ResetInput,
  SearchInput, SubmitInput, TelInput, TextInput, TimeInput,
  UrlInput, WeekInput
} from '../components/AllInputs';

const InputDemoPage = () => {
  const handleFormReset = () => {
    alert("Form reset functionality would go here!");
  };

  const handleFormSubmit = () => {
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">All HTML Input Types Demo</h1>
      
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput />
          <EmailInput />
          <PasswordInput />
          <NumberInput />
          <TelInput />
          <UrlInput />
          <SearchInput />
          <DateInput />
          <DateTimeLocalInput />
          <TimeInput />
          <MonthInput />
          <WeekInput />
          <ColorInput />
          <FileInput />
          <ImageInput />
          <RangeInput />
          <CheckboxInput />
          <RadioInput />
          <ButtonInput />
          <ResetInput onReset={handleFormReset} />
          <SubmitInput onSubmit={handleFormSubmit} />
          <HiddenInput />
        </div>
      </form>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-md">
        <h2 className="text-xl font-semibold mb-3">Implementation Notes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Each input type has its own dedicated component</li>
          <li>State management is handled internally within each component</li>
          <li>Validation logic is implemented where appropriate</li>
          <li>Visual feedback provided for user interactions</li>
          <li>Responsive layout with grid columns</li>
          <li>Reset and Submit buttons have mock functionality</li>
        </ul>
      </div>
    </div>
  );
};

export default InputDemoPage;