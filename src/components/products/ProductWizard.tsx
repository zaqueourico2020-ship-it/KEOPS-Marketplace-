"use client";

import { useState } from "react";

import ProductForm from "./ProductForm";
import ProductImages from "./ProductImages";
import ProductPricing from "./ProductPricing";
import ProductInventory from "./ProductInventory";
import ProductShipping from "./ProductShipping";
import ProductSeo from "./ProductSeo";
import ProductVariants from "./ProductVariants";
import ProductStatus from "./ProductStatus";
import ProductProgress from "./ProductProgress";

const steps = [
  "Informações",
  "Imagens",
  "Preços",
  "Estoque",
  "Envio",
  "SEO",
  "Variações",
  "Status",
];

export default function ProductWizard() {
  const [step, setStep] = useState(0);

  function nextStep() {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  }

  function previousStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  return (
    <div className="space-y-6">

      <ProductProgress
        currentStep={step}
        totalSteps={steps.length}
        title={steps[step]}
      />

      <div className="flex flex-wrap gap-2">
        {steps.map((title, index) => (
          <button
            key={title}
            type="button"
            onClick={() => setStep(index)}
            className={`px-4 py-2 rounded-xl font-semibold transition ${
              step === index
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {index + 1}. {title}
          </button>
        ))}
      </div>

      {step === 0 && <ProductForm />}
      {step === 1 && <ProductImages />}
      {step === 2 && <ProductPricing />}
      {step === 3 && <ProductInventory />}
      {step === 4 && <ProductShipping />}
      {step === 5 && <ProductSeo />}
      {step === 6 && <ProductVariants />}
      {step === 7 && <ProductStatus />}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={previousStep}
          disabled={step === 0}
          className="px-6 py-3 rounded-xl bg-gray-700 text-white disabled:opacity-50"
        >
          Voltar
        </button>

        <button
          type="button"
          onClick={nextStep}
          disabled={step === steps.length - 1}
          className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50"
        >
          {step === steps.length - 1 ? "Finalizado" : "Próximo"}
        </button>
      </div>
    </div>
  );
}
