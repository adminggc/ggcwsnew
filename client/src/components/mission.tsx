import { Badge } from "@/components/ui/badge";
import missionBackground from "@assets/2287862901-2287862901_1750413625393.png";

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-burgundy mb-8">
              Our Mission
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-charcoal leading-relaxed">
                <strong className="text-burgundy">Regenerative Journey:</strong>{" "}
                They accompany clients on a journey to a regenerative
                lifestyle—restoring energy, nurturing inner depth, optimizing
                performance.
              </p>
              <p className="text-lg text-charcoal leading-relaxed">
                <strong className="text-burgundy">Deep Personalization:</strong>{" "}
                Provide wellness solutions grounded in regenerative medicine
                with deep personalization.
              </p>
              <p className="text-lg text-charcoal leading-relaxed">
                <strong className="text-burgundy">
                  Integrated Excellence:
                </strong>{" "}
                Integrate medicine, technology, and lifestyle for long‑term
                vitality.
              </p>
              <p className="text-lg text-charcoal leading-relaxed">
                <strong className="text-burgundy">Mindful Living:</strong>{" "}
                Create spaces where clients reconnect with purpose, live
                mindfully, and grow.
              </p>
              <p className="text-lg text-charcoal leading-relaxed">
                <strong className="text-burgundy">Smart Living:</strong> Shift
                clients from "running faster" to "living smarter and more
                sustainably."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
