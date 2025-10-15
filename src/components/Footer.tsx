import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';
import indscLogo from '@/assets/indsc-logo.png';

const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Youtube, href: '#', label: 'Youtube' },
  ];

  const navPrimary = [
    { to: '/about', label: t('about') },
    { to: '/vision', label: t('vision') },
    { to: '/founder', label: t('founder') },
    { to: '/factsheet', label: t('factsheet') },
  ];

  const navResources = [
    { to: '/media', label: t('media') },
    // { to: '/blog', label: t('blog') },
    { to: '/donate', label: t('donate') },
    { to: '/join', label: t('join') },
  ];

  const languages = [
    { code: 'mr', name: 'मराठी' },
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
  ];

  return (
    <footer className="relative overflow-hidden bg-white">
      {/* Animated top wave */}
      <div className="w-full overflow-hidden -mt-1">
        <motion.svg
          viewBox="0 0 1440 80"
          className="w-[200%] h-12 block"
          preserveAspectRatio="none"
          aria-hidden="true"
          animate={{ x: ["0%", "-50%", "0%"] }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <defs>
            <linearGradient id="footerWaveYellow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* Primary wave */}
          <motion.path
            d="M0,48 C240,8 480,8 720,40 C960,72 1200,72 1440,32 L1440 80 L0 80 Z"
            fill="url(#footerWaveYellow)"
            opacity="0.9"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Secondary wave for depth */}
          <motion.path
            d="M0,52 C240,20 480,12 720,44 C960,76 1200,64 1440,36 L1440 80 L0 80 Z"
            fill="url(#footerWaveYellow)"
            opacity="0.5"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Tertiary subtle wave */}
          <motion.path
            d="M0,50 C240,16 480,20 720,46 C960,70 1200,68 1440,34 L1440 80 L0 80 Z"
            fill="url(#footerWaveYellow)"
            opacity="0.3"
            animate={{ y: [0, -1.5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      <div className="bg-yellow-50 px-6 py-16">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Brand card */}
            <motion.div
              className="p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <Link to="/" className="flex flex-col items-center text-center gap-3">
                <motion.img
                  src={logo}
                  alt={t('heroTitle')}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md mx-auto border-2 border-yellow-400"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                />
                <div className="mt-2">
                  <h4 className="text-lg sm:text-xl font-bold leading-tight text-black">
                    {t('heroTitle')}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 max-w-xs mx-auto">
                    {t('heroDescription')}
                  </p>
                </div>
              </Link>

              <div className="mt-4 flex items-center gap-3 justify-center">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-yellow-100 hover:bg-yellow-200 border border-yellow-300"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <Icon className="h-5 w-5 text-yellow-700" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <h5 className="font-bold text-black mb-4"> {t('quickLinks') || 'Explore'} </h5>
              <ul className="flex flex-col gap-3 text-sm">
                {navPrimary.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="flex items-center gap-2 group">
                      <ChevronRight className="h-4 w-4 text-yellow-600 group-hover:translate-x-1 transition-transform" />
                      <span className="text-gray-700 group-hover:text-black group-hover:font-medium transition-colors">{n.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              className="p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <h5 className="font-bold text-black mb-4">{t('resources') || 'Resources'}</h5>
              <ul className="flex flex-col gap-3 text-sm">
                {navResources.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="flex items-center gap-2 group">
                      <ChevronRight className="h-4 w-4 text-yellow-600 group-hover:translate-x-1 transition-transform" />
                      <span className="text-gray-700 group-hover:text-black group-hover:font-medium transition-colors">{n.label}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/privacy-policy" className="flex items-center gap-2 group">
                    <ChevronRight className="h-4 w-4 text-yellow-600 group-hover:translate-x-1 transition-transform" />
                    <span className="text-gray-700 group-hover:text-black group-hover:font-medium transition-colors">{t('privacyPolicy')}</span>
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact & Subscribe */}
            <motion.div
              className="p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <h5 className="font-bold text-black mb-4">{t('contactUs') || 'Contact'}</h5>

              <div className="flex items-start gap-3 text-sm mb-3">
                <MapPin className="h-4 w-4 mt-1 text-yellow-600" />
                <address className="not-italic text-gray-700">
                  {t('addressLine1') || 'Your address line 1'}
                  <br />
                  {t('addressLine2') || 'City, State, ZIP'}
                </address>
              </div>

              <div className="flex items-center gap-3 text-sm mb-3">
                <Phone className="h-4 w-4 text-yellow-600" />
                <a href="tel:+911234567890" className="text-gray-700 hover:text-black">+91 12345 67890</a>
              </div>

              <div className="flex items-center gap-3 text-sm mb-4">
                <Mail className="h-4 w-4 text-yellow-600" />
                <a href="mailto:info@example.com" className="text-gray-700 hover:text-black">info@yourdomain.com</a>
              </div>

              {/* Newsletter */}
              <motion.form
                className="mt-2 flex flex-col gap-2"
                whileHover={{ scale: 1.02 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = new FormData(e.currentTarget);
                  const email = form.get('email');
                  console.log('subscribe:', email);
                  e.currentTarget.reset();
                }}
              >
                <label htmlFor="footer-email" className="sr-only">{t('subscribe')}</label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  placeholder={t('enterEmail') || 'Enter your email'}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-black"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  className="w-full px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-bold border border-yellow-400"
                >
                  {t('subscribeBtn') || 'Subscribe'}
                </motion.button>
              </motion.form>

              {/* Language selector */}
              <div className="mt-4 flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-yellow-600" />
                <select
                  id="footer-lang"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'mr' | 'en' | 'hi')}
                  className="text-sm rounded-md px-2 py-1 border border-gray-300 bg-white text-black focus:outline-none focus:ring-1 focus:ring-yellow-500"
                >
                  {languages.map((l) => (
                    <option key={l.code} value={l.code}>{l.name}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Legal Section */}
          <motion.div
            className="mt-10 pt-6 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-gray-600">
              © {new Date().getFullYear()} {t('heroTitle')}. {t('allRightsReserved')}.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4 text-center sm:text-left w-full">
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                <Link to="/terms-conditions" className="text-gray-600 hover:text-black transition-colors">
                  {t('termsConditions')}
                </Link>
                <span className="hidden sm:inline text-gray-400">|</span>
                <Link to="/refund-policy" className="text-gray-600 hover:text-black transition-colors">
                  {t('refundPolicy')}
                </Link>
              </div>

              <motion.a
                href="https://indsc.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-yellow-100 px-3 py-1.5 rounded-full hover:bg-yellow-200 transform transition-all duration-200 shadow-sm border border-yellow-300"
                whileHover={{ rotate: 2, scale: 1.05 }}
              >
                <img
                  src={indscLogo}
                  alt="INDSC"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-md object-contain"
                />
                <span className="text-xs sm:text-sm text-black">
                  Developed with <Heart className="inline h-3 w-3 text-red-500 mx-0.5" /> by <strong className="ml-1">INDSC.IN</strong>
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;