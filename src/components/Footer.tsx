

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-gray-400 p-6 border  border-gray-400 w-150 rounded-md bottom-0">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          © {currentYear} Portfolio. All rights reserved.
        </div>
        <div className="flex items-center">
          Made with <span className="text-red-500 mx-1">❤</span> By Ketan
        </div>
      </div>
    </footer>
  );
};

export default Footer;