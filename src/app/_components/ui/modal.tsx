"use client";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import { cn } from "~/utils/utils";

interface Modal {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function Modal({ isOpen, setIsOpen, children }: Modal) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-50 flex items-center justify-center",
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <div
        className={cn(
          "fixed inset-0 bg-black duration-200",
          isOpen
            ? "pointer-events-auto bg-opacity-70"
            : "pointer-events-none opacity-0",
        )}
        onClick={() => {
          setIsOpen(false);
        }}
      />
      {children}
    </div>
  );
}
