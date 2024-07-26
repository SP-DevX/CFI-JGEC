import { Metadata } from "next";



export const metadata: Metadata = {
    title: "Add project",
    openGraph: {
        title: "Add your project - CFI",
        description: "CFI offers a platform to showcase your projects. You just have to follow some simple steps to add your project in our website. So what are you waiting for? Add your project now!",
        images: [
            {
                url: "/og.jpg",
                width: 1200,
                height: 630,
                alt: "Projects",
            },
        ],
        url: "/projects/add-project",
        type: "website",
    },
};

export default function RootLayout({ children }:{children: React.ReactNode}) {
    return (
        <main>
            {children}
        </main>
    );
}