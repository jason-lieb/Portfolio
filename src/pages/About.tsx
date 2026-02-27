import profilePic from '../assets/images/profile-pic.webp'

export default function About() {
  return (
    <main>
      <div className="min-h-[calc(100vh-10.5rem)] flex justify-center items-center px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="relative m-12">
            <div className="absolute inset-0 translate-x-3 translate-y-3 border-4 border-accent rounded-2xl" />
            <img
              className="relative rounded-2xl w-[clamp(200px,calc(200px+12vw),350px)]"
              src={profilePic}
              alt="Profile"
            />
          </div>
          <div className="flex flex-col justify-center px-4 lg:mx-12">
            <h5 className="text-text text-base">Hi, my name is</h5>
            <h1 className="text-accent text-4xl font-bold">Jason Lieb</h1>
            <h4 className="text-text text-xl">Full Stack Software Engineer</h4>
            <p className="text-text">
              I'm a <span className="text-accent">software engineer</span> based in Atlanta, GA.
            </p>
            <p className="text-text">I write mostly Typescript, React, Haskell, and Nix.</p>
            <div className="mt-4">
              <a
                className="inline-block border border-accent text-text hover:text-accent px-4 py-2 rounded-lg text-center w-32"
                href="/Portfolio/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
