export function Header({
  title,
  align,
  maxW,
  margin,
  color,
}: {
  title: string;
  align: string;
  maxW: string;
  margin: string;
  color: string;
}) {
  return (
    <h1
      className="text-5xl"
      style={{ textAlign: align, maxWidth: maxW, margin: margin, color: color }}
    >
      {title}
    </h1>
  );
}
