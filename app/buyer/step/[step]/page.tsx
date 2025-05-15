import { StepLayout } from "@/components/buyer/step-layout"
import { StepOneForm } from "@/components/buyer/step-one-form"
import { StepTwoForm } from "@/components/buyer/step-two-form"
import { PropertySearch } from "@/components/buyer/property-search"
import { StepFourForm } from "@/components/buyer/step-four-form"

export default function BuyerStepPage({ params }: { params: { step: string } }) {
  const stepNumber = Number.parseInt(params.step)

  // Render the appropriate form based on the step number
  const renderStepContent = () => {
    switch (stepNumber) {
      case 1:
        return <StepOneForm />
      case 2:
        return <StepTwoForm />
      case 3:
        return <PropertySearch />
      case 4:
        return <StepFourForm />
      default:
        return <div>Invalid step</div>
    }
  }

  return <StepLayout stepNumber={stepNumber}>{renderStepContent()}</StepLayout>
}
