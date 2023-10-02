import QueryProvider from "@/Layout/Provider";
import ResetPasswordForm from "./ResetPasswordForm";

export default function Page() {
  return (
    <QueryProvider
      Children={
        <div className="flex items-center justify-center w-full bg-gray-200 h-[90.42vh]">
          <ResetPasswordForm />
        </div>
      }
    />
  );
}
