"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import {
	type UseTranslationOptions,
	initReactI18next,
	useTranslation as useTranslationOrg,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages, cookieName } from "./settings";

const runsOnServerSide = typeof window === "undefined";

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(
		resourcesToBackend(
			(language: string, namespace: string) =>
				import(`./locales/${language}/${namespace}.json`),
		),
	)
	.init({
		...getOptions(),
		lng: undefined, // let detect the language on client side
		detection: {
			order: ["path", "htmlTag", "cookie", "navigator"],
		},
		preload: runsOnServerSide ? languages : [],
	})
	.then((value) => {
		return value;
	})
	.catch((error) => {
		console.log("Error while intializing i18n.\n", error);
	});

export function useTranslation(
	lang: string,
	ns: string,
	options: UseTranslationOptions<undefined> | undefined,
) {
	const [cookies, setCookie] = useCookies([cookieName]);
	const ret = useTranslationOrg(ns, options);
	const { i18n } = ret;

	if (runsOnServerSide && lang && i18n.resolvedLanguage !== lang) {
		i18n
			.changeLanguage(lang)
			.then((value) => {
				return value;
			})
			.catch((error) => {
				console.log("Error while changing the language.\n", error);
			});
		return ret;
	}

	const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

	useEffect(() => {
		if (activeLng === i18n.resolvedLanguage) return;
		setActiveLng(i18n.resolvedLanguage);
	}, [activeLng, i18n.resolvedLanguage]);

	useEffect(() => {
		if (!lang || i18n.resolvedLanguage === lang) return;
		i18n
			.changeLanguage(lang)
			.then((value) => {
				return value;
			})
			.catch((error) => {
				console.log("Error while changing the language.\n", error);
			});
	}, [lang, i18n]);

	useEffect(() => {
		if (cookies.i18next === lang) return;
		setCookie(cookieName, lang, { path: "/" });
	}, [lang, cookies.i18next, setCookie]);

	return ret;
}
