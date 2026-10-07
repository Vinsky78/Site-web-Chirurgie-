import { getTranslations } from "next-intl/server";
import { signOutAction } from "@/lib/auth/actions";
import { buttonClasses } from "@/components/ui/button";

export async function SignOutButton() {
  const t = await getTranslations("pro");
  return (
    <form action={signOutAction}>
      <button type="submit" className={buttonClasses("secondary")}>
        {t("signOut")}
      </button>
    </form>
  );
}
