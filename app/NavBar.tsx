"use client";
import { Box, Container, Flex } from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBugFill } from "react-icons/bs";

const NavBar = () => {
  const { status, data: session } = useSession();
  const pathName = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className="border-b px-5 mb-5 py-5">
      <Container>
        <Flex justify="between">
          <Flex align="center" gapX="3">
            <Link href="/">
              <BsBugFill />
            </Link>
            <ul className="flex space-x-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={classNames({
                    "text-zinc-900": pathName === link.href,
                    "text-zinc-500": pathName !== link.href,
                    "hover:text-zinc-800 transition-colors": true,
                  })}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </Flex>
          <Box>
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Sign In</Link>
            )}
            {status === "authenticated" && (
              <Link href="/api/auth/signout">Sign Out</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
