export default function Experience() {
    return (
        <section
            id="experience"
            className="py-28 border-t border-zinc-200"
        >
            {/* Header */}
            <div className="mb-12">
                <div className="inline-flex items-center gap-3">
                    <span className="inline-block h-2 w-10 rounded-full bg-zinc-900" />
                    <h2
                        className="
              font-black uppercase tracking-[0.28em]
              text-zinc-900
              text-3xl sm:text-4xl
            "
                        style={{
                            fontFamily:
                                "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial",
                        }}
                    >
                        EXPERIENCE
                    </h2>
                </div>

                <p className="mt-4 max-w-2xl text-lg text-black-700">
                    Here are the experiences I’ve gained and the skills I’ve developed through part-time jobs, academics, and projects as I continue to grow my career!
                </p>
            </div>

            {/* Experience list */}
            <div className="space-y-14 max-w-4xl">
                {/* Role 1 */}
                <div className="flex items-start justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-semibold text-zinc-900">
                            Food & Beverage Service Associate · Canada's Wonderland
                        </h3>

                        <ul className="mt-4 space-y-3 text-zinc-700 leading-relaxed">
                            <li>
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900 shrink-0" />
                                    <p className="m-0">
                                        Processed high-volume financial transactions using <strong>Oracle POS</strong> systems,
                                        demonstrating <strong>attention to detail</strong> and <strong>financial accountability</strong>.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900 shrink-0" />
                                    <p className="m-0">
                                        Took <strong>initiative</strong> during peak hours by managing unit operations and
                                        effectively acting as a <strong>team lead</strong> to ensure service continuity.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900 shrink-0" />
                                    <p className="m-0">
                                        Demonstrated <strong>leadership</strong> and <strong>self-management</strong> by independently
                                        coordinating associate responsibilities in a fast-paced environment.
                                    </p>
                                </div>
                            </li>
                        </ul>


                    </div>

                    <span className="text-sm font-semibold text-zinc-500 whitespace-nowrap">
                        Mar. 2023 - Aug. 2025
                    </span>
                </div>

                <div className="border-t border-zinc-200" />

                {/* Role 2 */}
                <div className="flex items-start justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-semibold text-zinc-900">
                            International Service Project · Shelter Them Poverty Relief | Brampton Christian School
                        </h3>

                        <ul className="mt-4 space-y-3 text-zinc-700 leading-relaxed">
                            <li>
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900 shrink-0" />
                                    <p className="m-0">
                                        Collaborated within a <strong className="font-semibold text-zinc-900">cross-functional team</strong> to plan and execute a
                                        community infrastructure project, emphasizing <strong className="font-semibold text-zinc-900">coordination</strong> and
                                        <strong className="font-semibold text-zinc-900"> communication</strong>.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900 shrink-0" />
                                    <p className="m-0">
                                        Organized and facilitated <strong className="font-semibold text-zinc-900">team-building activities</strong> to strengthen
                                        engagement with local community members while adapting to
                                        <strong className="font-semibold text-zinc-900"> cultural and language barriers</strong>.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900 shrink-0" />
                                    <p className="m-0">
                                        Applied <strong className="font-semibold text-zinc-900">structured planning</strong> and
                                        <strong className="font-semibold text-zinc-900"> resource coordination</strong> to support the execution of a fully
                                        functional cow shelter in collaboration with
                                        <strong className="font-semibold text-zinc-900"> Shelter Them</strong>.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900 shrink-0" />
                                    <p className="m-0">
                                        Planned and executed <strong className="font-semibold text-zinc-900">fundraising</strong> and
                                        <strong className="font-semibold text-zinc-900"> resource allocation</strong> initiatives while working within
                                        <strong className="font-semibold text-zinc-900"> budgetary</strong> and
                                        <strong className="font-semibold text-zinc-900"> logistical constraints</strong>.
                                    </p>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <span className="text-sm font-semibold text-zinc-500 whitespace-nowrap">
                        Mar. 2024
                    </span>
                </div>
            </div>
        </section>
    );
}

