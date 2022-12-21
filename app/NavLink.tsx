import Link from "next/link";
type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <a
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
      }`}
    >
      {category}
    </a>
  );
}

export default NavLink;
