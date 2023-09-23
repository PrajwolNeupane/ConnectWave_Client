import { signUpInterface } from "@/types/form.schema";
import { api } from "../endpoints/api";

const baseEnd = "/auth";

export const useSignUp = async (body: signUpInterface) => {
  const response = await api.post<any, signUpInterface>(
    `${baseEnd}/signup`,
    body
  );
  return response;
};
