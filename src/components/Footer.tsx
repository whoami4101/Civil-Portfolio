import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-geocon-teal text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold">GEOCON</span>
            </div>
            <p className="text-white/80 mb-4">
              Supporting your projects with geotechnical and environmental services since 1971.
            </p>
            <p className="text-white/60 text-sm">
              Professional engineering solutions across California.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Geotechnical Engineering',
                'Environmental Services',
                'Engineering Geology',
                'Construction Inspection',
                'Instrumentation',
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/80 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Careers', href: '#careers' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/60 mt-0.5" />
                <div className="text-white/80 text-sm">
                  <div>123 Engineering Way</div>
                  <div>Sacramento, CA 95814</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/60" />
                <a href="tel:+19165550123" className="text-white/80 hover:text-white transition-colors text-sm">
                  (916) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/60" />
                <a href="mailto:info@geoconinc.com" className="text-white/80 hover:text-white transition-colors text-sm">
                  info@geoconinc.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} GeocoN Inc. All rights reserved. Licensed engineers serving California since 1971.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;