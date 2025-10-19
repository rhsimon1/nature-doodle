export default function ProgressBox({ title, count, color }) {
  return (
    <div>
      <div
        className="rounded flex flex-col items-center pt-5 w-[350px] h-[100px] border"
        style={{ backgroundColor: color }}
      >
        <h1>{title}</h1>
        <h3>{count}</h3>
      </div>
    </div>
  );
}
