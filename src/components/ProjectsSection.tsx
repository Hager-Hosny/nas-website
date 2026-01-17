import { useState } from 'react';
import projectBridge from '@/assets/project-bridge.jpg';
import projectResidential from '@/assets/project-residential.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';
import projectIndustrial from '@/assets/project-industrial.jpg';
import projectInfrastructure from '@/assets/project-infrastructure.jpg';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n';

const projectImages = [
  projectResidential,
  projectBridge,
  projectCommercial,
  projectIndustrial,
  projectInfrastructure,
  projectResidential,
];

const categoryMap: Record<string, string> = {
  'All': 'All',
  'الكل': 'All',
  'Residential': 'Residential',
  'سكني': 'Residential',
  'Commercial': 'Commercial',
  'تجاري': 'Commercial',
  'Infrastructure': 'Infrastructure',
  'بنية تحتية': 'Infrastructure',
  'Industrial': 'Industrial',
  'صناعي': 'Industrial',
};

const projectCategories = ['Residential', 'Infrastructure', 'Commercial', 'Industrial', 'Infrastructure', 'Residential'];

const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(t.projects.categories[0]);

  const normalizedCategory = categoryMap[activeCategory] || 'All';

  const filteredProjects = normalizedCategory === 'All'
    ? t.projects.items
    : t.projects.items.filter((_, index) => projectCategories[index] === normalizedCategory);

  const getProjectImage = (index: number) => {
    const originalIndex = t.projects.items.indexOf(filteredProjects[index]);
    return projectImages[originalIndex] || projectResidential;
  };

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t.projects.label}
          </div>
          <h2 className="heading-lg text-foreground mb-6">
            {t.projects.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {t.projects.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-card card-hover cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={getProjectImage(index)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3">
                      {t.projects.categories[projectCategories.indexOf(projectCategories[t.projects.items.indexOf(project)]) + 1] || t.projects.categories[1]}
                    </span>
                    <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm mb-1">
                      {project.location}
                    </p>
                    <p className="text-primary-foreground/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 rtl:-translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground rtl:rotate-90" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-primary inline-flex items-center gap-2">
            {t.projects.viewAll}
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
