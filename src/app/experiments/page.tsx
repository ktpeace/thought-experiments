import { redirect } from "next/navigation";
import experimentData from "@/components/experimentData";

// Return a random key from the experimentData object
const getRandomExperimentKey = () => {
  const keys = Object.keys(experimentData);
  return keys[Math.floor(Math.random() * keys.length)];
};

export default function ExperimentsPage() {
  const randomKey = getRandomExperimentKey();

  // Redirect to a random experiment page
  redirect(`/experiments/${randomKey}`);

  return null; // This component never renders
}
