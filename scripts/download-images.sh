#!/bin/bash
cd "$(dirname "$0")/.."
mkdir -p public/images

URLS=(
  "https://d1yj6jtab8q6z1.cloudfront.net/669ae0d1cee9a_outfit1-2924.jpg|diana-hero-1.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/669ae1ea6c698_outfit3-3463.jpg|diana-hero-2.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/68b86f943e0a2_color-22071.jpg|diana-hero-3.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/68b87102027a6_color-22062.jpg|diana-lifestyle-1.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/68b8710393e02_color-22046.jpg|diana-lifestyle-2.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/68b8711f2f4b1_color-22064.jpg|diana-lifestyle-3.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/66c3b186804d3_outfit3-3646.jpg|diana-bio.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/66c3b366af620_outfit2--27.jpg|diana-about-1.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/66c3b505c81c6_outfit2--40.jpg|diana-about-2.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/685368a1865db_460606919_122158029518250438_6493338493003378697_n.jpg|diana-about-3.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/68b86e64b7f7c_color-22078.jpg|diana-team.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/64c3d394e4a87_Diana-May-REALTOR-bio.jpg|diana-contact-bio.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/64c1c9acc473c_Diana-May-REALTOR_PROFILE_circl.png?fit=crop&w=512&h=512|diana-profile-circle.png"
  "https://d1yj6jtab8q6z1.cloudfront.net/63fd2de0e47cb_HTR-Color-whiteBG-2018.png|htr-logo.png"
  "https://d1yj6jtab8q6z1.cloudfront.net/64c1cde24873f_Diana-May-Realty-Team.png|diana-may-team-logo.png"
  "https://d1yj6jtab8q6z1.cloudfront.net/6227fd7db3cd6_equal-housing-logo.jpg|equal-housing-logo.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/646ce37316b02_Color-Separator-Image.jpg|color-separator.jpg"
  "https://d1yj6jtab8q6z1.cloudfront.net/64cb0cd87bd00_dianamayrealty.com-qrcode.png|qr-code.png"
  "https://d1yj6jtab8q6z1.cloudfront.net/6231feed68eec_facebook-icon.png|facebook-icon.png"
)

for item in "${URLS[@]}"; do
  IFS='|' read -r url name <<< "$item"
  echo "Downloading $name..."
  curl -sL "$url" -o "public/images/$name"
  size=$(stat -c%s "public/images/$name" 2>/dev/null || stat -f%z "public/images/$name" 2>/dev/null)
  echo "  -> $name ($size bytes)"
done

echo ""
echo "All images downloaded!"
