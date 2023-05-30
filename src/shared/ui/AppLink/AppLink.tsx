import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "shared/helpers";
import styles from "./AppLink.module.scss";

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
    className?: string;
    children: ReactNode;
}

export function AppLink({ className, children, theme = AppLinkTheme.PRIMARY, ...linkProps }: AppLinkProps) {
    return <Link className={classNames(styles.appLink, {}, [className, styles[theme]])} {...linkProps}>{children}</Link>;
}