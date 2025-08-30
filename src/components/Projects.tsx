import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projectCategories = [
    {
      title: 'Land Development Projects',
      projects: [
        {
          name: 'Soboba Replacement Casino',
          location: 'San Jacinto, California',
          image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
        },
        {
          name: 'Summit View Apartments',
          location: 'Sylmar, California',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
        },
        {
          name: 'Safe Credit Union Convention Center',
          location: 'City of Sacramento, California',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Institutional Projects',
      projects: [
        {
          name: 'UC Davis',
          location: 'Davis, California',
          image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
        },
        {
          name: 'Presidio of Monterey Advanced Individual Training Barracks',
          location: 'Monterey, California',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
        },
        {
          name: 'Skyline Hills Library',
          location: 'San Diego, California',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        },
      ],
    },
    {
      title: 'Public Works Projects',
      projects: [
        {
          name: 'Juvenile Hall Multipurpose Rehabilitation Center',
          location: 'Orange, California',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
        },
        {
          name: 'Junior Lifeguard Facility',
          location: 'Newport Beach, California',
          image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
        },
        {
          name: 'Caltrans On-Call Environmental Engineering Services',
          location: 'Caltrans Districts 1, 2, 3, 4, 5, 6, 7, 9, 10, & 11',
          image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-geocon-teal mb-4">
            SELECT PROJECTS
          </h2>
          <div className="w-24 h-1 bg-geocon-teal mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise across diverse project types and California regions
          </p>
        </div>

        {projectCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-geocon-teal mb-8 text-center">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.projects.map((project, projectIndex) => (
                <Card 
                  key={project.name}
                  className="group overflow-hidden hover:shadow-service transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${(categoryIndex * 3 + projectIndex) * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-geocon-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-geocon-teal mb-2 group-hover:text-geocon-teal-dark transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {project.location}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-geocon-teal hover:bg-geocon-teal-dark text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            See All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;