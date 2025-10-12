import { useState } from 'react';
import { UserPlus, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const Join = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for joining Janta Badlaav! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', city: '' });
  };

  const benefits = [
    'Be part of a transformative political movement',
    'Participate in policy discussions and decision-making',
    'Access to exclusive events and workshops',
    'Connect with like-minded individuals',
    'Contribute to community development initiatives',
    'Voice your concerns directly to leadership',
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('joinTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('joinDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Membership Form */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserPlus className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{t('becomeMember')}</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t('name')} *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t('email')} *</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">{t('phone')} *</Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-10"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="city">City *</Label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="pl-10"
                      placeholder="Your city"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  {t('becomeMember')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div>
            <Card className="border-2 mb-6">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Membership Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Why Join Us?</h3>
                <p className="text-muted-foreground mb-4">
                  Janta Badlaav is more than just a political party - it's a movement for change. By joining us, you become part of a community dedicated to building a better future for all.
                </p>
                <p className="text-muted-foreground">
                  Together, we can create lasting change and ensure that every voice is heard in the political process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
