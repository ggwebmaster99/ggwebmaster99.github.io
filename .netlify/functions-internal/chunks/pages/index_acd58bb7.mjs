/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderSlot, j as renderHead, k as renderComponent, m as maybeRenderHead, h as addAttribute, F as Fragment, u as unescapeHTML } from '../astro_7ff996e6.mjs';
import 'clsx';
import { escape } from 'html-escaper';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro("http://glenngasm.in");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="author" content="Michael Andreuzza"><meta name="your keywords" content="Add ypour keywords here"><!-- Favicon guidelines generated with https://favicon.io/ --><link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"><link rel="manifest" href="/favicons/site.webmanifest"><link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ffffff"><meta name="msapplication-TileColor" content="#ffffff"><meta name="theme-color" content="#ffffff"><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"><link href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-text-pro" rel="stylesheet"><script async defer data-website-id="d06af60f-53ab-468c-8ad4-d53bdaea74a1" src="https://stats.andreuzza.com/umami.js"><\/script>'])));
}, "C:/Users/Glennjamin/Documents/_GGAstroSite/afraid-atmosphere/src/components/BaseHead.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("http://glenngasm.in");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="selection:bg-secondary selection:text-secondary"> <head>', "", '</head> <body class="bg-primary"> ', '  <script type="text/javascript" src="https://unpkg.com/aos@2.3.1/dist/aos.js"><\/script> <script type="text/javascript">\n      AOS.init();\n    <\/script> </body> </html>'])), renderComponent($$result, "BaseHead", $$BaseHead, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Glennjamin/Documents/_GGAstroSite/afraid-atmosphere/src/layouts/BaseLayout.astro", void 0);

