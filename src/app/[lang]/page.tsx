import { Showcase } from "@/components/sections/Showcase";
import { WhyAI } from "@/components/sections/WhyAI";
import { Services } from "@/components/sections/Services";
import { Workflow } from "@/components/sections/Workflow";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { getDictionary } from "@/lib/getDictionary";
import type { Language } from "@/lib/dictionaries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Language);

  return (
    <main>
      <Showcase dict={dict.hero} />
      <WhyAI dict={dict.whyAi} />
      <Services dict={dict.services} />
      <Workflow dict={dict.workflow} />
      <Portfolio dict={dict.portfolio} lang={lang} />
      <Contact dict={dict.contact} />
    </main>
  );
}
