import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import rikeshShah from "@/images/photos/rikeshShah.jpeg"

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Rikesh Shah</title>
        <meta
          name="description"
          content="I’m Rikesh Shah. I live in Ahmedabad, where I build sales teams."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid  grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className='lg:sticky lg:top-5'>
            <div className="lg:pl-20 ">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                  src={rikeshShah}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square  rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
            </div>
            <div className="lg:pl-20 sticky">
              <ul role="list">
                <SocialLink href="https://www.linkedin.com/in/rikesh-shah-406903151/" icon={LinkedInIcon} className="mt-4">
                  Follow on LinkedIn
                </SocialLink>
                <SocialLink
                  href="mailto:rikeshshahshah@gmail.com"
                  icon={MailIcon}
                  className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                >
                  rikeshshahshah@gmail.com
                </SocialLink>
              </ul>
            </div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi, I’m Rikesh Shah.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I have been in the sales field
                for over 23 years. I have been doing sales ever
                since I graduated, initially selling LPG cylinders
                via major industrial supplies, than branching out
                into retail sales and B2B while working for Hindustan Unilever.
                And even after so many years working in sales,
                I have never lost the spirit of it.
              </p>
              <p>
                I love sales, because I have a passion to understand people.
                Understanding the context and concerns of my distributors,
                retailers and suppliers, and addressing them, is something that I deeply enjoy.
                I firmly believe that for better product placement and marketing, it&apos;s important
                to gain trust of these stakeholders in a company&apos;s sales channel.
              </p>
              <p>
                I have managed the state of Gujarat via a managerial role
                in most of the companies I have worked in.
                My network has opened many opportunites time
                and again to appoint and train S.E.s, S.O.s, T.S.I.s and A.S.M.s,
                who have been able to prove their competence in their work under my guidance.
              </p>
              <p>
                In budding companies, I have proved myself capable of building the sales infrastructure from the ground up. In
                stable companies, I have been able to manage and upgrade on the existing sales infra, including product
                launches and placements, as well as designing sales schemes, and countering competition&apos;s moves.
              </p>
              <p>
                Currently, I reside in the city of Vadodara, where I live with my family - a beautiful wife, who is a yoga instructor; and a wonderful son, a web developer.
              </p>

            </div>
          </div>

        </div>
      </Container>
    </>
  )
}
