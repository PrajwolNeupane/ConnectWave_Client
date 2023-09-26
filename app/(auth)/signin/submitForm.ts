import { useLogIn } from "@/features/services/auth";
import { logInInterface } from "@/types/form.schema";

export default async function submitForm({
  data,
  toast,
  onSuccess,
}: {
  data: logInInterface;
  toast: any;
  onSuccess: () => void;
}) {
  try {
    const response = await useLogIn(data);
    if (response.data.success) {
      toast.success("Sign In Sucessfully");
      onSuccess();
    } else {
      toast.error(response.data.message);
    }
    console.log(response);
  } catch (e: any) {
    console.log(e);
    toast.error(e.response.data.message);
  }
}
