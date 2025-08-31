import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useProjects } from '@/hooks/useSanity';
import { Skeleton } from '@/components/ui/skeleton';

const Projects = () => {
  const { data: projects, loading, error } = useProjects();

  // Group projects by category
  const projectCategories = projects ? projects.reduce((acc, project) => {
    const category = project.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {}) : {};

  const categoryTitles = {
    'land-development': 'Land Development Projects',
    'institutional': 'Institutional Projects',
    'public-works': 'Public Works Projects',
    'infrastructure': 'Infrastructure Projects',
    'environmental': 'Environmental Projects',
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-1 w-24 mx-auto mb-6" />
            <Skeleton className="h-6 w-2xl mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-64 w-full" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-geocon-teal mb-4">
              SELECT PROJECTS
            </h2>
            <p className="text-red-500">Error loading projects. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

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

        {Object.entries(projectCategories).map(([categoryKey, categoryProjects], categoryIndex) => (
          <div key={categoryKey} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-geocon-teal mb-8 text-center">
              {categoryTitles[categoryKey] || categoryKey}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProjects.map((project, projectIndex) => (
                <Card 
                  key={project._id}
                  className="group overflow-hidden hover:shadow-service transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${(categoryIndex * 3 + projectIndex) * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.mainImage || 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop'}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-geocon-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-geocon-teal mb-2 group-hover:text-geocon-teal-dark transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {project.location}
                    </p>
                    {project.description && (
                      <p className="text-muted-foreground text-sm mt-2">
                        {project.description}
                      </p>
                    )}
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