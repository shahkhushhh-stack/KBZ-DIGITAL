import { Twitter, Instagram, Dribbble, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white tracking-wider">KBZ <span className="text-brand-red">DIGITAL</span></h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">The ultimate destination for the urban professional seeking performance, quality, performance, and unmatched service.</p>
            <div className="flex space-x-4 mt-4">
              <SocialIcon icon={<Twitter className="w-4 h-4" />} />
              <SocialIcon icon={<Instagram className="w-4 h-4" />} />
              <SocialIcon icon={<Dribbble className="w-4 h-4" />} />
            </div>
          </div>
          <FooterLinks title="QUICK LINKS" links={['All Gear', 'Electric Bikes', 'Loan Calculator', 'Spare Parts']} />
          <FooterLinks title="SUPPORT" links={['Contact Us', 'Finance FAQ', 'Insurance Partners', 'Roadside Assistance', 'Finance Partners']} />
          <div>
            <h3 className="font-bold text-sm tracking-widest text-white uppercase">SHOWROOM UPDATES</h3>
            <p className="text-gray-400 text-sm mt-2">Get the latest launches and offers directly in your inbox.</p>
            <div className="mt-4 flex">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-r-0 border-white/10 rounded-l-md py-2 px-3 text-sm w-full focus:outline-none focus:ring-1 focus:ring-brand-red" />
              <button className="bg-brand-red text-white px-4 rounded-r-md hover:bg-red-700 transition-colors">&rarr;</button>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 KBZ DIGITAL SHOWROOM. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-white">COOKIES</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors">
    {icon}
  </a>
);

function FinancePartnersDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-400 text-sm hover:text-white transition-colors flex items-center w-full justify-between"
      >
        <span>Finance Partners</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <ul className="mt-2 pl-4 space-y-2 border-l border-white/10">
          <li><a href="https://www.tatacapital.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors">TATA CAPITAL</a></li>
          <li><a href="https://www.bajajfinserv.in/personal-loan-for-salaried-individuals?utm_source=bingsearch_mktg&utm_medium=cpc&utm_campaign=dppm_pl_ob_search_brand_generic_broad_spl_arm_bing&utm_term=Bajaj%20Finance&msclkid=1b7d06ddd2fa1fcc81d06f42cc57941b&utm_content=DPPM-PL-OB-Search-Brand-Generic-Broad" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors">BAJAJ FINANCE</a></li>
        </ul>
      )}
    </li>
  );
}

const FooterLinks = ({ title, links }: { title: string, links: string[] }) => (
  <div>
    <h3 className="font-bold text-sm tracking-widest text-white uppercase">{title}</h3>
    <ul className="mt-4 space-y-2">
      {links.map(link => {
        if (link === 'Finance Partners') {
          return <FinancePartnersDropdown key={link} />;
        }
        if (link === 'Loan Calculator') {
          return <li key={link}><a href="/finance" className="text-gray-400 text-sm hover:text-white transition-colors">{link}</a></li>;
        }
        return (
          <li key={link}><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">{link}</a></li>
        );
      })}
    </ul>
  </div>
);
