import { useRouteContext } from "@tanstack/react-router";
import type { NavOption } from "@/features/theme/contract/layouts";
import { m } from "@/paraglide/messages";

interface FooterProps {
  navOptions: Array<NavOption>;
}

export function Footer(_: FooterProps) {
  const { siteConfig } = useRouteContext({ from: "__root__" });
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="border-t border-black/10 dark:border-white/15 my-10 border-dashed mx-4 md:mx-32" />
      <div className="border-dashed border-black/10 dark:border-white/15 rounded-2xl mb-12 flex flex-col items-center justify-center px-6 py-8">
        <div className="fuwari-text-50 text-sm text-center">
          {m.footer_copyright({
            year: currentYear.toString(),
            author: siteConfig.author,
          })}
<br />
{m.footer_powered_by()}{" "}
<span className="fuwari-expand-animation rounded-md px-1 m-1 font-medium text-(--fuwari-primary)">
  Tanstack Start
</span>{" "}
&{" "}
<span className="fuwari-expand-animation rounded-md px-1 m-1 font-medium text-(--fuwari-primary)">
  Flare Stack Blog
</span>
        </div>
      </div>
    </>
  );
}
