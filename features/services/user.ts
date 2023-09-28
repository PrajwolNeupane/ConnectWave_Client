import {
  editProfileInterface,
  logInInterface,
  signUpInterface,
} from "@/types/form.schema";
import { api } from "../endpoints/api";

const baseEnd = "/profile";

export const useEditProfile = async ({
  data,
}: {
  data: editProfileInterface;
}) => {
  const response: {
    data: {
      message: string;
      success: boolean;
    };
  } = await api.post<any, editProfileInterface>(`${baseEnd}/edit`, data);
  return response.data;
};
