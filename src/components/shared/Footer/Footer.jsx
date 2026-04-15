import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import twitter from "../../../assets/twitter.png";


const Footer = () => {
  return (
    <footer className="bg-[#244d3f] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="my-8">
          {/* Logo & Description */}
          <div className="py-4">
        
             <h2 className="text-6xl font-bold tracking-tighter text-white text-center pb-4">
                KeenKeeper
              </h2>
            <p className="text-white text-center">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
          </div>
        </div>
        {/* social links */}
        <h2 className="font-semibold text-center text-white text-xl pb-2">Social Links</h2>
        <div className="flex justify-center items-center gap-4">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-500 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#fafafa]">
          <div>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Terms of services
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
