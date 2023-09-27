import AddPostButton from "@/components/AddPost/AddPostButton";
import PostCard from "@/components/PostCard";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import QueryProvider from "@/Layout/Provider";

export default function Home() {
  return (
    <>
      <div className="flex items-start  bg-gray-100 w-full py-[2%] px-[5%] justify-between">
        <QueryProvider Children={<LeftSideBar />} />
        <div className="flex flex-col lg:w-[47%] rg:w-[65%] w-full lg:ml-[25%] ml-[0%]">
          {/* Story Section */}
          <div className="flex flex-col px-5">
            <h3 className="font-bold text-gray-800 text-xs">Just for you</h3>
            <div className="flex flex-row mt-3 gap-5">
              <div className="flex flex-col items-center">
                <div className="w-[60px] aspect-square bg-gray-300 rounded-full border-[3px] border-brand"></div>
                <h3 className="text-xxxs font-bold text-gray-800 ">Preukti</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[60px] aspect-square bg-gray-300 rounded-full border-[3px] border-white"></div>
                <h3 className="text-xxxs font-bold text-gray-800 ">Preukti</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[60px] aspect-square bg-gray-300 rounded-full border-[3px] border-white"></div>
                <h3 className="text-xxxs font-bold text-gray-800 ">Preukti</h3>
              </div>
            </div>
          </div>
          {/* Add Post Section */}
          <AddPostButton />
          {/* Post Section */}
          <div className="flex flex-col p-5 gap-10">
            <PostCard images={[""]} videos={[]} />
            <PostCard images={["", "", "", "", ""]} videos={[]} />
            <PostCard images={[""]} videos={["", "", "", ""]} />
          </div>
        </div>
        <RightSideBar />
      </div>
    </>
  );
}
