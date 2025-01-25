"use client";

import config from "@/lib/config";
import { IKVideo, ImageKitProvider } from "imagekitio-next";
import React from "react";

const BookVideo = ({ videoUrl }: { videoUrl: string }) => {
  const { publicKey, urlEndpoint } = config.env.imagekit;

  return (
    <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint}>
      <IKVideo className="w-full rounded-xl" path={videoUrl} controls={true} />
    </ImageKitProvider>
  );
};

export default BookVideo;
