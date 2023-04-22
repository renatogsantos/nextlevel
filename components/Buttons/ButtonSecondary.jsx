import Link from "next/link";

export default function ButtonSecondary({ type, link, title, icon, variant}) {
  return (
    <>
      {type && (
        <button type={type} className={`button-secondary ${variant}`}>
          {icon}
          {title}
        </button>
      )}
      {link && (
        <Link href={link} className={`button-secondary ${variant}`}>
          {icon}
          {title}
        </Link>
      )}
    </>
  );
}
