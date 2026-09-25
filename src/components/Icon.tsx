import React from "react";
import { AwardIcon, BoxesIcon, CheckIcon, ClipboardListIcon, FileTextIcon, HammerIcon, HeadsetIcon, LayersIcon, PackageIcon, ShieldCheckIcon, SprayCanIcon, TagIcon, TruckIcon, WavesIcon, WrenchIcon, ZapIcon, BoxIcon } from "lucide-react";
const map: Record<string, BoxIcon> = {
  award: AwardIcon,
  boxes: BoxesIcon,
  check: CheckIcon,
  'clipboard-list': ClipboardListIcon,
  'file-text': FileTextIcon,
  hammer: HammerIcon,
  headset: HeadsetIcon,
  layers: LayersIcon,
  package: PackageIcon,
  pipe: WavesIcon,
  shield: ShieldCheckIcon,
  spray: SprayCanIcon,
  tag: TagIcon,
  truck: TruckIcon,
  wrench: WrenchIcon,
  zap: ZapIcon
};
interface IconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}
export function Icon({
  name,
  className,
  strokeWidth = 1.75
}: IconProps) {
  const Cmp = map[name] ?? BoxesIcon;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}