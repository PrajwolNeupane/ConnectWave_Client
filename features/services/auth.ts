import { logInInterface, signUpInterface } from "@/types/form.schema";
import { api } from "../endpoints/api";

const baseEnd = "/auth";

export const useSignUp = async (body: signUpInterface) => {
  const response = await api.post<any, signUpInterface>(
    `${baseEnd}/signup`,
    body
  );
  return response;
};
export const useLogIn = async (body: logInInterface) => {
  const response = await api.post<any, logInInterface>(
    `${baseEnd}/login`,
    body
  );
  return response;
};

export const useAuth = async () => {
  const response: {
    data: {
      message: string;
      success: boolean;
      user:
        | {
            _id: string;
            clerkid: string;
            username: string;
            firstname: string;
            lastname: string;
            email: string;
            photourl: string;
            coverphotourl: string;
            dob: string;
            gender: string;
            followers: string[];
            following: string[];
            posts: string[];
            createdAt: string;
            updatedAt: string;
          }
        | undefined;
    };
  } = await api.get(`${baseEnd}/me`);
  return response.data;
};
