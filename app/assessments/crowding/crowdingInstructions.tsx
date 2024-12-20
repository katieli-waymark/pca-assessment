import { AdjustmentsHorizontalIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

interface Props {
    handlePostCalibration: () => void;
}

const CrowdingTestInstructions: React.FC<Props> = ({ handlePostCalibration }) => {
    return (
        <main className="bg-ivory h-[calc(100vh-128px)]">
            <div className="text-left justify-between p-8 bg-ivory space-y-6 px-[10%]">
                <AdjustmentsHorizontalIcon className="h-24 w-24 text-forget-me-not-purple" />

                <h1 className="text-6xl font-medium text-left">
                    Calibration Instructions
                </h1>

                <p>To calibrate the test, you need to measure the length of the line on
                    your screen in cm. Use the following table to map it to the correct
                    viewing distances, for the Corvist Crowding test. </p>

                <div className="w-[3cm] lg:w-[5cm] h-2 bg-indigo border-gray-500" />

                <div className="border rounded-xl overflow-hidden border-black">
                    <table className="min-w-full divide-y divide-black">
                        <thead className="bg-periwinkle text-lg">
                            <tr className="divide-x divide-black">
                                <th className="p-2">Length of line on your screen (cm)</th>
                                <th className="p-2">Correct viewing distance (cm)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black">
                            <tr className="divide-x divide-black">
                                <td className="p-2">3</td>
                                <td className="p-2">180</td>
                            </tr>
                            <tr className="divide-x divide-black">
                                <td className="p-2">5</td>
                                <td className="p-2">300</td>
                            </tr>
                            {/* we're not using large screen as a breakpoint */}
                            {/* <tr className="divide-x divide-black">
                                <td className="p-2">10</td>
                                <td className="p-2">600</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>

                <button
                    className="btn bg-indigo flex flex-row items-center justify-between text-ivory \
                    rounded-xl px-4 py-3 md:static text-base
                    "
                    onClick={handlePostCalibration}
                >
                    <p className="font-semibold pr-2">Start Test</p>
                    <ArrowRightIcon className="text-ivory h-4 w-4 text-bold" />
                </button>
            </div>
        </main>
    )
}

export { CrowdingTestInstructions };