import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Calendar,
      value: '50+',
      label: 'Years of Experience',
      description: 'Serving California since 1971',
    },
    {
      icon: Users,
      value: '100+',
      label: 'Expert Team Members',
      description: 'Licensed engineers and specialists',
    },
    {
      icon: Award,
      value: '500+',
      label: 'Successful Projects',
      description: 'Across diverse sectors',
    },
    {
      icon: MapPin,
      value: 'CA',
      label: 'Statewide Coverage',
      description: 'Serving all of California',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-geocon-teal mb-4">
            ABOUT US
          </h2>
          <div className="w-24 h-1 bg-geocon-teal mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-geocon-teal mb-6">
              Leading Geotechnical Engineering Excellence Since 1971
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                For over five decades, GeocoN Inc. has been at the forefront of geotechnical and environmental engineering in California. Our commitment to excellence and innovation has made us a trusted partner for land development, institutional, and public works projects throughout the state.
              </p>
              <p>
                Our team of licensed engineers, geologists, and environmental specialists brings unparalleled expertise to every project. We combine cutting-edge technology with proven methodologies to deliver solutions that exceed client expectations while ensuring safety and environmental stewardship.
              </p>
              <p>
                From foundation design and soil analysis to environmental remediation and construction monitoring, we provide comprehensive services that support successful project outcomes from conception to completion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="text-center group hover:shadow-service transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-geocon-teal mb-2 group-hover:text-geocon-teal-dark transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;