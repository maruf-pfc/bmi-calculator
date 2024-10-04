"use client";

import { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightType, setHeightType] = useState("metric");
  const [bmi, setBmi] = useState(null);
  const [advice, setAdvice] = useState("");
  const [guideline, setGuideline] = useState("");

  const calculateBmi = () => {
    let heightInMeters;
    if (heightType === "imperial") {
      const [feet, inches] = height.split(".").map(Number);
      const totalInches = feet * 12 + inches;
      heightInMeters = totalInches * 0.0254;
    } else {
      heightInMeters = height / 100;
    }

    if (weight && heightInMeters) {
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      giveAdvice(bmiValue);
      provideGuideline(bmiValue);
    }
  };

  const giveAdvice = (bmiValue) => {
    if (bmiValue < 16) {
      setAdvice("Severe Thinness");
    } else if (bmiValue >= 16 && bmiValue < 17) {
      setAdvice("Moderate Thinness");
    } else if (bmiValue >= 17 && bmiValue < 18.5) {
      setAdvice("Mild Thinness");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setAdvice("Normal");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setAdvice("Overweight");
    } else if (bmiValue >= 30 && bmiValue < 35) {
      setAdvice("Obese Class I");
    } else if (bmiValue >= 35 && bmiValue < 40) {
      setAdvice("Obese Class II");
    } else if (bmiValue >= 40) {
      setAdvice("Obese Class III");
    }
  };

  const provideGuideline = (bmiValue) => {
    if (bmiValue < 16) {
      setGuideline(
        "Seek medical advice to address severe thinness. Consider a diet rich in calories and nutrients."
      );
    } else if (bmiValue >= 16 && bmiValue < 17) {
      setGuideline(
        "Consider increasing your calorie intake with nutrient-dense foods to address moderate thinness."
      );
    } else if (bmiValue >= 17 && bmiValue < 18.5) {
      setGuideline(
        "Consider a balanced diet with slightly increased calories to address mild thinness."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setGuideline(
        "Maintain your current lifestyle to keep your weight stable."
      );
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setGuideline(
        "Consider a balanced diet with regular exercise. Focus on whole foods and portion control to manage overweight."
      );
    } else if (bmiValue >= 30 && bmiValue < 35) {
      setGuideline(
        "Consult a healthcare provider for advice on managing weight. Focus on a healthy diet and regular physical activity."
      );
    } else if (bmiValue >= 35 && bmiValue < 40) {
      setGuideline(
        "Seek guidance from a healthcare provider to address obesity. Consider a structured weight loss program."
      );
    } else if (bmiValue >= 40) {
      setGuideline(
        "Consult a healthcare provider for comprehensive management of obesity. Consider medical or surgical interventions if necessary."
      );
    }
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <input
        type="number"
        placeholder="Weight in kg"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="metric"
            checked={heightType === "metric"}
            onChange={() => setHeightType("metric")}
          />
          Height in cm
        </label>
        <label>
          <input
            type="radio"
            value="imperial"
            checked={heightType === "imperial"}
            onChange={() => setHeightType("imperial")}
          />
          Height in feet.inches
        </label>
      </div>
      <input
        type="text"
        placeholder={
          heightType === "metric" ? "Height in cm" : "Height in feet.inches"
        }
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBmi}>Calculate BMI</button>
      {bmi ? (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <p
            className={`advice ${advice
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/class-/g, "class-")}`}
          >
            {advice}
          </p>
          <q>
            <i>{guideline}</i>
          </q>
        </div>
      ) : (
        <div>
          <p className="enterInputs">
            Please enter your weight and height to calculate your BMI.
          </p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
