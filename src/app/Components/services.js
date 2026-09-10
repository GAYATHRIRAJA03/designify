
export default function Services() {
  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "We design simple, modern and user-friendly interfaces that give your customers a great experience.",
    },
    {
      icon: "💻",
      title: "Web Development",
      description:
        "We build responsive, fast and modern websites using the latest web technologies.",
    },
    {
      icon: "📱",
      title: "Mobile Design",
      description:
        "We create clean and engaging mobile experiences that work smoothly across different devices.",
    },
    {
      icon: "🚀",
      title: "Digital Strategy",
      description:
        "We create digital strategies that help businesses improve their online presence and grow.",
    },
  ];

  return (
    <section id="services" className="py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="badge rounded-pill bg-primary px-3 py-2 mb-3">
            OUR SERVICES
          </span>

          <h2 className="display-5 fw-bold">
            What We Do
          </h2>

          <p className="text-secondary mx-auto" style={{ maxWidth: "650px" }}>
            We provide creative digital solutions that help businesses
            build a strong and meaningful online presence.
          </p>

        </div>

        {/* Service Cards */}
        <div className="row g-4">

          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index}>

              <div className="card h-100 rounded-4 p-4 shadow-sm">

                {/* Icon */}
                <div
                  className="d-flex align-items-center justify-content-center rounded-4 mb-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "rgba(139, 92, 246, 0.15)",
                    fontSize: "28px",
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h4 className="fw-bold mb-3">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-secondary mb-0">
                  {service.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

