import Experiments from "@/components/experiments/Experiments";
import { Suspense } from "react";

const ExperimentsPage = () => {
  return (
    <Suspense>
      <Experiments />
    </Suspense>
  );
};

export default ExperimentsPage;
