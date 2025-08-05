import React, { useState } from 'react';

// Button Input
export const ButtonInput = () => {
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Button Input</label>
      <input
        type="button"
        value={clicked ? "Clicked!" : "Click Me"}
        onClick={handleClick}
        className={`px-4 py-2 rounded ${
          clicked ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
        } cursor-pointer transition`}
      />
      <p className="mt-1 text-sm text-gray-500">
        Status: {clicked ? "Button clicked!" : "Ready to click"}
      </p>
    </div>
  );
};

// Checkbox Input
export const CheckboxInput = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="mr-2 h-5 w-5 text-blue-600 rounded"
        />
        <span className="text-gray-700">Checkbox Input</span>
      </label>
      <p className="mt-1 text-sm text-gray-500">
        Status: {checked ? "Checked" : "Unchecked"}
      </p>
    </div>
  );
};

// Color Input
export const ColorInput = () => {
  const [color, setColor] = useState("#3b82f6");

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Color Input</label>
      <div className="flex items-center">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="h-10 w-16 cursor-pointer"
        />
        <div 
          className="ml-4 h-10 w-32 rounded border"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <p className="mt-1 text-sm text-gray-500">
        Selected: {color}
      </p>
    </div>
  );
};

// Date Input
export const DateInput = () => {
  const [date, setDate] = useState("");

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Date Input</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <p className="mt-1 text-sm text-gray-500">
        Selected: {date || "No date selected"}
      </p>
    </div>
  );
};

// Datetime-Local Input
export const DateTimeLocalInput = () => {
  const [datetime, setDatetime] = useState("");

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Date & Time Input</label>
      <input
        type="datetime-local"
        value={datetime}
        onChange={(e) => setDatetime(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <p className="mt-1 text-sm text-gray-500">
        Selected: {datetime || "No datetime selected"}
      </p>
    </div>
  );
};

// Email Input
export const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value) || value === "");
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Email Input</label>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        className={`w-full px-3 py-2 border rounded-md ${
          isValid ? "border-gray-300" : "border-red-500"
        }`}
        placeholder="user@example.com"
      />
      {!isValid && (
        <p className="mt-1 text-sm text-red-500">Please enter a valid email</p>
      )}
    </div>
  );
};

