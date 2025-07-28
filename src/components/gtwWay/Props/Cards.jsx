function Card({ title, description }) {
  return (
    <div className="bg-gradient-to-b from-primary to-light-yellow rounded-lg shadow-md p-6 max-w-sm w-full">
      <h3 className="font-bold text-secondary text-xl mb-2">{title}</h3>
      <p className="text-secondary text-sm mb-4">{description}</p>
      <div className="text-secondary font-semibold">
        What it looks like in action:
      </div>
      <button className="bg-secondary text-white-color1 p-2 rounded-full mt-2">→</button>
    </div>
  );
}
