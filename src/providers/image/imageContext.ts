"use client";

import { createContext } from "react";

export interface ImageContextArgs {
  handleImageChange: (file: File | null) => void;
  handleRemoveImage: () => void;
  completion: string;
  isLoading: boolean;
  file: File | null;
}

export const imageContext = createContext({} as ImageContextArgs);
