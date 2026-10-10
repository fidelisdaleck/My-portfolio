import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Footprints,
  // Github,
  // Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Terminal,
  UserRound,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "PatLearn",
    category: "ÉDUCATION · EDTECH",
    description:
      "Une plateforme d’apprentissage interactif des langues locales camerounaises, pensée pour faciliter la découverte et la transmission du patrimoine linguistique.",
    technologies: ["Next.js", "Tailwind CSS", "UML"],
    image: "/images/patlearn.png",
    icon: "◈",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    status: "Prototype étudiant",
  },
  {
    number: "02",
    name: "BUDGEST",
    category: "FINANCE · WEB APP",
    description:
      "Une interface de gestion budgétaire qui aide à visualiser ses dépenses, organiser ses catégories et mieux comprendre ses habitudes financières.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    image: "/images/Budgest.png",
    icon: "↗",
    accent: "from-green-500/20 via-lime-500/10 to-transparent",
    status: "Projet en développement",
  },
  {
    number: "03",
    name: "Coffee House",
    category: "WEB DESIGN · VITRINE",
    description:
      "Un site vitrine moderne pour mettre en valeur une marque de café, ses produits et son univers à travers une expérience web soignée.",
    technologies: ["Next.js", "Tailwind CSS", "UI Design"],
    image: "/images/coffeeHouse.png",
    icon: "✳",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    status: "Démo web",
  },
];

const skills = [
  {
    title: "Frontend",
    subtitle: "Créer des interfaces web",
    items: ["HTML", "CSS", "JavaScript", "Next.js"],
  },
  {
    title: "Design & UI",
    subtitle: "Penser l’expérience utilisateur",
    items: ["Responsive Design", "Tailwind CSS", "Bootstrap", "Figma"],
  },
  {
    title: "Outils & données",
    subtitle: "Organiser et construire",
    items: [ "VS Code", "Git", "GitHub", "Supabase", "UML"],
  },
];

