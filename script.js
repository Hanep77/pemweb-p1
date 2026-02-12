const projects = [
  {
    name: "Kobama Event",
    image: "p-1.png",
    description: "An event ticketing platform",
    links: {
      website: "https://kobamaevent.com"
    },
    techStack: [
      "Laravel",
      "ReactJS",
      "TailwindCSS"
    ]
  },
  {
    name: "Nepolia",
    image: "p-2.png",
    description: "A Social network",
    links: {
      github: "https://github.com/hanep77/nepolia",
      website: "https://nepolia.vercel.app"
    },
    techStack: [
      "NextJS",
      "TailwindCSS"
    ]
  },
  {
    name: "HPP Calculator",
    image: "p-3.png",
    description: "A web application designed to help businesses calculate Cost of Goods Sold",
    links: {
      github: "https://github.com/hanep77/hpp-calculator"
    },
    techStack: [
      "Laravel",
      "ReactJS",
      "TailwindCSS"
    ]
  }
]

projects.map((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project");

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image-wrapper");
  projectCard.appendChild(imageWrapper);

  const image = document.createElement("img");
  image.src = `./public/${project.image}`;
  image.alt = project.name;
  imageWrapper.appendChild(image);

  const projectInfo = document.createElement("div");
  projectInfo.classList.add("project-info");
  projectCard.appendChild(projectInfo);

  const projectInfoHeader = document.createElement("div");
  projectInfoHeader.classList.add("header");
  projectInfo.appendChild(projectInfoHeader);

  const title = document.createElement("h3");
  title.innerText = project.name;
  projectInfoHeader.appendChild(title);

  const linkWrapper = document.createElement("div");
  projectInfoHeader.appendChild(linkWrapper);

  if (project.links.github) {
    linkWrapper.innerHTML = `<a href="${project.links.github}"><i data-feather="github" width="18"></i></a>`;
  }

  if (project.links.website) {
    linkWrapper.innerHTML = `<a href="${project.links.website}"><i data-feather="github" width="18"></i></a>`;
  }

  const description = document.createElement("p");
  description.classList.add("text-zinc-400");
  description.innerText = project.description;
  projectInfo.appendChild(description);

  const techStackWrapper = document.createElement("div")
  techStackWrapper.classList.add("tech-stack-wrapper");
  projectInfo.appendChild(techStackWrapper);

  project.techStack.map(ts => {
    const techStack = document.createElement("div");
    techStack.classList.add("tech-stack");
    techStack.innerText = ts;
    techStackWrapper.appendChild(techStack);
  });

  document
    .querySelector(".projects-wrapper")
    .appendChild(projectCard);
});

feather.replace();
