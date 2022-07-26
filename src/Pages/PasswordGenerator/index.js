import style from "./style.module.css";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiCopyAlt } from "react-icons/bi";
import { useState } from "react";
import {
  numbers,
  lowerCaseLetters,
  upperCaseLetters,
  specialCharacters,
} from "./characters";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [passwordLenght, setpasswordLenght] = useState(20);
  const [includeUppercase, setincludeUppercase] = useState(false);
  const [includeLowercase, setincludeLowercase] = useState(false);
  const [includeNumbers, setincludeNumbers] = useState(false);
  const [includeSymbols, setincludeSymbols] = useState(false);

  const handleGeneratePassword = (e) => {
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      toast.error("You must Select at least one option");
    }
    let characterList = "";

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }

    if (includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }

    if (includeNumbers) {
      characterList = characterList + numbers;
    }

    if (includeSymbols) {
      characterList = characterList + specialCharacters;
    }

    setPassword(createPassword(characterList));
  };
  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLenght; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  const handleCopyPassword = (e) => {
    navigator.clipboard.writeText(password);
    toast.success("Successfully Copied");
  };

  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.generator}>
          <h1 className={style.generatorHeader}>Password Generator</h1>
          <div className={style.generatorPassword}>
            <h3>{password}</h3>
            <button onClick={handleCopyPassword} className={style.copyButton}>
              <BiCopyAlt />
            </button>
          </div>

          <div className={style.formGroup}>
            <label htmlFor="passwordLenght">Password Length</label>
            <input
              defaultValue={passwordLenght}
              onChange={(e) => setpasswordLenght(e.target.value)}
              type="number"
              id="passwordLenght"
              name="passwordLenght"
              max="20"
              min="6"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="uppercaseLetters">Include Uppercase Letters</label>
            <input
              checked={includeUppercase}
              onChange={(e) => setincludeUppercase(e.target.checked)}
              type="checkbox"
              id="uppercaseLetters"
              name="uppercaseLetters"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="lowercaseLetters">Include Lowercase Letters</label>
            <input
              checked={includeLowercase}
              onChange={(e) => setincludeLowercase(e.target.checked)}
              type="checkbox"
              id="lowercaseLetters"
              name="lowercaseLetters"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="includeNumbers">Include Numbers</label>
            <input
              checked={includeNumbers}
              onChange={(e) => setincludeNumbers(e.target.checked)}
              type="checkbox"
              id="includeNumbers"
              name="includeNumbers"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="includeSymbols">Include Symbols</label>
            <input
              checked={includeSymbols}
              onChange={(e) => setincludeSymbols(e.target.checked)}
              type="checkbox"
              id="includeSymbols"
              name="includeSymbols"
            />
          </div>
          <button
            onClick={handleGeneratePassword}
            className={style.generatorButton}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}
