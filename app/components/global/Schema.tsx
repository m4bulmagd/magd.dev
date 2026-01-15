import Script from "next/script";

export default function Schema() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Muhammad Abulmagd",
        url: "https://magd.dev",
        image: "https://magd.dev/logo.png",
        description:
            "Muhammad Abulmagd is a Machine Learning and Software Engineer who is passionate about building AI solutions.",
        jobTitle: "Machine Learning & Software Engineer",
        sameAs: [
            "https://github.com/m4bulmagd",
            "https://linkedin.com/in/m4bulmagd",
            "https://x.com/m4bulmagd",
        ],
    };

    return (
        <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
