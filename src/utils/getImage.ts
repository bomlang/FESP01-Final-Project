import React from "react";
import getData from "./getData";

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Snippet {
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
  };
}

interface Item {
  snippet: Snippet;
}

interface VideoData {
  kind: string;
  etag: string;
  items: Item[];
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

async function getImage(size: string) {
  const data = (await getData()) as VideoData;
  const items = data.items;
  // console.log("data.items: ", data.items);
  return items.map((item) => {
    switch (size) {
      case "sm":
        return {
          url: item.snippet?.thumbnails.default.url,
          width: item.snippet?.thumbnails.default.width,
          height: item.snippet?.thumbnails.default.height,
        };
      case "md":
        return {
          url: item.snippet?.thumbnails.medium.url,
          width: item.snippet?.thumbnails.medium.width,
          height: item.snippet?.thumbnails.medium.height,
        };
      case "lg":
        return {
          url: item.snippet?.thumbnails.high.url,
          width: item.snippet?.thumbnails.high.width,
          height: item.snippet?.thumbnails.high.height,
        };
      case "xl":
        return {
          url: item.snippet?.thumbnails.standard.url,
          width: item.snippet?.thumbnails.standard.width,
          height: item.snippet?.thumbnails.standard.height,
        };
      default:
        // 기본 값
        return {
          url: item.snippet.thumbnails.default.url,
          width: item.snippet.thumbnails.default.width,
          height: item.snippet.thumbnails.default.height,
        };
    }
  });
}

export default getImage;