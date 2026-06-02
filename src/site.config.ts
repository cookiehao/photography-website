/**
 * ============================================================================
 * SITE CONFIGURATION
 * ============================================================================
 * This is the ONLY file you need to edit to customize the site for your own use.
 * All branding, personal info, social links, and site metadata are defined here.
 *
 * After editing this file, restart the dev server to see changes.
 * ============================================================================
 */

import type { ContactCardTitle } from "@/components/contact-card";

export const siteConfig = {
  /** Site name used in metadata, logo, and branding */
  name: "纽扣Niukouu",

  /** Tagline shown alongside name (e.g. "Photo", "Photography") */
  tagline: "Photo",

  /** Your role/title shown in profile cards and footer */
  role: "女摄 · 自然与复古",

  /** Short bio shown on the home page profile card */
  bio: "我是纽扣Niukouu，一名常驻北京的女性摄影师，偏爱自然与复古的视觉表达。习惯用镜头捕捉真实细腻的瞬间，在光影与色彩之间记录情绪与故事。",

  /** Avatar image path (place your avatar in /public/avatar.jpg) */
  avatar: "/avatar.jpg",

  /** Initials used as avatar fallback */
  initials: "Nk",

  /** Site metadata for SEO */
  metadata: {
    title: {
      template: "%s - 纽扣Niukouu Photography",
      default: "纽扣Niukouu Photography",
    },
    description: "纽扣Niukouu Photography",
  },

  /** Social links shown in profile card and footer */
  socialLinks: [
    {
      title: "Instagram",
      href: "https://instagram.com/",
    },
    {
      title: "Xiaohongshu",
      href: "https://xhslink.com/m/7nmSeRewkse",
    },
  ] as { title: ContactCardTitle; href: string; primary?: boolean }[],

  /** Footer attribution */
  footer: {
    designCredit: {
      name: "Pawel Gola",
      href: "https://templates.gola.io/template/hanssen",
    },
    poweredBy: {
      name: "纽扣Niukouu",
      href: "https://xhslink.com/m/7nmSeRewkse",
    },
  },

  /**
   * Mapbox custom style URLs (optional).
   * If not set, Mapbox default styles will be used.
   * Create your own at https://studio.mapbox.com/
   */
  mapbox: {
    lightStyle: "mapbox://styles/ecarry/cldmhu6tr000001n33ujbxf7j",
    darkStyle: "mapbox://styles/ecarry/clp8hcmd300km01qx78rt0xaw",
  },

  /**
   * Image loader configuration.
   * Set to "cloudflare" to use the Cloudflare custom image loader,
   * or "default" to use Next.js built-in image optimization.
   */
  imageLoader: "cloudflare" as "cloudflare" | "default",

  /**
   * Gear / equipment shown on the About page.
   * Each item has a brand and model name.
   */
  gear: [
    { brand: "SONY", model: "Alpha 7RⅡ" },
    { brand: "DJI", model: "Air 2S" },
    { brand: "Tamron", model: "50-400mm F/4.5-6.3 Di III VC VXD" },
    { brand: "Sigma", model: "35mm F/1.4 DG HSM" },
    { brand: "Viltrox", model: "AF 40mm F/2.5 FE" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
