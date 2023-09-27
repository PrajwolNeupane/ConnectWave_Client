import PostCard from "@/components/PostCard";
import axios from "axios";
import Image from "next/image";

export default async function Page() {
  const response: {
    data: {
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
            followers: Array<string>;
            following: string[];
            posts: string[];
            createdAt: string;
            updatedAt: string;
          }
        | undefined;
    };
  } = await axios.get("http://localhost:8000/auth/prajwol");
  if (response.data.success) {
    return (
      <>
        <div className="px-[15%] flex flex-col bg-white pb-3 shadow">
          <Image
            src={response.data.user?.coverphotourl!}
            width={1000}
            height={1000}
            alt={`${response.data.user?.username} coverphoto`}
            className="w-full h-[350px] object-cover rounded-md"
          />
          <div className="flex mt-[-70px] mx-8 gap-4">
            <Image
              src={response.data.user?.photourl!}
              width={1000}
              height={1000}
              alt={`${response.data.user?.username} profile photo`}
              className="w-[180px] h-[180px] object-cover rounded-full border-[5px] border-white"
            />
            <div className="flex flex-col justify-end mb-5">
              <h3 className="font-bold text-xl text-gray-900">
                @{response.data.user?.username}
              </h3>
              <h5 className="font-semibold text-xxs text-gray-700">
                {response.data.user?.firstname +
                  " " +
                  response.data.user?.lastname}
              </h5>
            </div>
          </div>
          <hr className="w-full h-[1px] bg-gray-300 my-2" />
          <div className="flex w-full gap-10 items-center justify-center">
            <div className="flex flex-col items-center max-w-[33%]">
              <h2 className="text-md font-bold text-gray-800">
                {response.data.user?.followers.length}
              </h2>
              <h4 className="text-xxs font-semibold text-gray-400">
                Followers
              </h4>
            </div>
            <div className="flex flex-col items-center max-w-[33%]">
              <h2 className="text-md font-bold text-gray-800">
                {response.data.user?.following.length}
              </h2>
              <h4 className="text-xxs font-semibold text-gray-400">
                Following
              </h4>
            </div>
            <div className="flex flex-col items-center max-w-[33%]">
              <h2 className="text-sm font-bold text-gray-800">1.2M</h2>
              <h4 className="text-xxxs font-semibold text-gray-400">Likes</h4>
            </div>
          </div>
        </div>
        <div className="flex items-start bg-gray-200 px-[15%] py-5 gap-5">
          <div className="flex flex-col w-2/3 bg-white shadow rounded-md p-5 sticky top-[85px]">
            <h2 className="text-xs font-semibold text-gray-800">Bio</h2>
            <p className="text-xxs font-semibold text-gray-600 ">
              I am Prajwol Neupane. A skilled developer with a passion for web
              and app creation. Experienced in React.js, Node.js, and more. My
              dedication to problem-solving and learning is evident through
              their commitment to coding challenges and staying updated with
              tech trends. With a strong background in web development and a
              keen eye for design, valuable asset in any development endeavor.
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-5">
            <PostCard images={[""]} videos={[]} />
            <PostCard images={[""]} videos={[]} />
          </div>
        </div>
      </>
    );
  }
}
