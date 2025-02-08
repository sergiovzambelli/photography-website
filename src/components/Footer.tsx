  import Link from "next/link";

  const Footer: React.FC = () => {
    return (
      <footer className="bg-off-white text-black py-2 ">
        {/* Copyright */}
        <p className="text-sm flex flex-row items-center justify-center gap-1 font-light">
          
          <Link href="/" className="text-black">
            sergiovzambelli
          </Link>
          © {new Date().getFullYear()}{" "} 
        </p>
      </footer>
    );
  };

  export default Footer;
