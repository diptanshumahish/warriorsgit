import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Code,
  Users,
  Briefcase,
  Send,
  ChevronRight,
  Linkedin,
  Twitter,
  Laptop,
  Database,
  Server,
  Stars,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-gray-900 text-gray-100">
      <main className="flex-1">
        <section className="w-full relative py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <Image
            src="/pic.jpg"
            layout="fill"
            objectFit="cover"
            alt="background"
            className="absolute inset-0 h-full opacity-20 z-0"
          />
          <div className="container flex items-center justify-center px-4 md:px-6 z-20 md:h-fit h-[90vh] ">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="flex flex-col gap-4 items-center">
              <iframe className="z-10" src="https://lottie.host/embed/ef228231-14db-4d35-80b7-53c339662811/5jxZHgfjTK.json"></iframe>
                <div className="px-4 py-2 gap-4 rounded-lg text-xs border text-gray-200 tracking-wider w-fit border-green-300 flex items-center justify-center">
                  <Stars size={15} /> Delivering talent you can trust
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  The Best IT Staffing Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 text-sm sm:text-base md:text-lg">
                  Quality IT talent with outstanding customer satisfaction and
                  innovative resource planning.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button className="bg-green-300 text-black hover:bg-green-700 w-full sm:w-auto">
                  Explore More
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto text-black"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Permanent Staffing",
                  icon: Users,
                  description:
                    "Reliable permanent hiring solutions for your organization.",
                },
                {
                  title: "Technical Staff",
                  icon: Code,
                  description:
                    "Best-in-class technical solutions you can rely on.",
                },
                {
                  title: "Temporary Staffing",
                  icon: Briefcase,
                  description:
                    "Flexible temporary staffing to meet your needs.",
                },
                {
                  title: "Contract Hiring",
                  icon: CheckCircle,
                  description:
                    "Suitable contract hiring services for organizations.",
                },
              ].map((service, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <service.icon className="h-12 w-12 mb-4 text-green-300" />
                    <CardTitle className="text-white text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="technologies"
          className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Our Technologies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              {[
                { name: "Java FullStack", icon: Laptop },
                { name: "Python", icon: Code },
                { name: "Data Scientist", icon: Database },
                { name: ".NET developer", icon: Code },
                { name: "DevOps", icon: Server },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors flex flex-col items-center justify-center gap-2"
                >
                  <tech.icon className="h-10 w-10 text-green-300" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="#"
                className="inline-flex items-center text-green-300 hover:text-green-400 text-lg"
              >
                Check out all Technologies&apos; candidates we have
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Who We Are
            </h2>
            <p className="max-w-[800px] mx-auto text-gray-400 text-center mb-12 text-lg">
              Warriors GIT LLC provides quality IT talent with outstanding customer
              satisfaction along with innovative resource planning and staffing
              solutions. In this competitive era of digital, Information
              Technology talents need to perform under consistent stress with
              strict delivery timelines. We play a vital role to evaluate best
              fit talent for our valued customers.
            </p>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Our Recruitment Procedure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Preparing",
                  description: "Understanding the Job well",
                  icon: Briefcase,
                },
                {
                  step: "02",
                  title: "Sourcing",
                  description: "Matching the candidates with required jobs",
                  icon: Users,
                },
                {
                  step: "03",
                  title: "Screening",
                  description: "Filtering applicants and shortlisting",
                  icon: CheckCircle,
                },
                {
                  step: "04",
                  title: "Selecting",
                  description: "Interviewing candidates and finalizing",
                  icon: Users,
                },
                {
                  step: "05",
                  title: "Hiring",
                  description: "Job offering to the candidate",
                  icon: Briefcase,
                },
                {
                  step: "06",
                  title: "Onboarding",
                  description: "The final step",
                  icon: CheckCircle,
                },
              ].map((item, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <span className="text-green-300 mr-4 text-3xl font-bold">
                        {item.step}
                      </span>
                      <item.icon className="h-8 w-8 text-green-300 mr-2" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Contact Us
            </h2>
            <div className="max-w-[600px] mx-auto space-y-6">
              <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                <Send className="h-8 w-8 text-green-300 flex-shrink-0" />
                <span className="text-lg">Contact@warriorsgit.com</span>
              </div>
              <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-300 flex-shrink-0" />
                <span className="text-lg">+1 302-231-1301</span>
              </div>
              <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                <Briefcase className="h-8 w-8 text-green-300 flex-shrink-0" />
                <span className="text-lg">
                  16192 Coastal Highway Lewes, DE 19958 USA
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t flex items-center justify-center border-gray-800 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm leading-loose text-gray-400">
            © 2024 Warriors GIT LLC. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-green-400">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-400">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
