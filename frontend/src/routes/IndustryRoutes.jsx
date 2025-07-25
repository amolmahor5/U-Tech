import Banking from "@/pages/industries/banking/Banking";
import Finance from "@/pages/industries/finance/Finance";
import RealEstate from "@/pages/industries/real-estate/RealEstate";
import Construction from "@/pages/industries/construction/Construction";
import Healthcare from "@/pages/industries/healthcare/Healthcare";
import HospitalandTravelling from "@/pages/industries/hostipal-travel/HospitalandTravelling";
import Aviation from "@/pages/industries/Aviation/Aviation";
import HCM from "@/pages/industries/hcm/HCM";
import Correction from "@/pages/industries/correction/Correction";
import ELearningEducation from "@/pages/industries/e-learning-education/ELearningEducation";
import EnergyUtilities from "@/pages/industries/energy-utilities/EnergyUtilities";
import EnvManagement from "@/pages/industries/env-mangt/EnvManagement";

export const IndustryRoutes = [
    { path: "/industries/banking", element: <Banking /> },
    { path: "/industries/aviation", element: <Aviation /> },
    { path: "/industries/construction", element: <Construction /> },
    { path: "/industries/finance", element: <Finance /> },
    { path: "/industries/real-estate", element: <RealEstate /> },
    { path: "/industries/healthcare", element: <Healthcare /> },
    { path: "/industries/hospitality-travel", element: <HospitalandTravelling /> },
    { path: "/industries/hcm", element: <HCM /> },
    { path: "/industries/corrections", element: <Correction /> },
    { path: "/industries/e-learning-education", element: <ELearningEducation /> },
    { path: "/industries/energy-utilities", element: <EnergyUtilities /> },
    { path: "/industries/environmental-management", element: <EnvManagement /> },
];
