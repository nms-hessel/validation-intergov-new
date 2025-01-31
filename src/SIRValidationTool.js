import React, { useState } from "react";

export default function SIRValidationTool() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    problemDescription: "",
    stakeholders: "",
    uniqueness: "",
    solutionIdea: "",
    idealWorld: "",
    urgency: "",
    funding: "",
    worth: "",
  });

  const [reportGenerated, setReportGenerated] = useState(false);

  const steps = [
    {
      title: "Wat is het probleem?",
      description:
        "Omschrijf het probleem dat je wilt oplossen. Stel jezelf 5 keer 'waarom?' om het onderliggende probleem te achterhalen.",
      field: "problemDescription",
    },
    {
      title: "Wie ervaren het probleem?",
      description:
        "Welke personen, groepen of afdelingen hebben dagelijks met dit probleem te maken? Wie heeft er pijn?",
      field: "stakeholders",
    },
    {
      title: "Is het een uniek probleem?",
      description:
        "Zijn er andere organisaties die mogelijk hetzelfde probleem hebben? Hoe groot is de schaal van het probleem?",
      field: "uniqueness",
    },
    {
      title: "Hebben jullie een oplossing in gedachten?",
      description:
        "Heb je al een specifieke oplossing in gedachten, of sta je open voor meerdere mogelijkheden?",
      field: "solutionIdea",
    },
    {
      title: "Hoe ziet de ideale wereld eruit?",
      description:
        "Beschrijf de situatie waarin het probleem volledig is opgelost. Wat zou er dan anders zijn?",
      field: "idealWorld",
    },
    {
      title: "Waarom is het nu urgent?",
      description:
        "Waarom moet dit probleem juist nu aangepakt worden? Wat gebeurt er als je niets doet?",
      field: "urgency",
    },
    {
      title: "Wie gaat betalen?",
      description:
        "Wie zal op termijn voor de oplossing moeten betalen? Hoeveel is de oplossing waard?",
      field: "funding",
    },
    {
      title: "Wat is de oplossing waard?",
      description:
        "Welke voordelen levert de oplossing op? Denk aan tijd, kwaliteit, kostenbesparing, enz.",
      field: "worth",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const generateReport = () => {
    setReportGenerated(true);
  };

  const copyToClipboard = () => {
    const reportText = steps
      .map((step) => `${step.title}\n${formData[step.field] || "Geen antwoord"}\n`)
      .join("\n");
    navigator.clipboard.writeText(reportText);
    alert("Rapport gekopieerd naar klembord!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="border rounded-lg shadow-lg p-6">
        {!reportGenerated ? (
          <>
            <h1 className="text-xl font-bold mb-2">{steps[step].title}</h1>
            <p className="mb-4">{steps[step].description}</p>

            <textarea
              value={formData[steps[step].field]}
              onChange={(e) => handleInputChange(steps[step].field, e.target.value)}
              placeholder="Schrijf je antwoord hier..."
              className="p-2 border rounded w-full mb-4"
            />

            <div className="flex justify-between">
              <button
                onClick={previousStep}
                disabled={step === 0}
                className="p-2 bg-gray-500 text-white rounded disabled:opacity-50"
              >
                Vorige
              </button>

              {step < steps.length - 1 ? (
                <button onClick={nextStep} className="p-2 bg-blue-500 text-white rounded">
                  Volgende
                </button>
              ) : (
                <button onClick={generateReport} className="p-2 bg-green-500 text-white rounded">
                  Rapport genereren
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold mb-4">📋 Jouw Challenge Rapport</h1>
            <div className="bg-gray-100 p-4 rounded">
              {steps.map((step) => (
                <div key={step.field} className="mb-4">
                  <h2 className="font-bold">{step.title}</h2>
                  <p>{formData[step.field] || "Geen antwoord"}</p>
                </div>
              ))}
            </div>

            <button
              onClick={copyToClipboard}
              className="mt-4 p-2 bg-blue-500 text-white rounded w-full"
            >
              📋 Kopieer naar klembord
            </button>
          </>
        )}
      </div>
    </div>
  );
}
