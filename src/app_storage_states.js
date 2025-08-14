import { useState } from "react";

export function appStorageStates() {
    const [state_userSavedWebLinks, setState_userSavedWebLinks] = useState([]);
  return {
    state_userSavedWebLinks, setState_userSavedWebLinks
  };
}
