
"use client";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function CountryCode({ value, onChange }) {
  return (
    <PhoneInput
      defaultCountry="in"
      value={value}
      onChange={onChange}
      inputClassName="w-full "
      style={
        {
          '--react-international-phone-flag-width': '50px',
          '--react-international-phone-flag-height': '24px',
        } 
      }
      />
  );
}