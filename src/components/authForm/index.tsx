import React from "react";

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="border p-6 rounded-lg shadow-md w-full max-w-sm">
      {children}
    </div>
    </div>
  );
}