const experiences = [
  {
    period: "Aujourd’hui",
    title: "Étudiante en génie logiciel",
    description:
      "J’approfondis mes compétences en conception, développement web et modélisation de solutions numériques.",
  },
  {
    period: "Projets pratiques",
    title: "Apprendre en construisant",
    description:
      "Je transforme progressivement des idées en prototypes concrets, tout en améliorant ma méthode de travail.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0f] text-white selection:bg-violet-500/30">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0b0b0f]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="#accueil" className="flex items-center gap-2 font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-900/20">
              <Footprints size={20} />
            </span>
            <span className="text-lg tracking-tight">
              Fidelis <span className=" text-violet-400">Daleck</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <Link className="transition hover:text-white" href="#projets">
              Projets
            </Link>
            <Link className="transition hover:text-white" href="#competences">
              Compétences
            </Link>
            <Link className="transition hover:text-white" href="#apropos">
              À propos
            </Link>
          </div>

          <Link
            href="#contact"
            className="rounded-full border border-violet-400/40 px-4 py-2 text-sm transition hover:bg-violet-500/15"
          >
            Parlons projet <span className="text-violet-300">↗</span>
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="accueil"
        className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 md:grid-cols-[1.15fr_0.85fr] md:items-center"
      >
        <div className="pointer-events-none absolute left-1/3 top-10 -z-10 h-72 w-72 rounded-full bg-violet-600/15 blur-[110px]" />

        <div>
          <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-4 py-2 text-xs tracking-wide text-violet-300 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
            ÉTUDIANTE EN GÉNIE LOGICIEL
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Je transforme des idées en{" "}
            <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              expériences numériques.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Je conçois et développe des interfaces web modernes, avec l’envie
            de créer des solutions utiles, accessibles et adaptées aux besoins
            réels.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#projets"
              className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-medium transition hover:bg-violet-500"
            >
              Explorer mes réalisations
              <ArrowUpRight
                size={17}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="#apropos"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              Découvrir mon parcours <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { value: "03", label: "Projets présentés" },
              { value: "WEB", label: "Domaine principal" },
              { value: "∞", label: "Envie d’apprendre" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-5"
              >
                <p className="text-xl font-semibold text-violet-300 sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-zinc-500 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="#projets"
            className="mt-10 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 transition hover:text-violet-300"
          >
            Voir ce que je construis <ArrowDown size={15} />
          </Link>
        </div>

        {/* Portrait : ajoute ta photo dans public/images/profile.jpg */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-600/25 via-fuchsia-500/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#14131a] p-3 shadow-2xl shadow-violet-950/20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-violet-950 via-[#17131f] to-[#0b0b0f]">
              <Image
                src="/images/moi.jpeg"
                alt="Portrait de la développeuse"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/90 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
                  Curiosité · Créativité · Code
                </p>
                <p className="mt-2 text-2xl font-semibold">Créer. Apprendre. Évoluer.</p>
                <p className="mt-2 text-sm text-zinc-300">
                  Un projet à la fois.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4 text-xs text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                Disponible pour apprendre et collaborer
              </span>
              <Code2 size={16} className="text-violet-300" />
            </div>
          </div>
          <div className="absolute -left-5 top-12 hidden rounded-2xl border border-white/10 bg-[#15131c] px-4 py-3 shadow-xl sm:block">
            <p className="text-xs text-zinc-500">Focus actuel</p>
            <p className="mt-1 text-sm font-medium">Design UX/UI & Dev FrontEnd</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projets" className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-violet-400">
                01 / PORTFOLIO
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Projets sélectionnés<span className="text-violet-400">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-zinc-500">
              Des projets qui reflètent mon apprentissage, ma curiosité et mon
              intérêt pour la conception web.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`group overflow-hidden rounded-3xl border border-white/[0.09] bg-[#111116] transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${project.accent} ${
                    index === 0 ? "aspect-[16/7]" : "aspect-video"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`Aperçu du projet ${project.name}`}
                    fill
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 90vw" : "(max-width: 768px) 100vw, 45vw"}
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs text-white/80 backdrop-blur">
                    {project.status}
                  </div>
                  <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-[#0b0b0f]/80 text-2xl text-violet-300 backdrop-blur">
                    {project.icon}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium tracking-[0.18em] text-violet-400">
                        {project.number} / {project.category}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                        {project.name}
                      </h3>
                    </div>
                    <ArrowUpRight className="mt-1 shrink-0 text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300" />
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-zinc-600">
            Projets présentés à titre de portfolio étudiant. Précise leur état
            d’avancement et n’affiche que des fonctionnalités réellement réalisées.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="competences" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="text-sm font-medium tracking-[0.2em] text-violet-400">
          02 / SAVOIR-FAIRE
        </p>
        <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Mes compétences<span className="text-violet-400">.</span>
          </h2>
          <p className="max-w-md text-sm leading-7 text-zinc-500">
            Les outils que j’utilise pour concevoir, développer et faire évoluer
            mes projets.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="rounded-2xl border border-white/[0.08] bg-[#111116] p-6 transition hover:border-violet-400/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                {index === 0 ? <Code2 size={22} /> : index === 1 ? <UserRound size={22} /> : <Terminal size={22} />}
              </div>
              <h3 className="mt-5 text-lg font-medium">{skill.title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{skill.subtitle}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="apropos" className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-violet-400">
              03 / À PROPOS
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Le code est un outil. L’impact est l’objectif.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-zinc-400 sm:text-base">
              Étudiante en génie logiciel, je m’intéresse à la manière dont la
              technologie peut répondre à des besoins concrets. J’aime apprendre
              en pratiquant, expérimenter de nouvelles idées et soigner autant
              la structure que l’interface.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200"
            >
              Faisons connaissance <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className="relative rounded-2xl border border-white/[0.08] bg-[#111116] p-6 pl-8"
              >
                <span className="absolute bottom-6 left-0 top-6 w-1 rounded-r-full bg-violet-500" />
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-300">
                  {experience.period}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{experience.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  {experience.description}
                </p>
              </div>
            ))}
            <div className="rounded-2xl border border-dashed border-violet-400/25 bg-violet-500/[0.04] p-6">
              <p className="text-sm font-medium text-white">
                Toujours en progression
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Je reste ouverte aux échanges, aux retours constructifs et aux
                opportunités qui me permettront de grandir dans le domaine tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-[#15111f] p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-violet-600/20 blur-[90px]" />
          <p className="relative text-sm font-medium tracking-[0.2em] text-violet-300">
            04 / CONTACT
          </p>
          <h2 className="relative mt-5 max-w-2xl text-3xl font-semibold sm:text-5xl">
            Une idée, un projet ? Donnons-lui vie.
          </h2>
          <p className="relative mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Pour une collaboration, une opportunité, un projet étudiant ou une
            discussion autour du développement web, je serais ravie d’échanger.
          </p>

          <div className="relative mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <UserRound size={23} />
                </div>
                <div>
                  <h3 className="font-semibold">Restons en contact</h3>
                  <p className="mt-1 text-xs text-zinc-500">
                    Les bonnes idées commencent par une conversation.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-violet-300" />
                  <div>
                    <p className="text-xs text-zinc-500">E-mail</p>
                    <a
                      href="mailto:tonadresse@email.com"
                      className="mt-1 inline-block break-all text-zinc-200 transition hover:text-violet-300"
                    >
                      fidelisdaleck386@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-violet-300" />
                  <div>
                    <p className="text-xs text-zinc-500">Téléphone</p>
                    <a
                      href="tel:+237680279842"
                      className="mt-1 inline-block break-all text-zinc-200 transition hover:text-violet-300"
                    >
                      680279842 / 657856201
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-violet-300" />
                  <div>
                    <p className="text-xs text-zinc-500">Localisation</p>
                    <p className="mt-1 text-zinc-200">Bonaberi-Douala, Cameroun</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs text-zinc-500">Retrouve-moi aussi sur</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://github.com/fidelisdaleck"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-zinc-300 transition hover:border-violet-400/40 hover:text-white"
                  >
                    <Code2 size={17} /> GitHub
                  </a>
                </div>
              </div>
            </div>

            <form
              action="mailto:fidelisdaleck386@gmail.com"
              method="post"
              encType="text/plain"
              className="rounded-2xl border border-white/10 bg-black/20 p-6 sm:p-7"
            >
              <h3 className="text-lg font-semibold">Envoie-moi un message</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Présente-toi et explique-moi brièvement ce que tu aimerais réaliser.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-zinc-300">
                  Nom complet
                  <input
                    type="text"
                    name="nom"
                    required
                    placeholder="Ton nom"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/60"
                  />
                </label>
                <label className="block text-sm text-zinc-300">
                  Adresse e-mail
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="toi@exemple.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/60"
                  />
                </label>
              </div>

              <label className="mt-4 block text-sm text-zinc-300">
                Sujet
                <select
                  name="sujet"
                  defaultValue=""
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#17131f] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-400/60"
                >
                  <option value="" disabled>
                    Choisir un sujet
                  </option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Projet web">Projet web</option>
                  <option value="Opportunité">Opportunité</option>
                  <option value="Autre">Autre</option>
                </select>
              </label>

              <label className="mt-4 block text-sm text-zinc-300">
                Message
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Parle-moi de ton idée..."
                  className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/60"
                />
              </label>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-medium transition hover:bg-violet-500 sm:w-auto"
              >
                Envoyer le message <Send size={16} />
              </button>
              <p className="mt-4 text-xs leading-5 text-zinc-600">
                Formulaire de démonstration : l’envoi dépend de la configuration
                e-mail du navigateur. Pour un vrai formulaire, connecte-le ensuite
                à une API ou à un service de formulaire.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} FIidelis Daleck — Portfolio personnel</p>
          <p>Conçu avec curiosité</p>
          <a href="#accueil" className="transition hover:text-violet-300">
            Retour en haut ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