// File Input
export const FileInput = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">File Input</label>
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      {preview && (
        <div className="mt-4">
          <label className="block text-gray-700 mb-2">Preview:</label>
          {file.type.startsWith("image/") ? (
            <img 
              src={preview} 
              alt="Preview" 
              className="max-w-xs max-h-40 border rounded-md"
            />
          ) : (
            <div className="p-4 bg-gray-100 rounded-md">
              <p>{file.name}</p>
              <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Hidden Input
export const HiddenInput = () => {
  const [hiddenValue, setHiddenValue] = useState("secret123");

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Hidden Input</label>
      <p className="text-sm text-gray-500 mb-2">
        This value is hidden but accessible in the form data
      </p>
      <input
        type="hidden"
        value={hiddenValue}
        onChange={(e) => setHiddenValue(e.target.value)}
      />
      <div className="bg-gray-100 p-3 rounded-md">
        <p>Value: {hiddenValue}</p>
        <button
          onClick={() => setHiddenValue(Math.random().toString(36).substring(2, 10))}
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-sm"
        >
          Generate New Value
        </button>
      </div>
    </div>
  );
};

// Image Input
export const ImageInput = () => {
  const [Image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Image Input</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      {preview && (
        <div className="mt-4">
          <label className="block text-gray-700 mb-2">Preview:</label>
          <img 
            src={preview} 
            alt="Preview" 
            className="max-w-xs max-h-40 border rounded-md"
          />
        </div>
      )}
    </div>
  );
};

// Month Input
export const MonthInput = () => {
  const [month, setMonth] = useState("");

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Month Input</label>
      <input
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <p className="mt-1 text-sm text-gray-500">
        Selected: {month || "No month selected"}
      </p>
    </div>
  );
};

// Number Input
export const NumberInput = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    
    if (value && (isNaN(value) || parseFloat(value) < 0)) {
      setError("Please enter a positive number");
    } else {
      setError("");
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Number Input</label>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        min="0"
        step="0.1"
        className={`w-full px-3 py-2 border rounded-md ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="Enter a number"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Password Input
export const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState("");

  const checkPasswordStrength = (value) => {
    if (!value) return "";
    
    const hasLetters = /[a-zA-Z]/.test(value);
    const hasNumbers = /\d/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const length = value.length;

    if (length < 6) return "Very Weak";
    if (length < 8) return "Weak";
    if (length >= 8 && hasLetters && hasNumbers && hasSpecial) return "Strong";
    if (length >= 8 && hasLetters && hasNumbers) return "Medium";
    return "Weak";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(checkPasswordStrength(value));
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Password Input</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
          placeholder="Enter your password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 px-3 flex items-center"
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>
      <div className="mt-2 flex items-center">
        <span className="text-sm text-gray-600 mr-2">Strength:</span>
        {strength && (
          <span className={`text-sm font-medium ${
            strength === "Very Weak" ? "text-red-500" :
            strength === "Weak" ? "text-orange-500" :
            strength === "Medium" ? "text-yellow-500" : "text-green-500"
          }`}>
            {strength}
          </span>
        )}
      </div>
    </div>
  );
};

// Radio Input
export const RadioInput = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const options = [
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" }
  ];

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Radio Input</label>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="radio"
              id={option.id}
              name="radio-group"
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)}
              className="mr-2 h-4 w-4 text-blue-600"
            />
            <label htmlFor={option.id} className="text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <p className="mt-1 text-sm text-gray-500">
        Selected: {options.find(opt => opt.id === selectedOption)?.label}
      </p>
    </div>
  );
};

// Range Input
export const RangeInput = () => {
  const [value, setValue] = useState(50);

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">
        Range Input: {value}
      </label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
    </div>
  );
};

// Reset Input
export const ResetInput = ({ onReset }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Reset Input</label>
      <input
        type="reset"
        value="Reset Form"
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 cursor-pointer"
        onClick={onReset}
      />
      <p className="mt-1 text-sm text-gray-500">
        Click to reset all form values
      </p>
    </div>
  );
};

// Search Input
export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  
  const mockResults = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry", 
    "Fig", "Grape", "Honeydew", "Kiwi", "Lemon"
  ];

  const handleSearch = (value) => {
    setQuery(value);
    
    if (value) {
      const filtered = mockResults.filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Search Input</label>
      <input
        type="search"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        placeholder="Search fruits..."
      />
      
      {results.length > 0 && (
        <div className="mt-2 border border-gray-200 rounded-md max-h-40 overflow-y-auto">
          <ul>
            {results.map((result, index) => (
              <li 
                key={index} 
                className="p-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-0"
                onClick={() => setQuery(result)}
              >
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Submit Input
export const SubmitInput = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSubmit) onSubmit();
    }, 1500);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Submit Input</label>
      <input
        type="submit"
        value={isSubmitting ? "Submitting..." : "Submit Form"}
        disabled={isSubmitting}
        className={`px-4 py-2 rounded cursor-pointer ${
          isSubmitting 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-green-500 hover:bg-green-600 text-white"
        }`}
        onClick={handleSubmit}
      />
    </div>
  );
};

// Tel Input
export const TelInput = () => {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validatePhone = (value) => {
    const regex = /^\+?[0-9\s-()]{7,15}$/;
    return regex.test(value) || value === "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setIsValid(validatePhone(value));
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Telephone Input</label>
      <input
        type="tel"
        value={phone}
        onChange={handleChange}
        className={`w-full px-3 py-2 border rounded-md ${
          isValid ? "border-gray-300" : "border-red-500"
        }`}
        placeholder="+1 (555) 123-4567"
        pattern="^\+?[0-9\s-()]{7,15}$"
      />
      {!isValid && (
        <p className="mt-1 text-sm text-red-500">
          Please enter a valid phone number
        </p>
      )}
    </div>
  );
};

// Text Input
export const TextInput = () => {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    setCharCount(value.length);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Text Input</label>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        placeholder="Enter some text"
      />
      <p className="mt-1 text-sm text-gray-500">
        Character count: {charCount}
      </p>
    </div>
  );
};

// Time Input
export const TimeInput = () => {
  const [time, setTime] = useState("");

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Time Input</label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <p className="mt-1 text-sm text-gray-500">
        Selected: {time || "No time selected"}
      </p>
    </div>
  );
};

// URL Input
export const UrlInput = () => {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return value === "";
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUrl(value);
    setIsValid(validateUrl(value));
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">URL Input</label>
      <input
        type="url"
        value={url}
        onChange={handleChange}
        className={`w-full px-3 py-2 border rounded-md ${
          isValid ? "border-gray-300" : "border-red-500"
        }`}
        placeholder="https://example.com"
      />
      {!isValid && url && (
        <p className="mt-1 text-sm text-red-500">
          Please enter a valid URL (e.g., https://example.com)
        </p>
      )}
    </div>
  );
};

// Week Input
export const WeekInput = () => {
  const [week, setWeek] = useState("");

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Week Input</label>
      <input
        type="week"
        value={week}
        onChange={(e) => setWeek(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <p className="mt-1 text-sm text-gray-500">
        Selected: {week || "No week selected"}
      </p>
    </div>
  );
};