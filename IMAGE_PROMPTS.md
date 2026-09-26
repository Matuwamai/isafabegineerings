# AI image prompts: Isafab Engineering

Generate each image with ChatGPT (image generation), Google Gemini, Ideogram or Midjourney. Save it with the
**exact filename** shown, as JPG, into `public/images/`. The website picks it up automatically. Until then, a grey
placeholder with the filename is shown.

Tips
- Add this to the end of every prompt: *"Photorealistic, natural lighting, shot on a DSLR, shallow depth of field,
  no text, no logos, no watermark."*
- Check the safety gear in every image before using it: welding helmet or face shield when welding, gloves, boots,
  overalls. Customers in the trade will notice mistakes.
- Check hands, faces and tools for AI errors (extra fingers, melted tools). Regenerate if something looks off.
- Keep file sizes small: resize to about 1600px wide and compress (e.g. squoosh.app), aiming for under 300 KB each.
- Keep the look consistent: a Kenyan workshop setting and the same colour of overalls (e.g. navy blue) in all images.

| File | Size / shape | Prompt |
|---|---|---|
| `hero.jpg` | 1920×1080, landscape | A Black Kenyan male welder in navy blue overalls, leather gloves and a dark welding helmet, MIG welding a steel frame in an open-sided metal workshop, bright orange sparks flying, dark moody background, dramatic side lighting, subject on the right third of the frame |
| `welder-portrait.jpg` | 1200×1500, portrait | Portrait of a confident Black Kenyan fabricator in his 30s wearing navy overalls, welding helmet flipped up, holding an angle grinder, standing in a metal workshop with steel bars and a finished gate behind him, warm light |
| `about.jpg` | 1600×1200 | A Black Kenyan fabricator measuring a steel square tube with a tape measure and marking it with chalk, on a workbench in a small metal workshop, safety glasses on, steel offcuts around |
| `steel-doors.jpg` | 1600×1200 | A newly installed modern black steel door with decorative flat-bar pattern at the entrance of a Kenyan bungalow, clean paint finish, daylight |
| `steel-beds.jpg` | 1600×1200 | A well-made black metal double bed frame in a simple modern Kenyan bedroom, smooth painted steel tubes, neatly made bedding, daylight from a window |
| `steel-windows.jpg` | 1600×1200 | Modern steel window frames with neat geometric burglar-proof grills installed on a cream-painted Kenyan house, glass fitted, daylight |
| `modern-gates.jpg` | 1600×1200 | A modern black and grey steel sliding gate with horizontal sheet panels at the entrance of a Kenyan home compound, paved driveway, clear blue sky |
| `roofing.jpg` | 1600×1200 | Two Black Kenyan workers in hard hats and harnesses fixing steel roof trusses and purlins on a house under construction, blue sky, iron sheets stacked nearby |
| `railing.jpg` | 1600×1200 | A modern black steel staircase railing with simple vertical bars and a smooth handrail on a tiled staircase in a Kenyan home, clean finish |
| `steel-fixing.jpg` | 1600×1200 | Two Black Kenyan steel fixers in hard hats, reflective vests and gloves tying reinforcement bars with binding wire on a column and beam rebar cage at a Kenyan construction site, blue sky, concrete blocks nearby |
| `industrial.jpg` | 1600×1200 | A Black Kenyan fabricator in overalls and safety glasses welding a heavy steel machine frame / equipment platform inside a factory workshop, yellow-painted steel guardrails and a chain hoist in the background |
| `water-utility.jpg` | 1600×1200 | A tall newly painted steel water-tank tower holding a black plastic water tank beside a Kenyan home, with a steel-framed solar panel mount nearby, clear blue sky |
| `gallery-welding.jpg` | 1600×1200 | Close-up of a Black welder's gloved hands MIG welding a joint on a steel tube, bright spark and glowing weld bead, dark background |
| `gallery-grinding.jpg` | 1600×1200 | A Black Kenyan fabricator with face shield grinding a weld on a steel gate using an angle grinder, stream of sparks, workshop setting |
| `gallery-gate.jpg` | 1600×1200 | A tall modern charcoal-grey steel pedestrian and car gate with laser-cut pattern panels on a Kenyan residential compound wall, evening golden light |
| `gallery-roof.jpg` | 1600×1200 | Completed steel roof truss structure on a building under construction in Kenya, seen from below against a blue sky, neat welded joints |
| `og-cover.jpg` | 1200×630, landscape | Same scene as `hero.jpg` but wider, with empty dark space on the left. This is the preview image when the site is shared on WhatsApp/Facebook |

## Replace with real photos

As soon as he completes real jobs, take photos (landscape, good daylight, clean background) and replace these files,
or add them to `extraImages` in `src/pages/Gallery.jsx`. Real work builds far more trust than AI images. Once the
gallery has real photos, remove the "illustrations" notice in `src/pages/Gallery.jsx`.