const $$Astro$3 = createAstro("http://glenngasm.in");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`<!------
  /------------------
// Big SVG hero Name
//-------------------
//
// If you want to change your name you will have to recreate it
// in Figma or any other way you can export text as SVG
// After you have exported it, you have to remove the size atributes from the SVG
// this will allow the SVG become fill width and full heigh. It will also be responsive.
--- -->${maybeRenderHead()}<section class="bg-primary"> <div class="px-8 2xl:max-w-7xl mx-auto pt-12" data-aos="fade-up" data-aos-duration="1000"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 364.5 36.625"> <defs></defs> <path id="GLENNGASMIN" d="M41.751,73.3c5.8,0,9.951-2.45,12.2-7.15L53.2,72.5h6.7V54.8H40.5v5.65H52.4c-0.6,4.05-5.25,7.2-10.6,7.2-6.65,0-10.751-4.85-10.751-12.651s4.05-12.6,10.7-12.6c5.7,0,9.7,3.55,10,8.85l6.95-.5c-0.25-7.9-7.6-14-16.9-14-10.3,0-17.651,7.551-17.651,18.2S31.551,73.3,41.751,73.3Zm24.2-.8H89.1V66.85H72.851V37.5h-6.9v35Zm27.1,0h23.4V66.85h-16.5v-9.7h13.5V51.5h-13.5v-8.35h16.5V37.5H93.05v35Zm29,0H129V48.049L144.4,72.5h7.45v-35H144.9V61.949L129.5,37.5H122.05v35Zm36.6,0H165.6V48.049L181,72.5h7.45v-35H181.5V61.949L166.1,37.5H158.65v35ZM211.4,73.3c5.8,0,9.951-2.45,12.2-7.15l-0.75,6.35h6.7V54.8h-19.4v5.65h11.9c-0.6,4.05-5.25,7.2-10.6,7.2C204.8,67.65,200.7,62.8,200.7,55s4.05-12.6,10.7-12.6c5.7,0,9.7,3.55,10,8.85l6.95-.5c-0.25-7.9-7.6-14-16.9-14-10.3,0-17.651,7.551-17.651,18.2S201.2,73.3,211.4,73.3Zm22.1-.8h7l3.3-9.8h12.9l3.25,9.8h7l-11.7-35H245.2Zm12.2-15.451,4.55-13.6,4.551,13.6h-9.1ZM283.151,73.3c7.651,0,13.4-4.6,13.4-10.7,0-11.2-18.951-9.451-18.951-16.3,0-2.45,2.4-3.95,5.15-3.95,2.85,0,5.55,1.65,6,4.6l6.9-.5c-0.55-6.4-6.6-9.751-12.9-9.751-6.9,0-12.051,4-12.051,10.151,0,11.8,18.952,9.251,18.952,16.4,0,2.95-3.2,4.4-6.2,4.4-4.75,0-7.75-3.6-7.75-8.3l-6.951.5C268.75,67.95,274.951,73.3,283.151,73.3Zm18.3-.8h6.9V49.2l9,23.3h5.1l9-23.3V72.5h6.9v-35h-9L319.9,62.4l-9.5-24.9H301.45v35Zm43.7,0h6.9v-35h-6.9v35Zm13.7,0H365.8V48.049L381.2,72.5h7.45v-35H381.7V61.949L366.3,37.5H358.85v35Z" transform="translate(-24.156 -36.688)" fill="#f3e5ab"></path> </svg> </div> <div class="px-8 2xl:max-w-7xl mx-auto pb-12"> <div class="mt-6 space-y-2"> <div class="h-0.5 bg-secondary" data-aos="fade-up" data-aos-duration="1000"></div> <div class="flex flex-col sm:flex-row gap-3 justify-between items-center" data-aos="fade-up" data-aos-duration="1000"> <div class="flex gap-3 items-center"> <h3 class="text-secondary text-m font-medium"> <span>filmmaker</span> <span class="font-bold">EDITOR</span> <span class="italic">friend</span> </h3> <span class="h-auto border-secondary border"></span> <span class="text-secondary text-m font-semibold">Available for work</span> </div> <div> <ul class="items-center inline-flex gap-3 relative"> <li> <a href="https://www.instagram.com/_glennjamin/" class="hover:text-secondary/80 text-secondary"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentcolor"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentcolor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="currentcolor"></path> </svg> </a> </li><li> <a href="https://vimeo.com/732283044" class="hover:text-secondary/80 text-secondary"><svg fill="currentcolor" viewBox="0 0 28 24" height="64" width="64" xmlns="http://www.w3.org/2000/svg"><path d="m27.727 5.561q-.17 4.022-5.658 11.094-5.675 7.345-9.578 7.345-2.42 0-4.09-4.48-.75-2.726-2.25-8.214-1.227-4.465-2.675-4.465c-.828.346-1.542.782-2.179 1.307l.015-.012-1.313-1.672q.409-.358 1.84-1.645t2.215-1.968q2.658-2.352 4.107-2.488c.127-.019.273-.03.422-.03.867 0 1.646.376 2.183.973l.002.003c.744.96 1.241 2.145 1.377 3.438l.003.03q.75 4.891 1.125 6.357.938 4.24 2.045 4.24.869 0 2.625-2.744c.867-1.187 1.513-2.594 1.844-4.119l.013-.073q.222-2.369-1.858-2.369c-.748.014-1.455.176-2.098.457l.035-.014q2.045-6.698 7.822-6.51 4.278.139 4.023 5.558z"></path></svg></a> </li><li> <a href="mailto:glennjamin.edits@gmail.com" class="hover:text-secondary/80 text-secondary"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="64" width="64"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" fill="currentColor"></path></svg></a> </li> </ul> </div> </div> <div class="h-0.5 bg-secondary" data-aos="fade-up" data-aos-duration="1000"></div> <div class="flex w-full"></div> </div> </div> </section>`;
}, "C:/Users/Glennjamin/Documents/_GGAstroSite/afraid-atmosphere/src/components/landing/Hero.astro", void 0);

const instagram = {
  url: "https://www.instagram.com/_glennjamin/",
  description: "@_glennjamin",
  title: "Instagram"
};
const vimeo = {
  url: "https://vimeo.com/732283044",
  description: "",
  title: "Vimeo"
};
const email = {
  url: "mailto:glennjamin.edits@gmail.com",
  description: "glennjamin.edits@gmail.com",
  title: "Email"
};
const byName = {
  instagram,
  vimeo,
  email
};
const otherprojects = Object.values(byName);

