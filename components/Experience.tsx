const bulletDot = "mt-[0.55rem] h-1.5 w-1.5 rounded-full bg-zinc-900 shrink-0";
const bulletText = "m-0 text-zinc-700 leading-relaxed text-[15px] sm:text-base";
const bulletStrong = "font-semibold text-zinc-900";

export default function Experience() {
    return (
        <section id="experience" className="py-28 border-t border-zinc-200">
            <div className="mb-12">
                <div className="inline-flex items-center gap-3">
                    <span className="inline-block h-2 w-10 rounded-full bg-zinc-900" />
                    <h2
                        className="font-black uppercase tracking-[0.28em] text-zinc-900 text-3xl sm:text-4xl"
                        style={{
                            fontFamily:
                                "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial",
                        }}
                    >
                        EXPERIENCE
                    </h2>
                </div>

                <p className="mt-4 max-w-2xl text-lg text-black-700 leading-relaxed">
                    A summary of my professional experiences and the skills I’ve developed
                    through part-time work, academics, and projects!
                </p>
            </div>

            <div className="space-y-14 max-w-4xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                        <div className="flex items-center gap-3">
                            <img
                                src="/canadas-wonderland.png"
                                alt="Canada's Wonderland"
                                className="h-6 w-6 rounded-md object-contain opacity-80"
                            />
                            <h3 className="text-xl font-semibold text-zinc-900">
                                Food &amp; Beverage Service Associate ·{" "}
                                <a
                                    href="https://www.sixflags.com/canadaswonderland"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline cursor-pointer"
                                >
                                    Canada's Wonderland
                                </a>
                            </h3>
                        </div>

                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Executed{" "}
                                    <strong className={bulletStrong}>
                                        300+ high-volume financial transactions per shift
                                    </strong>{" "}
                                    using <strong className={bulletStrong}>Oracle POS</strong> systems,
                                    maintaining{" "}
                                    <strong className={bulletStrong}>
                                        95–99% transaction accuracy
                                    </strong>{" "}
                                    and{" "}
                                    <strong className={bulletStrong}>
                                        audit-level accountability
                                    </strong>{" "}
                                    during peak operating hours.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Coordinated{" "}
                                    <strong className={bulletStrong}>
                                        unit and team operations
                                    </strong>{" "}
                                    across{" "}
                                    <strong className={bulletStrong}>
                                        5–10 associates
                                    </strong>{" "}
                                    per shift, resolving real-time operational issues to maintain{" "}
                                    <strong className={bulletStrong}>
                                        continuous workflow
                                    </strong>{" "}
                                    and{" "}
                                    <strong className={bulletStrong}>
                                        minimize service delays
                                    </strong>{" "}
                                    during peak periods.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Led{" "}
                                    <strong className={bulletStrong}>
                                        team operations
                                    </strong>{" "}
                                    by prioritizing associate responsibilities and adapting workflows in real
                                    time, supporting{" "}
                                    <strong className={bulletStrong}>
                                        efficient front-line operations
                                    </strong>{" "}
                                    for{" "}
                                    <strong className={bulletStrong}>
                                        hundreds of guests per shift
                                    </strong>{" "}
                                    in a fast-paced environment.
                                </p>
                            </li>
                        </ul>

                    </div>

                    <span className="text-sm font-semibold text-zinc-500 sm:whitespace-nowrap">
                        Mar. 2023 - Aug. 2025
                    </span>
                </div>

                <div className="border-t border-zinc-200" />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                        <div className="flex items-center gap-3">
                            <img
                                src="/shelter-them.png"
                                alt="Shelter Them"
                                className="h-6 w-6 rounded-md object-contain opacity-80"
                            />
                            <h3 className="text-xl font-semibold text-zinc-900">
                                International Service Project (Rwanda) ·{" "}
                                <a
                                    href="https://shelterthem.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline cursor-pointer"
                                >
                                    Shelter Them Poverty Relief
                                </a>{" "}
                                | Brampton Christian School
                            </h3>
                        </div>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Collaborated within a{" "}
                                    <strong className={bulletStrong}>cross-functional team</strong> of{" "}
                                    <strong className={bulletStrong}>15+ members</strong>{" "}
                                    to plan and execute a{" "}
                                    <strong className={bulletStrong}>
                                        community infrastructure project
                                    </strong>
                                    , meeting all project deadlines despite fixed timelines and logistical
                                    constraints.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Managed resources, materials, and{" "}
                                    <strong className={bulletStrong}>on-site execution</strong>{" "}
                                    during the construction of a{" "}
                                    <strong className={bulletStrong}>
                                        fully functional cow shelter
                                    </strong>{" "}
                                    in partnership with{" "}
                                    <strong className={bulletStrong}>Shelter Them</strong>, ensuring on-time
                                    project completion under limited resources.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className={bulletDot} />
                                <p className={bulletText}>
                                    Planned and executed{" "}
                                    <strong className={bulletStrong}>
                                        fundraising and budget allocation initiatives
                                    </strong>
                                    , coordinating financial planning to ensure on-time project completion
                                    under{" "}
                                    <strong className={bulletStrong}>
                                        limited funding resources
                                    </strong>.
                                </p>
                            </li>
                        </ul>

                    </div>

                    <span className="text-sm font-semibold text-zinc-500 sm:whitespace-nowrap">
                        Mar. 2024
                    </span>
                </div>
            </div>
        </section>
    );
}
