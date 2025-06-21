import { useContext } from "react";
import { ApplicationContext } from "../state/Application/ApplicationContext";

export default function useApplication() {
  const application = useContext(ApplicationContext);

  if (!application) {
    throw new Error(
      "useApplication must be used within an ApplicationProvider"
    );
  }

  return application;
}
