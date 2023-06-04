import Head from "next/head"
import { Container } from "@/components/Container"
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Rikesh Shah</title>
        <meta
          name="description"
          content="Get in touch with Rikesh Shah."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Let&apos;s connect! Feel free to react out to me via email, or via call. You may also connect with me on LinkedIn <a href="https://www.linkedin.com/in/rikesh-shah-406903151/" target="_blank" rel="noreferrer" className="text-blue-400  border-b border-b-blue-600">here</a>
          </p>
        </header>
        <div className="relative mt-16 isolate bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 lg:static lg:px-8 ">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href="tel:+919825805034">
                        +91 9825805034
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href="mailto:rikeshshahshah@gmail.com">
                        rikeshshahshah@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            {/* <form action="#" method="POST" className="disabled sm:pb-32 lg:px-8">
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form> */}
          </div>
        </div>
      </Container>

    </>
  )
}