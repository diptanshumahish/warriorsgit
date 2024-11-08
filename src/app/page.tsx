import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Code,
  Users,
  Briefcase,
  Send,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-gray-900 text-gray-100">
      <main className="flex-1 ">
        <section className="w-full relative py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <Image
            src="/pic.jpg"
            height={800}
            width={1920}
            alt="background"
            className="inset-0 absolute max-h-[50h] opacity-20 z-0"
          />
          <div className="container px-4 md:px-6 z-20">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex flex-col gap-2 items-center">
                <div className="px-4 py-2 gap-4 rounded-lg text-xs border text-gray-200 tracking-wider w-fit border-green-300 flex items-center justify-center">
                  <Users size={15} /> CUSTOMER SATISFACTION GUARANTEED!
                </div>
                <h1 className="text-3xl  font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  The Best IT Staffing Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Quality IT talent with outstanding customer satisfaction and
                  innovative resource planning.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-green-600 text-white hover:bg-green-700">
                  Explore More
                </Button>
                <Button variant="outline" className="text-black ">
                  Contact Us
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
                    <service.icon className="h-8 w-8 mb-2 text-green-500" />
                    <CardTitle className="text-white">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              {[
                "Java FullStack",
                "Python",
                "Data Scientist",
                ".NET developer",
                "DevOps",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="#"
                className="inline-flex items-center text-green-500 hover:text-green-400"
              >
                Check out all Technologies&apos; candidates we have
                <ChevronRight className="ml-1 h-4 w-4" />
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
            <p className="max-w-[800px] mx-auto text-gray-400 text-center mb-8">
              WarriorsGit provides quality IT talent with outstanding customer
              satisfaction along with innovative resource planning and staffing
              solutions. In this competitive era of digital, Information
              Technology talents need to perform under consistent stress with
              strict delivery timelines. We play a vital role to evaluate best
              fit talent for our valued customers.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-center">
              Our Recruitment Procedure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Preparing",
                  description: "Understanding the Job well",
                },
                {
                  step: "02",
                  title: "Sourcing",
                  description: "Matching the candidates with required jobs",
                },
                {
                  step: "03",
                  title: "Screening",
                  description: "Filtering applicants and shortlisting",
                },
                {
                  step: "04",
                  title: "Selecting",
                  description: "Interviewing candidates and finalizing",
                },
                {
                  step: "05",
                  title: "Hiring",
                  description: "Job offering to the candidate",
                },
                {
                  step: "06",
                  title: "Onboarding",
                  description: "The final step",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <span className="text-green-500 mr-2">{item.step}</span>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Contact Us
            </h2>
            <div className="max-w-[600px] mx-auto space-y-4">
              <div className="flex items-center space-x-2">
                <Send className="h-5 w-5 text-green-500" />
                <span>Contact@warriorsgit.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>+1 302-231-1301</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-green-500" />
                <span>16192 Coastal Highway Lewes, DE 19958 USA</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t flex items-center justify-center border-gray-800 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            © 2024 WarriorsGit LLC. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-400 hover:text-green-400">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-400">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-400">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
