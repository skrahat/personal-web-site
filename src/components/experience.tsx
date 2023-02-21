import Image from 'next/image';
import fsLogo from '../../public/fairstone-logo.png';
import ptwLogo from '../../public/PTW-logo.png';
import bccLogo from '../../public/BCC-logo.png';

export default function Experience() {
    return (
        <section className="py-10">
            <div>
                <h3 className="text-2xl py-1 text-sky-400 dark:text-white">
                    My Experiences
                </h3>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:text-white flex-auto">
                    <Image src={fsLogo} width={100} height={100} alt="" />
                    <h3 className="text-lg font-medium pt-8 py-4 text-teal-600">
                        fairstone Inc
                    </h3>
                    <p className="py-2">Software Engineer</p>
                    <h4 className="py-1">Developed micro projects</h4>
                    <p className="py-1">Implemented CDK</p>
                    <p className="py-1">Optimized code</p>
                    <p className="py-1">Deployed automated AWS security</p>
                </div>
                <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:text-white flex-auto">
                    <Image src={bccLogo} width={100} height={100} alt="" />
                    <h3 className="py-4 text-teal-600">BCC (federal)</h3>
                    <p className="py-2">Software Engineer, Jr</p>
                    <h4 className="py-1">Analyze datasets</h4>
                    <p className="py-1">Implemented Cucumber</p>
                    <p className="py-1">research in NLP</p>
                </div>
                <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:text-white flex-auto">
                    <Image src={ptwLogo} width={100} height={100} alt="" />
                    <h3 className="py-4 text-teal-600">
                        Pole To Win Canada Inc
                    </h3>
                    <p className="py-2">Automated QA Tester</p>
                    <h4 className="py-1">Automate script</h4>
                    <p className="py-1">Track bugs</p>
                </div>
            </div>
        </section>
    );
}