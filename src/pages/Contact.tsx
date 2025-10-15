import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@jantabadlaav.org',
      href: 'mailto:contact@jantabadlaav.org',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 XXXXX XXXXX',
      href: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Maharashtra, India',
      href: null,
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-black"
            style={{
              fontFamily: '"Noto Sans Devanagari", "Poppins", sans-serif',
              lineHeight: '1.3',
              display: 'block',
              paddingTop: '1.5rem',
              paddingBottom: '0.5rem',
            }}
          >
            {t('contactTitle')}
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-2 border-yellow-400 hover:shadow-lg transition-all bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-yellow-400 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-black">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-600 hover:text-yellow-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-yellow-400 border-2 border-yellow-400">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-black">Office Hours</h3>
                <div className="space-y-2 text-sm text-black">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-yellow-400 bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-black">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="contact-name" className="text-black">{t('name')} *</Label>
                      <Input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2 border-yellow-400 focus:border-yellow-500"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contact-email" className="text-black">{t('email')} *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2 border-yellow-400 focus:border-yellow-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-phone" className="text-black">{t('phone')}</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 border-yellow-400 focus:border-yellow-500"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message" className="text-black">{t('message')} *</Label>
                    <Textarea
                      id="contact-message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 min-h-[150px] border-yellow-400 focus:border-yellow-500"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-yellow-400"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {t('submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;