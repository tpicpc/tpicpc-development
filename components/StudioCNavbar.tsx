import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";


function StudioCNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link className="text-[#4a83c4] flex items-center" href="/studio">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#4a83c4] mr-2" />
          Go to Website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#4a83c4]">
    <h1 className="font-bold text-white">TPI CPC - Thakurgaon Polytechnic Institute Computer and Programming Club</h1>
        <Link className="text-primary font-bold ml-2" href="https://www.tpicpc.codes">www.tpicpc.codes</Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioCNavbar
