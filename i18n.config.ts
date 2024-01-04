export default defineI18nConfig(() => ({
  legacy: false,
  locales: ["en", "es"],
  messages: {
    en: {
      description: {
        long: "+7 years of experience in technology. I have touched every part of the software development life cycle, from design to deployment and maintenance, focusing on the product and paying attention to the human team.",
        short: "BackEnd specialist, FrontEnd friend and DevOps enthusiast",
      },
    },
    es: {
      description: {
        long: "+7 años de experiencia en tecnología. He tocado cada parte del ciclo de vida del desarrollo de software, desde el diseño hasta la implementación y el mantenimiento, enfocándome en el producto y prestando atención al equipo humano.",
        short:
          "Especialista en BackEnd, amigo del FrontEnd y entusiasta DevOps.",
      },
    },
  },
}));
