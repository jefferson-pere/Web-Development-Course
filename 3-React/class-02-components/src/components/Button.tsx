type Props = {
  title: string;
  color?: string; // ?= opcional 
};
export function Button({ title, color }: Props) {
  return (
    <>
      <button style={{ background: `${color}` }}>{title}</button>
    </>
  );
}
