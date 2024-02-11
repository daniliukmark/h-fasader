import Link from "next/link";
import React, { Fragment } from "react";

import { ChevronRight } from "lucide-react";
import { cn } from "../../../utils/utils";

interface BreadCrumbs {
	lang?: string;
	children?: React.ReactNode;
}

const BreadCrumbs = ({ children }: BreadCrumbs) => {
	const childrenArray = React.Children.toArray(children);
	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol className="inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-2">
				{childrenArray?.map((child, i) => {
					const isLast = i === childrenArray.length - 1;
					return (
						<Fragment key={i}>
							{React.cloneElement(child as React.ReactElement, { isLast })}
							{!isLast ? (
								<ChevronRight className="h-5 w-5 text-neutral-300" />
							) : null}
						</Fragment>
					);
				})}
			</ol>
		</nav>
	);
};

interface BreadCrumbsItem {
	href?: string;
	isLast?: boolean;
	children?: React.ReactNode;
}

const BreadCrumbsItem = ({ href, isLast, children }: BreadCrumbsItem) => {
	return (
		<li className="inline-flex items-center">
			<Link
				href={!isLast && href ? href : ""}
				className={cn(
					"inline-flex items-center text-sm font-medium text-neutral-500",
					!isLast && "hover:text-neutral-800",
				)}
			>
				{children}
			</Link>
		</li>
	);
};

BreadCrumbs.Item = BreadCrumbsItem;

export default BreadCrumbs;
