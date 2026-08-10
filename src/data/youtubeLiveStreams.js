/**
 * YouTube Live & Broadcast Streams Configuration
 * 
 * TO ADD MORE YOUTUBE LIVE LINKS IN THE FUTURE:
 * Simply add a new object to the `youtubeLiveStreams` array below.
 * You can provide a full YouTube URL (e.g. https://www.youtube.com/live/VIDEO_ID or https://youtu.be/VIDEO_ID)
 * or just the YouTube Video ID.
 */

export const youtubeChannelUrl = "https://www.youtube.com/@khakhibabasevasangh";

// Helper function to extract YouTube Embed ID from any URL format
export function parseYouTubeEmbedId(urlOrId) {
  if (!urlOrId) return "";
  // If it's already an 11-char ID
  if (urlOrId.length === 11 && !urlOrId.includes("/")) {
    return urlOrId;
  }
  // Match youtube.com/live/ID, youtube.com/watch?v=ID, youtu.be/ID
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|live\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = urlOrId.match(regExp);
  return (match && match[2].length === 11) ? match[2] : urlOrId;
}

export const youtubeLiveStreams = [
  {
    id: "stream1",
    url: "https://www.youtube.com/live/At12BeVk8ng?si=3Z4t4R1ZQlsxEM6P",
    titleEn: "Monthly Sudi Baras Bhajan Sandhya (Live Stream 1)",
    titleHi: "मासिक सुदी बारस भजन संध्या (लाइव प्रसारण 1)",
    dateEn: "Shukla Paksha Dwadashi Live",
    dateHi: "शुक्ल पक्ष द्वादशी सीधा प्रसारण",
  },
  {
    id: "stream2",
    url: "https://www.youtube.com/live/G3QsKH2bmcM?si=vgjNPS40xKjPKClJ",
    titleEn: "Monthly Sudi Baras Bhajan Sandhya (Live Stream 2)",
    titleHi: "मासिक सुदी बारस भजन संध्या (लाइव प्रसारण 2)",
    dateEn: "Shukla Paksha Dwadashi Live",
    dateHi: "शुक्ल पक्ष द्वादशी सीधा प्रसारण",
  }
];
