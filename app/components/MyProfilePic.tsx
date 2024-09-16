import Image from "next/image";
import React from "react";

export default function MyProfilePic() {
  return (
    <div className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/mike.jpg"
        width={200}
        height={200}
        alt="Michael Adenugba"
        priority
      />
    </div>
  );
}
