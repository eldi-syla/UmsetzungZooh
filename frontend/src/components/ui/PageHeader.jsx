export default function PageHeader({ title }) {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center mb-4">
        <div className="text-3xl font-bold">
          <span className="text-green-400">Zoo</span>h!
        </div>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
}
