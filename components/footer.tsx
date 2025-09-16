import React from "react";
import Container from "./container";
import Divider from "./divider";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="">
            <Container className="text-muted-foreground text-center text-sm">
                Built by{" "}
                <Link
                    href={"https://x.com/surojitghosh_"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4"
                >
                    Surojit
                </Link>
                . The source code is available on{" "}
                <Link
                    href={"https://github.com/surojit-ghosh/surojit.in"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4"
                >
                    GitHub
                </Link>
                .
            </Container>
            <Divider className="mb-2" />
        </footer>
    );
};

export default Footer;
