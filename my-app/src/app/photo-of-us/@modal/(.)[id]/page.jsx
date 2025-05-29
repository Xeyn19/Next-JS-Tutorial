'use client';
import React from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import pictures from "../../data-pic";

export default function PhotoModal({ params }) {
  const router = useRouter();
  const { id } = React.use(params);
  const photo = pictures.find((p) => p.id === Number(id));

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      router.back();
    }
  };

  if (!photo) {
    return (
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 "
        onClick={handleBackdropClick}
      >
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h1 className="text-3xl text-red-500 font-medium">Photo not Found!</h1>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 "
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-xl w-full mx-auto py-15">
        <h1 className="text-2xl font-medium mb-5 text-center">
          Picture of {photo.title}
        </h1>
        <div className="flex justify-center">
          <Image
            alt={photo.title || "Photo"}
            src={photo.image}
            width={300}
            height={300}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
