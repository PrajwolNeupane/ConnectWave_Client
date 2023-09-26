import { useSignUp } from "@/features/services/auth";
import { signUpInterface } from "@/types/form.schema";

export default async function submitForm({
  data,
  toast,
  onSuccess
}: {
  data: signUpInterface;
  toast: any;
  onSuccess: () => void
}) {
  try {
    const response = await useSignUp(data);
    if (response.data.success) {
      toast.success("Sign Up Sucessfully");
      onSuccess()
    } else {
      toast.error(response.data.message);
    }
    console.log(response);
  } catch (e: any) {
    console.log(e);
    toast.error(e.response.data.message);
  }
}
