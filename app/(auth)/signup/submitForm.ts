import { useSignUp } from "@/features/services/auth";
import { signUpInterface } from "@/types/form.schema";

export default async function submitForm({
  data,
  toast,
}: {
  data: signUpInterface;
  toast: any;
}) {
  try {
    const response = await useSignUp(data);
    if (response.data.success) {
      toast.success("Sign Up Sucessfully");   
    } else {
      toast.error(response.data.success);
    }
    console.log(response);
  } catch (e: any) {
    console.log(e);
    toast.error(e.response.data.message);
  }
}
