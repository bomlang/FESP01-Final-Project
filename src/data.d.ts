// interface VideoData {
//   kind: string;
//   etag: string;
//   items: {
//     etag: string;
//     id: string;
//     kind: string;
//     snippet: {
//       publishedAt: number;
//       channelId: string;
//       title: string;
//       description: string;
//       thumbnails: {
//         default: {
//           url: string;
//           width: number;
//           height: number;
//         };
//         medium: {
//           url: string;
//           width: number;
//           height: number;
//         };
//         high: {
//           url: string;
//           width: number;
//           height: number;
//         };
//         standard: {
//           url: string;
//           width: number;
//           height: number;
//         };
//         maxres: {
//           url: string;
//           width: number;
//           height: number;
//         };
//       };
//       channelTitle: string;
//       localized: {
//         title: string;
//         description: string;
//       };
//     };
//   }[];
//   nextPageToken: string;
//   pageInfo: {
//     totalResults: number;
//     resultsPerPage: number;
//   };
// }

// interface VideoDetailData {
//   items: Array<{
//     id: { videoId: string };
//     snippet: {
//       thumbnails: {
//         default: {
//           url: string;
//           width: number;
//           height: number;
//         };
//         medium: {
//           url: string;
//           width: number;
//           height: number;
//         };
//         high: {
//           url: string;
//           width: number;
//           height: number;
//         };
//       };
//       channelTitle: string;
//       title: string;
//       description: string;
//       publishedAt: string;
//     };
//   }>;
// }

// interface VideoComponentsProps {
//   detail: string;
//   page: string;
//   size: string;
//   // item:
// }

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
  channelTitle: string;
  localized: {
    title: string;
    description: string;
  };
}

interface Item {
  etag: string;
  id: string;
  kind: string;
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

interface VideoDetailData {
  items: Array<{
    id: { videoId: string };
    snippet: Snippet;
  }>;
}

interface VideoComponentsProps {
  detail: string;
  page: string;
  size: string;
  image: { url: string }[];
  item: Item;
}
