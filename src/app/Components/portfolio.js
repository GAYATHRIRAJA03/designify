
export default function Portfolio() {
  const projects = [
    {
      image: "/images/project1.jpeg",
      title: "E-Commerce Website",
      category: "Web Development",
      description: "Modern and responsive online shopping website.",
    },
    {
      image: "/images/project2.jpeg",
      title: "Fintech Mobile App",
      category: "UI/UX Design",
      description: "Clean and user-friendly financial mobile application.",
    },
    {
      image: "/images/project3.jpeg",
      title: "Brand Identity",
      category: "Branding",
      description: "Creative branding design for a modern business.",
    },
    {
      image: "/images/project4.jpeg",
      title: "Digital Marketing",
      category: "Marketing",
      description: "Digital marketing solution to improve online presence.",
    },
  ];

  return (
    <section id="portfolio" className="py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="badge rounded-pill bg-primary px-3 py-2 mb-3">
            OUR WORK
          </span>

          <h2 className="display-5 fw-bold">
            Featured Projects
          </h2>

          <p
            className="text-secondary mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Take a look at some of our recent creative projects
            and digital experiences.
          </p>

        </div>

        {/* Projects */}
        <div className="row g-4">

          {projects.map((project, index) => (
            <div className="col-md-6" key={index}>

              <div className="portfolio-card position-relative overflow-hidden rounded-4 shadow">

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid w-100"
                />

                {/* Hover Overlay */}
                <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4">

                  <span className="badge bg-light text-dark align-self-start mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-white fw-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-white mb-3">
                    {project.description}
                  </p>

                  <button className="btn btn-light rounded-pill px-4 align-self-start">
                    View Project →
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

