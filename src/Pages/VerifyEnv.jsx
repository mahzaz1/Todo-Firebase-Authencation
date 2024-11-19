import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Input";

function VerifyEnv() {
  const navigate = useNavigate();
  const envKey = process.env.REACT_APP_SPECIAL_KEY;
  const [userInput, setUserInput] = useState("");

  const handleVerify = () => {
    if (userInput === envKey) {
      navigate("/add-todo");
    }
  };

  return (
    <div className="my-todo-list">
      <h1>Enter Your Secret Key For Adding New Todo</h1>
      <p>env key is : 123456</p>
      <Input
        value={userInput}
        setValue={setUserInput}
        handlefunction={handleVerify}
        button={"Verify"}
        placeholder={"Enter your special key here..."}
      />
      
      {userInput !== envKey && <p style={{ color: "red" }}>Invalid key!</p>}
    </div>
  );
}

export default VerifyEnv;
