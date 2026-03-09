import {
  Instagram,
  Music2,
  Linkedin,
  Facebook,
  Youtube,
  Twitch,
  Twitter
} from "lucide-react";
import type { ComponentType } from "react";
import { siteConfig, type SocialPlatform } from "@/content/site.config";
import { ExternalLink } from "@/components/external-link";

const iconMap: Record<SocialPlatform, ComponentType<{ className?: string }>> = {
  Instagram,
  TikTok: Music2,
  LinkedIn: Linkedin,
  Facebook,
  YouTube: Youtube,
  Twitch,
  X: Twitter
};

type SocialIconsProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialIcons({ className, iconClassName }: SocialIconsProps) {
  return (
    <div className={className}>
      {siteConfig.socialLinks.map((social) => {
        const Icon = iconMap[social.platform];

        return (
          <ExternalLink
            key={social.platform}
            href={social.url}
            ariaLabel={`${social.platform} ${social.handle}`}
            className="rounded-full border border-border bg-surface-2/60 p-2 text-stone transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            <Icon className={iconClassName ?? "h-4 w-4"} />
          </ExternalLink>
        );
      })}
    </div>
  );
}
