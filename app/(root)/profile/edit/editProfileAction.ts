import { useEditProfile } from "@/features/services/user";
import { editProfileInterface } from "@/types/form.schema";

export default async function editProfileAction({
  data,
  toast,
  onSuccess,
}: {
  data: editProfileInterface;
  toast: any;
  onSuccess?: () => void;
}) {
  try {
    const response: {
      message: string;
      success: boolean;
    } = await useEditProfile({ data });
    if (response.success) {
      toast.success("Profile Updated");
      if (onSuccess) {
        onSuccess();
      }
    } else {
      toast.error(response.message);
    }
  } catch (e: any) {
    console.log(e);
    toast.error(e.response.message);
  }
}
