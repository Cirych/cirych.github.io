import Image from 'next/image';
import Link from 'next/link';

import gh from '@/media/github_logo.png';
import li from '@/media/linkedin_logo.png';

const Home: PageComponent = () => {
  return (
    <>
      <header className="section">
        <h3 className="text-2xl">
          Yeah! Well, I&apos;m gonna go build my own theme site.
          <br />
          With full-stack and sockets! In fact, forget the site!
        </h3>
      </header>
      <main className="section">
        <Link href="https://github.com/Cirych">
          <Image
            src="/cirych.svg"
            alt="Avatar of the author"
            width={150}
            height={200}
            priority
          />
        </Link>
      </main>
      <footer className="section items-center justify-around px-20">
        <Link href="https://github.com/Cirych/">
          <Image
            className="mx-5 h-auto w-48"
            src={gh}
            alt="Link to GitHub profile"
            placeholder="blur"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/cirych/">
          <Image
            className="mx-5 h-auto w-48"
            src={li}
            alt="Link to LinkedIn profile"
            placeholder="blur"
          />
        </Link>
      </footer>
    </>
  );
};

export default Home;
