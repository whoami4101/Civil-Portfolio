import { Card, CardContent } from '@/components/ui/card';
import geotechnicalIcon from '@/assets/geotechnical-icon.png';
import environmentalIcon from '@/assets/environmental-icon.png';
import geologyIcon from '@/assets/geology-icon.png';
import inspectionIcon from '@/assets/inspection-icon.png';
import instrumentationIcon from '@/assets/instrumentation-icon.png';

const Services = () => {
  const services = [
    {
      title: 'Geotechnical Engineering',
      description: 'Comprehensive soil and foundation analysis for safe, efficient construction projects.',
      icon: geotechnicalIcon,
    },
    {
      title: 'Environmental Services',
      description: 'Environmental assessment and remediation to protect natural resources.',
      icon: environmentalIcon,
    },
    {
      title: 'Engineering Geology',
      description: 'Rock and soil characterization for geological hazard assessment.',
      icon: geologyIcon,
    },
    {
      title: 'Construction Inspection',
      description: 'Quality assurance and compliance monitoring throughout construction.',
      icon: inspectionIcon,
    },
    {
      title: 'Instrumentation',
      description: 'Monitoring systems for real-time project performance tracking.',
      icon: instrumentationIcon,
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-geocon-teal mb-4">
            SERVICES
          </h2>
          <div className="w-24 h-1 bg-geocon-teal mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering expert geotechnical and environmental solutions across California since 1971
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-service transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-geocon-teal mb-4 group-hover:text-geocon-teal-dark transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;