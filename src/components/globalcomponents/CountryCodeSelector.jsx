
"use client";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function CountryCode({ value, onChange }) {
  return (
    <PhoneInput
      defaultCountry="in"
      value={value}
      onChange={onChange}
      inputClassName="form-control w-full "
      countrySelectorStyleProps={{
        buttonClassName: "country-selector-btn",
        dropdownClassName: "country-selector-dropdown"
      }}
    />
  );
}