export default function LeftSideBar() {
  return (
    <div className="max-lg:hidden w-[22%] px-[1.5%] py-[1%] bg-white min-h-[70vh] max-h-[80vh] rounded-lg fixed left-[5%] flex flex-col shadow">
      <div className="w-full min-h-[130px] bg-gray-400 rounded-md"></div>
      <div className="mt-[-10%] ml-[5%] flex justify-start items-end gap-1">
        <div className="w-[80px] aspect-square rounded-full bg-brand  border-[5px] border-white"></div>
        <div className="flex flex-col w-[calc(100%-80px)] items-start mb-3">
          <h2 className="text-xxs font-bold text-gray-800">@prajwol_neupane</h2>
          <h4 className="text-xxxs font-semibold text-gray-600">
            Prajwol Neupane
          </h4>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex flex-col items-center max-w-[33%]">
          <h2 className="text-sm font-bold text-gray-800">12k</h2>
          <h4 className="text-xxxs font-semibold text-gray-400">Followers</h4>
        </div>
        <div className="flex flex-col items-center max-w-[33%]">
          <h2 className="text-sm font-bold text-gray-800">1,275</h2>
          <h4 className="text-xxxs font-semibold text-gray-400">Following</h4>
        </div>
        <div className="flex flex-col items-center max-w-[33%]">
          <h2 className="text-sm font-bold text-gray-800">1.2M</h2>
          <h4 className="text-xxxs font-semibold text-gray-400">Likes</h4>
        </div>
      </div>
      <hr className="w-[100%] h-[1px] bg-gray-300 my-4" />
      <h4 className="text-xxs font-bold text-gray-800">Bio</h4>
      <p className="text-xxxs font-semibold text-gray-600 ">
        I am Prajwol Neupane. A skilled developer with a passion for web and app
        creation. Experienced in React.js, Node.js, and more. My dedication to
        problem-solving and learning is evident through their commitment to
        coding challenges and staying updated with tech trends. With a strong
        background in web development and a keen eye for design, valuable asset
        in any development endeavor.
      </p>
    </div>
  );
}
