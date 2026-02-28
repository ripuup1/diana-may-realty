import https from 'https';
import fs from 'fs';
import path from 'path';

const IMAGES = [
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/669ae0d1cee9a_outfit1-2924.jpg", name: "diana-hero-1.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/669ae1ea6c698_outfit3-3463.jpg", name: "diana-hero-2.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/68b86f943e0a2_color-22071.jpg", name: "diana-hero-3.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/68b87102027a6_color-22062.jpg", name: "diana-lifestyle-1.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/68b8710393e02_color-22046.jpg", name: "diana-lifestyle-2.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/68b8711f2f4b1_color-22064.jpg", name: "diana-lifestyle-3.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/66c3b186804d3_outfit3-3646.jpg", name: "diana-bio.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/66c3b366af620_outfit2--27.jpg", name: "diana-about-1.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/66c3b505c81c6_outfit2--40.jpg", name: "diana-about-2.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/685368a1865db_460606919_122158029518250438_6493338493003378697_n.jpg", name: "diana-about-3.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/68b86e64b7f7c_color-22078.jpg", name: "diana-team.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/64c3d394e4a87_Diana-May-REALTOR-bio.jpg", name: "diana-contact-bio.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/64c1c9acc473c_Diana-May-REALTOR_PROFILE_circl.png?fit=crop&w=512&h=512", name: "diana-profile-circle.png" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/63fd2de0e47cb_HTR-Color-whiteBG-2018.png", name: "htr-logo.png" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/64c1cde24873f_Diana-May-Realty-Team.png", name: "diana-may-team-logo.png" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/6227fd7db3cd6_equal-housing-logo.jpg", name: "equal-housing-logo.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/646ce37316b02_Color-Separator-Image.jpg", name: "color-separator.jpg" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/64cb0cd87bd00_dianamayrealty.com-qrcode.png", name: "qr-code.png" },
  { url: "https://d1yj6jtab8q6z1.cloudfront.net/6231feed68eec_facebook-icon.png", name: "facebook-icon.png" },
];

const outputDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(outputDir, filename);
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => { file.close(); console.log(`Done: ${filename}`); resolve(); });
        });
      } else {
        response.pipe(file);
        file.on('finish', () => { file.close(); console.log(`Done: ${filename}`); resolve(); });
      }
    }).on('error', (err) => { fs.unlink(filePath, () => {}); console.error(`Failed: ${filename}: ${err.message}`); reject(err); });
  });
}

(async () => {
  console.log(`\nDownloading ${IMAGES.length} images from dianamayrealty.com...\n`);
  for (const img of IMAGES) {
    try { await downloadImage(img.url, img.name); } catch (e) { /* continue */ }
  }
  console.log(`\nDone! Images saved to public/images/\n`);
})();
