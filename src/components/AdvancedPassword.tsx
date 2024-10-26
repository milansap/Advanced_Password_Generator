import React, { useState } from 'react';

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [allowNumbers, setAllowNumbers] = useState<boolean>(false);
  const [allowSpecialChars, setAllowSpecialChars] = useState<boolean>(false);
  const [passwordLength, setPasswordLength] = useState<number>(6);

  // Function to generate the password
  const generatePassword = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    let characters = letters;
    
    if (allowNumbers) characters += numbers;
    if (allowSpecialChars) characters += specialChars;

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(newPassword);
  };

  // Function to copy password to clipboard
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center bg-white">Advanced Password Generator</h1>

      {/* Password Input with Copy Button */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full p-2 border bg-white border-gray-300 rounded-l-md"
          placeholder="Your generated password"
        />
        <button
          onClick={copyPassword}
          className="bg-blue-500  text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          Copy
        </button>
      </div>

      {/* Password Length Selector */}
      <div className="mb-4">
        <label className="flex items-center mb-2 bg-white">
          <span className="mr-2 bg-white">Password Length:</span>
          <input
            type="number"
            min={6}
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            className="w-16 p-1 border bg-white border-gray-300 rounded-md"
          />
        </label>
      </div>

      {/* Checkbox Options */}
      <div className="mb-4 bg-white">
        <label className="flex items-center mb-2 bg-white">
          <input
            type="checkbox"
            checked={allowNumbers}
            onChange={(e) => setAllowNumbers(e.target.checked)}
            className="mr-2"
          />
          Allow Numbers
        </label>
        <label className="flex items-center bg-white">
          <input
            type="checkbox"
            checked={allowSpecialChars}
            onChange={(e) => setAllowSpecialChars(e.target.checked)}
            className="mr-2"
          />
          Allow Special Characters
        </label>
      </div>

      {/* Generate Password Button */}
      <button
        onClick={generatePassword}
        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
      >
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
