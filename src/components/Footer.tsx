  import Link from "next/link";

  const Footer: React.FC = () => {
    return (
      <footer className="bg-off-white text-black pb-2 md:pb-4 lg:pb-6">

        <p className="text-sm md:text-base lg:text-lg flex flex-row items-center justify-center gap-1 font-light">
          
          <Link href="https://www.sergiovzambelli.it/" className="text-black">
            sergiovzambelli
          </Link>
          © {new Date().getFullYear()}{" "} 
        </p>
      </footer>
    );
  };

  export default Footer;
