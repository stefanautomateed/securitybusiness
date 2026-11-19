import type { Metadata } from "next";
import { pricingFaqs } from "@/lib/site-content";

export const metadata: Metadata = {
  title: { absolute: "Vulnerability Scanner Pricing: Free, $29 & $79 Plans | ScanMySaaS" },
  description:
    "Vulnerability scanner pricing: free website and public repo scans. Starter $29/mo (10 website scans), Pro $79/mo (30), both with private repos and AI review.",
  alternates: {
    canonical: "https://www.scanmysaas.com/pricing",
  },
  openGraph: {
    title: "Vulnerability Scanner Pricing: Free, $29 & $79 Plans | ScanMySaaS",
    description:
      "Start with a free website security scan and one actionable fix. Upgrade for monthly credits, rollover, rescans, and remediation for all findings.",
    url: "https://www.scanmysaas.com/pricing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://www.scanmysaas.com/pricing#faq",
        mainEntity: pricingFaqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.scanmysaas.com/#software-application",
        name: "ScanMySaaS",
        url: "https://www.scanmysaas.com",
        applicationCategory: "SecurityApplication",
        operatingSystem: "Any",
        offers: [
          { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD", url: "https://www.scanmysaas.com/pricing" },
          { "@type": "Offer", name: "Starter", price: "29", priceCurrency: "USD", url: "https://www.scanmysaas.com/pricing", priceSpecification: { "@type": "UnitPriceSpecification", price: "29", priceCurrency: "USD", unitText: "MONTH" } },
          { "@type": "Offer", name: "Pro", price: "79", priceCurrency: "USD", url: "https://www.scanmysaas.com/pricing", priceSpecification: { "@type": "UnitPriceSpecification", price: "79", priceCurrency: "USD", unitText: "MONTH" } },
        ],
      },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />{children}</>;
}
