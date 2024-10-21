import { writeFile } from 'fs/promises';
import epub from '../lib';

/*
  This test checks that the urlValidator allows skipping requests to "file" and "https" URLs and throws an error if one would be encountered.
  If ignoreFailedDownloads is turned on, generating the epub should still work fine.
 */

(async () => {
  function urlValidator(url: string): boolean {
    const protocol = new URL(url).protocol;
    return protocol === "file:" || protocol === "https:";
  }

  const epubContent = `<p>Generate EPUB books from HTML with a simple API in Node.js or the browser.</p><p><img src="file:///filepath/that/will/be/ignored"><img src="http://www.alice-in-wonderland.net/wp-content/uploads/1book2.jpg" alt="Image"/><img src="https://url/that/will/be/ignored">`;
  try {
    await epub({ title: 'EPub Gen', verbose: true, urlValidator }, [{ content: epubContent }]);
    process.exit(-1);
  } catch (err) {
    console.log(`Caught \`${err}\` as expected`);
  }

  const content = await epub({ title: 'EPub Gen', verbose: true, ignoreFailedDownloads: true, urlValidator }, [{ content: epubContent }]);
  await writeFile(`${__filename.slice(0, -3)}.epub`, Buffer.from(content));
})();