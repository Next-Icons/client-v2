"use client";

import { OutfitLight, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import { NAVBAR_LINKS, PACKAGE_VERSION_URL } from "@/lib/constants";

import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

// TODO: Make the glass effect look better

const NavbarExport: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	React.useEffect(() => {
		if (isMobileMenuOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";

		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobileMenuOpen]);

	return (
		<>
			<nav
				aria-label="Main navigation"
				className="fixed top-0 right-0 left-0 z-60 bg-transparent py-6 backdrop-blur-xl"
			>
				<div className="mx-auto max-w-7xl px-4 2xl:px-0">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3.5">
							<Link
								href={"/"}
								className="group flex items-center gap-2.5 transition-transform duration-400 hover:scale-105"
							>
								<Image
									src={"/Logo-Symbol.png"}
									alt="Go back to homepage"
									width={40}
									height={40}
									priority
									draggable={false}
								/>

								<h1
									className={`${OutfitSemiBold.className} tracking-none text-center text-3xl leading-none text-[#FFFFFF]`}
								>
									Next Icons
								</h1>
							</Link>

							<Link href={PACKAGE_VERSION_URL} target="_blank">
								<span
									className={`text-[#FFFFFF] ${OutfitRegular.className} rounded-full bg-[#A855F7]/10 px-3 py-1 text-xs tracking-wide transition-colors duration-400 hover:bg-[#A855F7]/20`}
								>
									v0.1.9
								</span>
							</Link>
						</div>

						<div className="hidden items-center md:flex">
							<ul className="flex items-center gap-10" aria-label="Navigation links">
								{NAVBAR_LINKS.map((link, index) => (
									<motion.li
										key={link.label}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.15 * index, duration: 0.35, ease: "easeOut" }}
									>
										<Link
											href={link.href}
											aria-label={`Go to ${link.label}`}
											className={`${OutfitLight.className} group relative text-base tracking-wide text-[#FFFFFF] transition-colors duration-400 hover:text-[#A855F7]`}
										>
											{link.label}

											<span className="absolute -bottom-1 left-0 h-px w-0 bg-linear-to-r from-[#A855F7] to-transparent transition-all duration-400 ease-out group-hover:w-full" />
										</Link>
									</motion.li>
								))}
							</ul>
						</div>

						<motion.button
							aria-label={`${isMobileMenuOpen ? "Close menu" : "Open menu"}`}
							aria-expanded={isMobileMenuOpen}
							aria-controls="mobile-menu"
							className="relative z-60 flex h-10 w-10 items-center justify-center md:hidden"
							onClick={() => setIsMobileMenuOpen((v) => !v)}
							animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
						>
							<span
								aria-hidden="true"
								className={`absolute top-1/2 left-1/2 block h-px w-8 -translate-x-1/2 transform bg-[#FFFFFF] transition duration-400 ease-in-out ${isMobileMenuOpen ? "rotate-45" : "-translate-y-2"}`}
							/>
							<span
								aria-hidden="true"
								className={`absolute top-1/2 left-1/2 block h-px w-8 -translate-x-1/2 transform bg-[#FFFFFF] transition duration-400 ease-in-out ${isMobileMenuOpen ? "opacity-0" : ""}`}
							/>
							<span
								aria-hidden="true"
								className={`absolute top-1/2 left-1/2 block h-px w-8 -translate-x-1/2 transform bg-[#FFFFFF] transition duration-400 ease-in-out ${isMobileMenuOpen ? "-rotate-45" : "translate-y-2"}`}
							/>
						</motion.button>
					</div>
				</div>
			</nav>

			<AnimatePresence mode="wait">
				{isMobileMenuOpen && (
					<>
						<motion.div
							role="dialog"
							aria-modal="true"
							id="mobile-menu"
							initial={{ x: "100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "100%", opacity: 0 }}
							transition={{ type: "spring", stiffness: 120, damping: 20 }}
							className="fixed top-[88px] right-0 bottom-0 left-0 z-50 w-full bg-transparent backdrop-blur-xl md:hidden"
						>
							<div className="flex h-full flex-col">
								<nav className="flex-1 overflow-y-auto px-4 py-6">
									<ul className="space-y-2" aria-label="Navigation links">
										{NAVBAR_LINKS.map((link, index) => (
											<li key={link.href}>
												<Link
													href={link?.href}
													aria-label={`Go to ${link?.label}`}
													onClick={() => setIsMobileMenuOpen(false)}
													className="group flex items-center"
												>
													<motion.div
														initial={{ width: 0 }}
														animate={{ width: "15%" }}
														transition={{
															delay: 0.4 + 0.1 * index,
															duration: 0.4,
															ease: "easeOut",
														}}
														className="h-px rounded-full bg-linear-to-r from-transparent to-[#FFFFFF]"
													/>

													<motion.span
														initial={{ opacity: 0, x: 10 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{
															delay: 0.45 + 0.1 * index,
															duration: 0.35,
															ease: "easeOut",
														}}
														className={`${OutfitLight.className} block px-4 py-3 text-lg text-[#FFFFFF] uppercase`}
													>
														{link?.label}
													</motion.span>
												</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default NavbarExport;
