"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { SignupModal } from "./signup-modal";

interface ModalContext {
  openModal: (plan?: string) => void;
}

const SignupModalContext = createContext<ModalContext>({ openModal: () => {} });

export function useSignupModal() {
  return useContext(SignupModalContext);
}

export function SignupModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState<string | undefined>();

  const openModal = useCallback((p?: string) => {
    setPlan(p);
    setOpen(true);
  }, []);

  return (
    <SignupModalContext.Provider value={{ openModal }}>
      {children}
      <SignupModal open={open} onClose={() => setOpen(false)} defaultPlan={plan} />
    </SignupModalContext.Provider>
  );
}
