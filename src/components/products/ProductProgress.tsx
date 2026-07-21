"use client";

interface ProductProgressProps {
  currentStep: number;
  totalSteps: number;
  title: string;
}

export default function ProductProgress({
  currentStep,
  totalSteps,
  title,
}: ProductProgressProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h2 className="text-white text-xl font-bold">
            Cadastro de Produto
          </h2>

          <p className="text-gray-400">
            Etapa {currentStep + 1} de {totalSteps} • {title}
          </p>
        </div>

        <span className="text-purple-400 font-bold text-lg">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-purple-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
