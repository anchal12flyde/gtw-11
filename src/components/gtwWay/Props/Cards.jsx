function Card({ title, description }) {
  return (
    <div className="bg-gradient-to-b from-[#FFB100] to-[#FFC55D] rounded-lg shadow-md p-6 max-w-sm w-full">
      <h3 className="font-bold text-black text-xl mb-2">{title}</h3>
      <p className="text-black text-sm mb-4">{description}</p>
      <div className="text-black font-semibold">What it looks like in action:</div>
      <button className="bg-black text-white p-2 rounded-full mt-2">→</button>
    </div>
  );
}
