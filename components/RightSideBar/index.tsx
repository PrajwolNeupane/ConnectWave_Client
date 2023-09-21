import Image from "next/image";

export default function RightSideBar() {
  return (
    <div className="max-rg:hidden max-lg:w-[30%] w-1/4 px-[1.5%] py-[1%] bg-white min-h-[80vh] max-h-[75vh] rounded-lg fixed right-[5%] overflow-y-auto scroll shadow">
      <h4 className="text-xs font-bold text-gray-800">Messages</h4>
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex gap-4">
          <div className="w-[40px] aspect-square bg-gray-400 rounded-full"></div>
          <div className="flex flex-col">
            <h3 className="text-xxs font-semibold text-gray-800">
              Preukti Parajuli
            </h3>
            <h3 className="text-xxxs font-bold text-gray-900">
              Send you message
            </h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-[40px] aspect-square bg-gray-400 rounded-full"></div>
          <div className="flex flex-col">
            <h3 className="text-xxs font-semibold text-gray-800">
              Pranit Shah
            </h3>
            <h3 className="text-xxxs font-semibold text-gray-900">
              Game ma aijo
            </h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-[40px] aspect-square bg-gray-400 rounded-full"></div>
          <div className="flex flex-col">
            <h3 className="text-xxs font-semibold text-gray-800">Saksham BC</h3>
            <h3 className="text-xxxs font-semibold text-gray-900">
              You: Ka ho ta ?
            </h3>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[40px] aspect-square bg-gray-400 rounded-full"></div>
          <div className="flex flex-col">
            <h3 className="text-xxs font-semibold text-gray-800">
              Samikshya BC
            </h3>
            <h3 className="text-xxxs font-semibold text-gray-900">
              Thank you 🧡
            </h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-[40px] aspect-square bg-gray-400 rounded-full"></div>
          <div className="flex flex-col">
            <h3 className="text-xxs font-semibold text-gray-800">Nirija BC</h3>
            <h3 className="text-xxxs font-semibold text-gray-900">Ok</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-[40px] aspect-square bg-gray-400 rounded-full"></div>
          <div className="flex flex-col">
            <h3 className="text-xxs font-semibold text-gray-800">
              Saran Adhikari
            </h3>
            <h3 className="text-xxxs font-semibold text-gray-900">
              You: Nex.js try gara aba
            </h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-[40px] aspect-square bg-gray-400 rounded-full"></div>
          <div className="flex flex-col">
            <h3 className="text-xxs font-semibold text-gray-800">
              Rojan Dhungana
            </h3>
            <h3 className="text-xxxs font-semibold text-gray-900">
              You: React Hook Form vane cha. Tyo ...
            </h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-[40px] aspect-square bg-gray-400 rounded-full"></div>
          <div className="flex flex-col">
            <h3 className="text-xxs font-semibold text-gray-800">
              Gagan Thapa
            </h3>
            <h3 className="text-xxxs font-bold text-gray-900">
              Send you message
            </h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-[40px] aspect-square bg-gray-400 rounded-full"></div>
          <div className="flex flex-col">
            <h3 className="text-xxs font-semibold text-gray-800">
              Saran Adhikari
            </h3>
            <h3 className="text-xxxs font-semibold text-gray-900">
              You: Nex.js try gara aba
            </h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-[40px] aspect-square bg-gray-400 rounded-full"></div>
          <div className="flex flex-col">
            <h3 className="text-xxs font-semibold text-gray-800">
              Rojan Dhungana
            </h3>
            <h3 className="text-xxxs font-semibold text-gray-900">
              You: React Hook Form vane cha. Tyo ...
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
