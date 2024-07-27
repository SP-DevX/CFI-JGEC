import { Metadata } from "next";



export const metadata: Metadata = {
    title: "Give Review",
    openGraph: {
        title: "Give Review - CFI",
        description: "Give your valuable review to the projects of CFI. Your review will help the students to improve their projects and make them better.",
        images: [
            {
                url: "/og.jpg",
                width: 1200,
                height: 630,
                alt: "Reviews",
            },
        ],
        url: "/review",
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
        </main>
    );
}