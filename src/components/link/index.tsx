import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
type LinkProps = {
  children: React.ReactNode;
  href: string;
};

export const Link = ({ children, href }: LinkProps) => (
  <NextLink href={href} passHref>
    <ChakraLink color="red.500">{children}</ChakraLink>
  </NextLink>
);
