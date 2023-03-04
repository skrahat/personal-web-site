export default function progressBar(name: string, val: number, colour: string) {
  return (
    <div className="p-5">
      <div className="pb-2">
        <span className="text-base font-bold text-blue-700 dark:text-white">
          {name}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div
          className={`bg-${colour}-600 h-1.5 rounded-full`}
          style={{ width: val + "%" }}
        ></div>
      </div>
    </div>
  );
}
