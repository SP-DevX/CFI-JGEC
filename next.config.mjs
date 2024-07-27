/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ["i.imgur.com", "drive.google.com", "fiverr-res.cloudinary.com", "images.unsplash.com","firebasestorage.googleapis.com"]
    // }
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
