import Title from "@/components/common/Title";
import ImageCard from "@/components/gallery/ImageCard";
import React from "react"; 
import NotFound from "@/components/common/NotFound";

export async function generateMetadata() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`, {
    next: {
      revalidate: 3600,
    },
  });
  const { photos } = await res.json();
  return {
    title: "Gallery",
    openGraph: {
      title: "Our Gallery - CFI",
      description: "Here are some photos of CFI. Have a look at them and know more about CFI. You can also download them.",
      images: [
        {
          url: photos ? photos[0].photo : "/og.jpg",
          width: 1200,
          height: 630,
          alt: "Team Members"
        }
      ],
      url: "/gallery",
      type: "website",
    },
  };
}

const Gallery: React.FC = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`, {
    next: {
      revalidate: 3600,
    },
  });
  const { photos } = await res.json();

  if (!photos) {
    return (
      <NotFound
        title="No photos found"
      />
    );
  }
  return (
    <div className="w-full min-h-screen">
      <Title title={`Gallery`} />
      <div className="w-full min-h-screen  ">
        <div className="layout  mb-8">
          <div className="max-xs:text-sm text-end xs:pe-8 text-white opacity-80 font-medium">
            Page
            <span className="font-semibold bg-gray-200 mx-2 px-1.5 py-1 rounded-sm text-gray-800">{` 01 `}</span>
            of
            <span className="text-sm">{` 10 `}</span>
          </div>
          <div className="w-full h-full my-4 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {photos.map((photo: galleryPhotoType) => (
              <ImageCard key={photo._id} photo={photo} />
            ))}
          </div>
          {/* <div className="flex justify-between items-center">
            <button className="btn w-36 flex items-center justify-center gap-x-2 px-0 ">
              <FaArrowLeft /> Previous
            </button>
            <button className="btn w-36 flex items-center justify-center gap-x-2 px-0 ">
              Next
              <FaArrowRight />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
