"use client";

// other libraries
import useMediaQuery from "@/hooks/useMediaQuery";

// components
import NavigationMenu from "@/components/ui/custom/navigation-menu";
import { default as NavigationMenuContent } from "@/components/ui/custom/navigation-menu/Content";
import { default as NavigationMenuIndicator } from "@/components/ui/custom/navigation-menu/Indicator";
import { default as NavigationMenuItem } from "@/components/ui/custom/navigation-menu/Item";
import { default as NavigationMenuLink } from "@/components/ui/custom/navigation-menu/Link";
import { default as NavigationMenuList } from "@/components/ui/custom/navigation-menu/List";
import { default as NavigationMenuTrigger } from "@/components/ui/custom/navigation-menu/Trigger";

// assets
import {
  AcademicCapIcon,
  AtSymbolIcon,
  Bars3Icon,
  BookOpenIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChatBubbleBottomCenterIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function Menu() {
  // Large screens
  const isLarge = useMediaQuery("(min-width: 1024px)");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {isLarge ? (
            <NavigationMenuLink href="/" className="flex items-center gap-1">
              <UsersIcon width={24} height={24} className="flex-none" />
              <span className="flex-1">O Nas</span>
            </NavigationMenuLink>
          ) : (
            <NavigationMenuLink href="/">
              <UsersIcon width={36} height={36} title="O Nas" />
            </NavigationMenuLink>
          )}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {isLarge ? (
            <NavigationMenuLink href="/courses" className="flex items-center gap-1">
              <AcademicCapIcon width={24} height={24} className="flex-none" />
              <span className="flex-1">Szkolenia i Kursy</span>
            </NavigationMenuLink>
          ) : (
            <NavigationMenuLink href="/courses">
              <AcademicCapIcon width={36} height={36} title="Szkolenia i Kursy" />
            </NavigationMenuLink>
          )}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {isLarge ? (
            <NavigationMenuLink href="/exams" className="flex items-center gap-1">
              <ClipboardDocumentCheckIcon width={24} height={24} className="flex-none" />
              <span className="flex-1">Egzaminy</span>
            </NavigationMenuLink>
          ) : (
            <NavigationMenuLink href="/exams">
              <ClipboardDocumentCheckIcon width={36} height={36} title="Egzaminy" />
            </NavigationMenuLink>
          )}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {isLarge ? (
            <NavigationMenuTrigger type="button" className="flex items-center gap-1 uppercase">
              <Bars3Icon width={24} height={24} className="flex-none" />
              <span className="flex-1">Więcej</span>
            </NavigationMenuTrigger>
          ) : (
            <NavigationMenuTrigger type="button">
              <Bars3Icon width={36} height={36} title="Więcej" />
            </NavigationMenuTrigger>
          )}
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 text-2xl md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr] lg:text-base">
              <NavigationMenuLink href="/textbooks" className="flex items-center gap-2">
                <BookOpenIcon width={24} height={24} className="size-9 flex-none lg:size-6" />
                <span className="flex-1">Podręczniki</span>
              </NavigationMenuLink>
              <NavigationMenuLink href="/counseling" className="flex items-center gap-2">
                <BriefcaseIcon width={24} height={24} className="size-9 flex-none lg:size-6" />
                <span className="flex-1">Doradztwo Zawodowe</span>
              </NavigationMenuLink>
              <NavigationMenuLink href="/room-rental" className="flex items-center gap-2">
                <BuildingOfficeIcon width={24} height={24} className="size-9 flex-none lg:size-6" />
                <span className="flex-1">Wynajem Sal</span>
              </NavigationMenuLink>
              <NavigationMenuLink href="/blog" className="flex items-center gap-2">
                <ChatBubbleBottomCenterIcon width={24} height={24} className="size-9 flex-none lg:size-6" />
                <span className="flex-1">Blog</span>
              </NavigationMenuLink>
              <NavigationMenuLink href="/contact-us" className="flex items-center gap-2">
                <AtSymbolIcon width={24} height={24} className="size-9 flex-none lg:size-6" />
                <span className="flex-1">Kontakt</span>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
