import QueryProvider from "@/Layout/Provider";
import ProfileEditModal from "./ProfileEditModal";

export default function Page() {
  return (
    <QueryProvider
      Children={
        <div className="flex items-center justify-center w-full bg-gray-200 py-10">
          <ProfileEditModal />
        </div>
      }
    />
  );
}
