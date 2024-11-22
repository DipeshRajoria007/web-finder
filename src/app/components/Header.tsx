import Image from "next/image";

function Header({ icon }: { icon: string }) {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "24px",
      }}
    >
      <Image src={icon} alt="Logo" width={84} height={84} />
    </header>
  );
}
export default Header;
