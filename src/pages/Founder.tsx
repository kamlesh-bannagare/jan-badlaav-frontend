import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import founderImage from '@/assets/founder.png';

const Founder = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('founderTitle')}
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={founderImage}
                alt={t('founderName')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl" />
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-4xl font-bold mb-4">{t('founderName')}</h2>
            <p className="text-xl text-primary font-semibold mb-6">Founder & Leader</p>
            <p className="text-lg text-muted-foreground mb-6">
              {t('founderDescription')}
            </p>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg italic text-muted-foreground">
                  "Change begins with us. Together, we can build a society where every voice matters, every dream is valued, and every person has the opportunity to thrive."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Journey Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">The Journey</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Yash Gourkhede's journey into politics was driven by a deep commitment to social change and empowerment. Growing up witnessing the challenges faced by ordinary citizens, he dedicated himself to creating a movement that would bring real change to people's lives.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    With a background in social work and community development, Yash understood the importance of grassroots movements. He believed that true change could only come from the people themselves, and thus Janta Badlaav was born.
                  </p>
                  <p className="text-muted-foreground">
                    Today, under his leadership, Janta Badlaav has grown into a movement that champions transparency, meritocracy, and inclusive development. His vision continues to inspire thousands of members who share the dream of a better tomorrow.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vision Statement */}
        <section>
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Leadership Vision</h2>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                To create a political culture where integrity, competence, and compassion are the foundation of governance, and where every citizen has equal access to opportunities and justice.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Founder;
