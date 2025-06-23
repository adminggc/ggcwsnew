import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            Connect With Us
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Ready to experience premium wellbeing solutions? Let's start your
            journey together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-burgundy mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-burgundy rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Address</h4>
                  <p className="text-charcoal">
                    9th Floor, 233 Dong Khoi, Ben Thanh District, Ho Chi Minh
                    City, Vietnam
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-burgundy rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Phone</h4>
                  <p className="text-charcoal">(+84) 968 26 88 79</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-burgundy rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Email</h4>
                  <p className="text-charcoal">info@ggcvietnam.vn</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-charcoal mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  className="bg-burgundy hover:bg-dark-burgundy text-white rounded-lg"
                >
                  <Facebook size={20} />
                </Button>
                <Button
                  size="icon"
                  className="bg-burgundy hover:bg-dark-burgundy text-white rounded-lg"
                >
                  <Linkedin size={20} />
                </Button>
                <Button
                  size="icon"
                  className="bg-burgundy hover:bg-dark-burgundy text-white rounded-lg"
                >
                  <Instagram size={20} />
                </Button>
              </div>
            </div>
          </div>

          <Card className="bg-warm-beige rounded-2xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-charcoal font-medium mb-2"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-burgundy focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-charcoal font-medium mb-2"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-burgundy focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-charcoal font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-burgundy focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-charcoal font-medium mb-2"
                  >
                    Service Interest
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      handleInputChange("service", value)
                    }
                  >
                    <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-burgundy focus:outline-none transition-colors duration-300">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medical-wellness">
                        Medical Wellness
                      </SelectItem>
                      <SelectItem value="premium-automotive">
                        Premium Automotive Solutions
                      </SelectItem>
                      <SelectItem value="selective-healthcare">
                        Selective Healthcare Services
                      </SelectItem>
                      <SelectItem value="ai-smart-systems">
                        AI & Smart Systems
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-charcoal font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-burgundy focus:outline-none transition-colors duration-300"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-burgundy hover:bg-dark-burgundy text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
