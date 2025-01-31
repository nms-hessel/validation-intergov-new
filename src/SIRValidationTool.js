import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    // Simple example to generate output (could be enhanced)
    console.log("Generated report:", formData);
  };

  return (
    <div className="p-6">
      <Card>
        <CardContent>
          <h1 className="text-xl font-bold">{steps[step].title}</h1>
          <p className="mb-4">{steps[step].description}</p>
          <Textarea
            value={formData[steps[step].field]}
            onChange={(e) => handleInputChange(steps[step].field, e.target.value)}
            placeholder="Schrijf je antwoord hier..."
            className="mb-4"
          />
          <div className="flex justify-between">
            <Button onClick={previousStep} disabled={step === 0}>
              Vorige
            </Button>
            {step < steps.length - 1 ? (
              <Button onClick={nextStep}>Volgende</Button>
            ) : (
              <Button onClick={generateReport}>Rapport genereren</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
