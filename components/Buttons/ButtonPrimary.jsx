import Link from "next/link";

export default function ButtonPrimary({ type, link, title, icon, variant}) {
  return (
    <>
      {type && (
        <button type={type} className={`button-primary ${variant}`}>
          {icon}
          {title}
        </button>
      )}
      {link && (
        <Link href={link} className={`button-primary ${variant}`}>
          {icon}
          {title}
        </Link>
      )}
    </>
  );
}
