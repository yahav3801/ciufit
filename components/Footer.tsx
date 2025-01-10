import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        clipPath: "polygon(0 0, 100% 0%, 100% 100%,0% 100%)",
      }}
      className="bg-neutral-900 text-white relative h-[500px] text-center "
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 p-4 sm:p-8 md:p-12 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[500px] overflow-y-auto">
        {/* Main content wrapper */}
        <div className="flex flex-col h-full">
          {/* Grid section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 flex-grow">
            {/* Contact Info Section */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 underline">
                צור קשר
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Phone size={18} className="text-sky" />
                  <span className="text-sm sm:text-base">050-5717354</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Mail size={18} className="text-sky" />
                  <span className="text-sm sm:text-base">
                    gilagbh@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <MapPin size={18} className="text-sky" />
                  <span className="text-sm sm:text-base">
                    שדרות בורוכוב 68, קרית אתא
                  </span>
                </div>
              </div>
            </div>

            {/* Hours Section */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 underline">
                שעות פעילות
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Clock size={18} className="text-sky" />
                  <span className="text-sm sm:text-base">
                    ימי חול: 12:30 - 17:00
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Clock size={18} className="text-sky" />
                  <span className="text-sm sm:text-base">
                    חגים וחופשים: 07:30 - 16:30
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 underline">
                קישורים מהירים
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <a
                    href="#about"
                    className="hover:text-sky transition-colors text-sm sm:text-base"
                  >
                    עלינו
                  </a>
                </li>
                <li>
                  <a
                    href="#experiences"
                    className="hover:text-sky transition-colors text-sm sm:text-base under"
                  >
                    חוויות
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-sky transition-colors text-sm sm:text-base"
                  >
                    שאלות נפוצות
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 underline">
                עקבו אחרינו
              </h3>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100002080400239"
                  target="_blank"
                  className="hover:text-sky transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/gila.ciufit/"
                  target="_blank"
                  className="hover:text-sky transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className=" pt-4 sm:pt-6 border-t border-neutral-800 text-center text-neutral">
            <div className="text-sm sm:text-base">
              <a href="https://by-yahav.vercel.app/" target="_blank">
                <span className="underline transition-colors hover:text-sky">
                  by-Yahav
                </span>
                - האתר נבנה על ידי
              </a>
            </div>
            <p className="text-sm sm:text-base">
              &copy; {new Date().getFullYear()} כל הזכויות שמורות לצהרון כיופית
              קרית אתא
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
