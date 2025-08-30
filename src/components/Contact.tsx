import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Engineering Way', 'Sacramento, CA 95814'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(916) 555-0123'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@geoconinc.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 5:00 PM', 'Sat-Sun: Closed'],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-geocon-teal mb-4">
            CONTACT US
          </h2>
          <div className="w-24 h-1 bg-geocon-teal mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with our expert team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-service">
            <CardHeader>
              <CardTitle className="text-2xl text-geocon-teal">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone
                </label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Type
                </label>
                <Input placeholder="e.g., Geotechnical Analysis, Environmental Assessment" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project requirements..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button 
                size="lg"
                className="w-full bg-geocon-teal hover:bg-geocon-teal-dark text-white transition-all duration-300"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="group hover:shadow-service transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-geocon-teal mb-2 group-hover:text-geocon-teal-dark transition-colors">
                      {info.title}
                    </h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Call to Action */}
            <Card className="bg-gradient-hero text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-white/90 mb-6">
                  Our team of experts is ready to help you achieve your engineering goals with professional, reliable service.
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-geocon-teal hover:bg-white/95 transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;