const $$Astro$2 = createAstro("http://glenngasm.in");
const $$Body = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Body;
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary"> <div class="px-8 2xl:max-w-7xl mx-auto py-4"> <div class="grid grid-cols-1 lg:grid-cols-4 text-secondary gap-6"> <h3 class="text-secondary text-xl font-medium" data-aos="fade-up" data-aos-duration="1000"> <span class="font-bold">Who?</span> </h3> <p class="text-xl lg:col-start-2 leading-relaxed" data-aos="fade-up" data-aos-duration="800">
I'm an editor and filmmaker based in Los Angeles. I like to tell stories, sometimes by
        putting pictures and sounds next to each other. Please reach out if you want to
        hire me for that sort of thing.
</p> </div> </div> <div class="px-8 2xl:max-w-7xl mx-auto py-32"> <div class="space-y-2"> <div class="h-0.5 bg-secondary" data-aos="fade-up" data-aos-duration="1000"></div> <h3 class="text-secondary text-xl font-medium" data-aos="fade-up" data-aos-duration="1000"> <span class="font-bold">What?</span> </h3> </div> <ul class="mx-auto grid grid-cols-1 sm:grid-cols-2 text-secondary md:grid-cols-3 lg:grid-cols-4 items-start gap-4 mt-16" role="list"> <li class="flow-root h-full" data-aos="fade-up" data-aos-duration="600"> <a href=""> <div class="h-full flex flex-col justify-between"> <div> <img src="../img/gic.png" alt="Grifting in Circles"> <p class="shrink-0">Grifting in Circles</p> <p class="text-xs mt-3 leading-relaxed">
[Pulling up in 2024].
</p> </div> <div> <p class="mt-3 text-xs font-semibold">
Director: Luke Lace ↗
</p> </div> </div> </a> </li> <li class="flow-root h-full" data-aos="fade-up" data-aos-duration="700"> <a href=""> <div class="h-full flex flex-col justify-between"> <div> <img src="../img/fidel.png" alt="Fidel"> <p class="shrink-0">Fidel</p> <p class="text-xs mt-3 leading-relaxed">
A young Filipino man learns to be the caregiver of his abusive grandmother, only to be mistaken as her old lover.
</p> </div> <div> <p class="mt-3 text-xs font-semibold">
Director: Luke Lace ↗
</p> </div> </div> </a> </li> <li class="flow-root h-full" data-aos="fade-up" data-aos-duration="800"> <a href="https://vimeo.com/271390316/"> <div class="h-full flex flex-col justify-between"> <div> <img src="../img/pof.png" alt="A Pursuit of Falling"> <p class="shrink-0">A Pursuit of Falling</p> <p class="text-xs mt-3 leading-relaxed">
Relationships can be a tough cycle.
</p> </div> <div> <p class="mt-3 text-xs font-semibold">
Director: Sean Brandt ↗
</p> </div> </div> </a> </li> <li class="flow-root h-full" data-aos="fade-up" data-aos-duration="900"> <a href="https://vimeo.com/732283044/"> <div class="h-full flex flex-col justify-between"> <div> <img src="../img/reel.png" alt="CASETiFY Spot"> <p class="shrink-0">Reel </p> <p class="text-xs mt-3 leading-relaxed">
A collection of my recent body of work.
</p> </div> <div> <p class="mt-3 text-xs font-semibold">
Watch on Vimeo ↗
</p> </div> </div> </a> </li> </ul> <div class="mt-16 space-y-2"> <div class="h-0.5 bg-secondary"></div> <h3 class="text-secondary text-xl font-medium"> <span class="font-bold">Where?</span> </h3> </div> <ul class="mx-auto grid grid-cols-1 sm:grid-cols-2 text-left divide-y-2 divide-primary lg:grid-cols-4 items-start text-primary mt-3"> ${otherprojects.map((template) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <li class="flow-root col-span-full h-full hover:bg-transparent hover:text-secondary bg-secondary duration-200"> <a${addAttribute(template.url, "href")} class="flex flex-col sm:flex-row justify-between gap-6 h-full "> <div class="p-3"> <p class="italic shrink-0">${template.title}</p> </div> <div class="p-3 "> <p class="text-xs leading-relaxed">${template.description}</p> </div> </a> </li> ` })}`)} </ul> </div> </section>`;
}, "C:/Users/Glennjamin/Documents/_GGAstroSite/afraid-atmosphere/src/components/landing/Body.astro", void 0);

const defaults = {
  templateTitle: "",
  noindex: false,
  nofollow: false,
  defaultOpenGraphImageWidth: 0,
  defaultOpenGraphImageHeight: 0,
  defaultOpenGraphVideoWidth: 0,
  defaultOpenGraphVideoHeight: 0
};
const buildOpenGraphMediaTags = (mediaType, media = [], { defaultWidth, defaultHeight } = {}) => {
  return media.reduce((tags, medium, index) => {
    tags.push(`<meta property="og:${mediaType}" content="${medium.url}" />`);
    if (medium.alt) {
      tags.push(`<meta property="og:${mediaType}:alt" content="${medium.alt}" />`);
    }
    if (medium.secureUrl) {
      tags.push(`<meta property="og:${mediaType}:secure_url" content="${medium.secureUrl.toString()}" />`);
    }
    if (medium.type) {
      tags.push(`<meta property="og:${mediaType}:type" content="${medium.type.toString()}" />`);
    }
    if (medium.width) {
      tags.push(`<meta property="og:${mediaType}:width" content="${medium.width.toString()}" />`);
    } else if (defaultWidth) {
      tags.push(`<meta property="og:${mediaType}:width" content="${defaultWidth.toString()}" />`);
    }
    if (medium.height) {
      tags.push(`<meta property="og:${mediaType}:height" content="${medium.height.toString()}" />`);
    } else if (defaultHeight) {
      tags.push(`<meta property="og:${mediaType}:height" content="${defaultHeight.toString()}" />`);
    }
    return tags;
  }, []);
};
const buildTags = (config) => {
  const tagsToRender = [];
  if (config.titleTemplate) {
    defaults.templateTitle = config.titleTemplate;
  }
  let updatedTitle = "";
  if (config.title) {
    updatedTitle = config.title;
    if (defaults.templateTitle) {
      updatedTitle = defaults.templateTitle.replace(/%s/g, () => updatedTitle);
    }
  } else if (config.defaultTitle) {
    updatedTitle = config.defaultTitle;
  }
  if (updatedTitle) {
    tagsToRender.push(`<title>${escape(updatedTitle)}</title>`);
  }
  const noindex = config.noindex || defaults.noindex || config.dangerouslySetAllPagesToNoIndex;
  const nofollow = config.nofollow || defaults.nofollow || config.dangerouslySetAllPagesToNoFollow;
  let robotsParams = "";
  if (config.robotsProps) {
    const {
      nosnippet,
      maxSnippet,
      maxImagePreview,
      maxVideoPreview,
      noarchive,
      noimageindex,
      notranslate,
      unavailableAfter
    } = config.robotsProps;
    robotsParams = `${nosnippet ? ",nosnippet" : ""}${maxSnippet ? `,max-snippet:${maxSnippet}` : ""}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ""}${noarchive ? ",noarchive" : ""}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ""}${noimageindex ? ",noimageindex" : ""}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ""}${notranslate ? ",notranslate" : ""}`;
  }
  if (noindex || nofollow) {
    if (config.dangerouslySetAllPagesToNoIndex) {
      defaults.noindex = true;
    }
    if (config.dangerouslySetAllPagesToNoFollow) {
      defaults.nofollow = true;
    }
    tagsToRender.push(
      `<meta name="robots" content="${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}${robotsParams}" />`
    );
  } else {
    tagsToRender.push(`<meta name="robots" content="index,follow${robotsParams}" />`);
  }
  if (config.description) {
    tagsToRender.push(`<meta name="description" content="${escape(config.description)}" />`);
  }
  if (config.mobileAlternate) {
    tagsToRender.push(
      `<link rel="alternate" media="${config.mobileAlternate.media}" href="${config.mobileAlternate.href}" />`
    );
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      tagsToRender.push(
        `<link rel="alternate" hrefLang="${languageAlternate.hrefLang}" href="${languageAlternate.href}" />`
      );
    });
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      tagsToRender.push(`<meta name="twitter:card" content="${config.twitter.cardType}" />`);
    }
    if (config.twitter.site) {
      tagsToRender.push(`<meta name="twitter:site" content="${config.twitter.site}" />`);
    }
    if (config.twitter.handle) {
      tagsToRender.push(`<meta name="twitter:creator" content="${config.twitter.handle}" />`);
    }
  }
  if (config.facebook) {
    if (config.facebook.appId) {
      tagsToRender.push(`<meta property="fb:app_id" content="${config.facebook.appId}" />`);
    }
  }
  if (config.openGraph?.title || updatedTitle) {
    tagsToRender.push(`<meta property="og:title" content="${escape(config.openGraph?.title || updatedTitle)}" />`);
  }
  if (config.openGraph?.description || config.description) {
    tagsToRender.push(
      `<meta property="og:description" content="${escape(config.openGraph?.description || config.description)}" />`
    );
  }
  if (config.openGraph) {
    if (config.openGraph.url || config.canonical) {
      tagsToRender.push(`<meta property="og:url" content="${config.openGraph.url || config.canonical}" />`);
    }
    if (config.openGraph.type) {
      const type = config.openGraph.type.toLowerCase();
      tagsToRender.push(`<meta property="og:type" content="${type}" />`);
      if (type === "profile" && config.openGraph.profile) {
        if (config.openGraph.profile.firstName) {
          tagsToRender.push(`<meta property="profile:first_name" content="${config.openGraph.profile.firstName}" />`);
        }
        if (config.openGraph.profile.lastName) {
          tagsToRender.push(`<meta property="profile:last_name" content="${config.openGraph.profile.lastName}" />`);
        }
        if (config.openGraph.profile.username) {
          tagsToRender.push(`<meta property="profile:username" content="${config.openGraph.profile.username}" />`);
        }
        if (config.openGraph.profile.gender) {
          tagsToRender.push(`<meta property="profile:gender" content="${config.openGraph.profile.gender}" />`);
        }
      } else if (type === "book" && config.openGraph.book) {
        if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
          config.openGraph.book.authors.forEach((author, index) => {
            tagsToRender.push(`<meta property="book:author" content="${author}" />`);
          });
        }
        if (config.openGraph.book.isbn) {
          tagsToRender.push(`<meta property="book:isbn" content="${config.openGraph.book.isbn}" />`);
        }
        if (config.openGraph.book.releaseDate) {
          tagsToRender.push(`<meta property="book:release_date" content="${config.openGraph.book.releaseDate}" />`);
        }
        if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
          config.openGraph.book.tags.forEach((tag, index) => {
            tagsToRender.push(`<meta property="book:tag" content="${tag}" />`);
          });
        }
      } else if (type === "article" && config.openGraph.article) {
        if (config.openGraph.article.publishedTime) {
          tagsToRender.push(
            `<meta property="article:published_time" content="${config.openGraph.article.publishedTime}" />`
          );
        }
        if (config.openGraph.article.modifiedTime) {
          tagsToRender.push(
            `<meta property="article:modified_time" content="${config.openGraph.article.modifiedTime}" />`
          );
        }
        if (config.openGraph.article.expirationTime) {
          tagsToRender.push(
            `<meta property="article:expiration_time" content="${config.openGraph.article.expirationTime}" />`
          );
        }
        if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
          config.openGraph.article.authors.forEach((author, index) => {
            tagsToRender.push(`<meta property="article:author" content="${author}" />`);
          });
        }
        if (config.openGraph.article.section) {
          tagsToRender.push(`<meta property="article:section" content="${config.openGraph.article.section}" />`);
        }
        if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
          config.openGraph.article.tags.forEach((tag, index) => {
            tagsToRender.push(`<meta property="article:tag" content="${tag}" />`);
          });
        }
      } else if ((type === "video.movie" || type === "video.episode" || type === "video.tv_show" || type === "video.other") && config.openGraph.video) {
        if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
          config.openGraph.video.actors.forEach((actor, index) => {
            if (actor.profile) {
              tagsToRender.push(`<meta property="video:actor" content="${actor.profile}" />`);
            }
            if (actor.role) {
              tagsToRender.push(`<meta property="video:actor:role" content="${actor.role}" />`);
            }
          });
        }
        if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
          config.openGraph.video.directors.forEach((director, index) => {
            tagsToRender.push(`<meta property="video:director" content="${director}" />`);
          });
        }
        if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
          config.openGraph.video.writers.forEach((writer, index) => {
            tagsToRender.push(`<meta property="video:writer" content="${writer}" />`);
          });
        }
        if (config.openGraph.video.duration) {
          tagsToRender.push(
            `<meta property="video:duration" content="${config.openGraph.video.duration.toString()}" />`
          );
        }
        if (config.openGraph.video.releaseDate) {
          tagsToRender.push(`<meta property="video:release_date" content="${config.openGraph.video.releaseDate}" />`);
        }
        if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
          config.openGraph.video.tags.forEach((tag, index) => {
            tagsToRender.push(`<meta property="video:tag" content="${tag}" />`);
          });
        }
        if (config.openGraph.video.series) {
          tagsToRender.push(`<meta property="video:series" content="${config.openGraph.video.series}" />`);
        }
      }
    }
    if (config.defaultOpenGraphImageWidth) {
      defaults.defaultOpenGraphImageWidth = config.defaultOpenGraphImageWidth;
    }
    if (config.defaultOpenGraphImageHeight) {
      defaults.defaultOpenGraphImageHeight = config.defaultOpenGraphImageHeight;
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      tagsToRender.push(
        ...buildOpenGraphMediaTags("image", config.openGraph.images, {
          defaultWidth: defaults.defaultOpenGraphImageWidth,
          defaultHeight: defaults.defaultOpenGraphImageHeight
        })
      );
    }
    if (config.defaultOpenGraphVideoWidth) {
      defaults.defaultOpenGraphVideoWidth = config.defaultOpenGraphVideoWidth;
    }
    if (config.defaultOpenGraphVideoHeight) {
      defaults.defaultOpenGraphVideoHeight = config.defaultOpenGraphVideoHeight;
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      tagsToRender.push(
        ...buildOpenGraphMediaTags("video", config.openGraph.videos, {
          defaultWidth: defaults.defaultOpenGraphVideoWidth,
          defaultHeight: defaults.defaultOpenGraphVideoHeight
        })
      );
    }
    if (config.openGraph.locale) {
      tagsToRender.push(`<meta property="og:locale" content="${config.openGraph.locale}" />`);
    }
    if (config.openGraph.site_name) {
      tagsToRender.push(`<meta property="og:site_name" content="${config.openGraph.site_name}" />`);
    }
  }
  if (config.canonical) {
    tagsToRender.push(`<link rel="canonical" href="${config.canonical}" />`);
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((tag) => {
      tagsToRender.push(
        `<meta key="meta:${tag.keyOverride ?? tag.name ?? tag.property ?? tag.httpEquiv}" ${Object.keys(tag).map((key) => `${key}="${tag[key]}"`).join(" ")} />`
      );
    });
  }
  if (config.additionalLinkTags?.length) {
    config.additionalLinkTags.forEach((tag) => {
      tagsToRender.push(
        `<link key="link${tag.keyOverride ?? tag.href}${tag.rel}" ${Object.keys(tag).map((key) => `${key}="${tag[key]}"`).join(" ")} />`
      );
    });
  }
  return tagsToRender ? tagsToRender.join("\n") : "";
};

const $$Astro$1 = createAstro("http://glenngasm.in");
const $$AstroSeo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    noindex = false,
    nofollow,
    robotsProps,
    description,
    canonical,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    titleTemplate,
    defaultTitle,
    mobileAlternate,
    languageAlternates,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    facebook,
    openGraph,
    additionalMetaTags,
    twitter,
    titleTemplate,
    defaultTitle,
    mobileAlternate,
    languageAlternates,
    additionalLinkTags
  }))}` })}`;
}, "C:/Users/Glennjamin/Documents/_GGAstroSite/afraid-atmosphere/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

const $$Astro = createAstro("http://glenngasm.in");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!---
Use AstroSeo in all the pages you want different Seo than the index page
-->${renderComponent($$result, "AstroSeo", $$AstroSeo, { "title": "Glenn Gasmin", "description": "Glenn Gasmin website", "canonical": "http://glenngasm.in", "openGraph": {
    url: "https://glenngasmin.com",
    title: "Glenn Gasmin website",
    description: "Glenn's website",
    site_name: "Glenn Gasmin website"
  } })} ${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Body", $$Body, {})} ` })}`;
}, "C:/Users/Glennjamin/Documents/_GGAstroSite/afraid-atmosphere/src/pages/index.astro", void 0);

const $$file = "C:/Users/Glennjamin/Documents/_GGAstroSite/afraid-atmosphere/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
